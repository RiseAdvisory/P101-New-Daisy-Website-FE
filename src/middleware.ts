import { NextResponse, NextRequest } from 'next/server';

const SUPPORTED_LOCALES = ['en', 'ar'];
const DEFAULT_LOCALE = 'en';

const AI_REFERRERS: Record<string, string> = {
  'chat.openai.com': 'chatgpt',
  'chatgpt.com': 'chatgpt',
  'perplexity.ai': 'perplexity',
  'claude.ai': 'claude',
  'copilot.microsoft.com': 'copilot',
  'gemini.google.com': 'gemini',
  'you.com': 'you',
  'phind.com': 'phind',
};

function getPreferredLocale(request: NextRequest): string {
  // 1. Check cookie
  const cookieLocale = request.cookies.get('locale')?.value;
  if (cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale)) {
    return cookieLocale;
  }

  // 2. Check Accept-Language header
  const acceptLang = request.headers.get('accept-language') || '';
  if (acceptLang.includes('ar')) {
    return 'ar';
  }

  return DEFAULT_LOCALE;
}

function pathnameHasLocale(pathname: string): boolean {
  return SUPPORTED_LOCALES.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );
}

function setLocaleCookie(
  response: NextResponse,
  locale: string,
): NextResponse {
  response.cookies.set('locale', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax',
  });
  return response;
}

function setGeoCookie(response: NextResponse, request: NextRequest): NextResponse {
  const country = request.headers.get('x-vercel-ip-country');
  if (country) {
    response.cookies.set('geo-country', country, {
      path: '/',
      maxAge: 86400, // 24 hours
      sameSite: 'lax',
    });
  }
  return response;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static assets, API routes, and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/icon-') ||
    pathname.startsWith('/apple-touch') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/sitemap') ||
    pathname.startsWith('/robots') ||
    pathname.startsWith('/llms') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Remove trailing slashes (except for root /)
  if (pathname !== '/' && pathname.endsWith('/')) {
    const newUrl = new URL(request.url);
    newUrl.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(newUrl, 301);
  }

  // AI referrer tracking (preserve existing logic)
  const referer = request.headers.get('referer');
  if (referer) {
    try {
      const refererUrl = new URL(referer);
      const hostname = refererUrl.hostname;

      for (const [domain, source] of Object.entries(AI_REFERRERS)) {
        if (hostname === domain || hostname.endsWith(`.${domain}`)) {
          const url = request.nextUrl.clone();
          const hasUtm = url.searchParams.has('utm_source');

          if (!hasUtm) {
            url.searchParams.set('utm_source', source);
            url.searchParams.set('utm_medium', 'ai_referral');
            url.searchParams.set('utm_campaign', 'ai_search');
            // Ensure locale prefix on redirect URL
            if (!pathnameHasLocale(url.pathname)) {
              const locale = getPreferredLocale(request);
              url.pathname = `/${locale}${url.pathname}`;
            }
            return setGeoCookie(
              setLocaleCookie(
                NextResponse.redirect(url, 301),
                getPreferredLocale(request),
              ),
              request,
            );
          }
          break;
        }
      }
    } catch {
      // Invalid referer URL, continue
    }
  }

  // If URL already has a valid locale prefix, handle convenience redirects then pass through
  if (pathnameHasLocale(pathname)) {
    const urlLocale = pathname.split('/')[1];
    const pathWithoutLocale = pathname.replace(`/${urlLocale}`, '') || '/';

    // Convenience redirects (replaces old next.config.mjs redirects)
    const convenienceRedirects: Record<string, string> = {
      '/features': '/features/business',
      '/features/customer': '/features/business',
    };

    const redirectTo = convenienceRedirects[pathWithoutLocale];
    if (redirectTo) {
      const newUrl = request.nextUrl.clone();
      newUrl.pathname = `/${urlLocale}${redirectTo}`;
      return setGeoCookie(
        setLocaleCookie(NextResponse.redirect(newUrl, 301), urlLocale),
        request,
      );
    }

    // Pass locale to server components via request header
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-locale', urlLocale);
    const response = NextResponse.next({
      request: { headers: requestHeaders },
    });
    response.headers.set('Content-Language', urlLocale);
    return setGeoCookie(setLocaleCookie(response, urlLocale), request);
  }

  // URL does NOT have locale prefix - 301 redirect to add it
  const locale = getPreferredLocale(request);
  const newUrl = request.nextUrl.clone();

  newUrl.pathname = `/${locale}${pathname}`;

  return setGeoCookie(
    setLocaleCookie(NextResponse.redirect(newUrl, 301), locale),
    request,
  );
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
};
