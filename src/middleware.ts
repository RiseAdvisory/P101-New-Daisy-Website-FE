import { NextResponse, NextRequest } from 'next/server';

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

export async function middleware(request: NextRequest) {
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
            return NextResponse.redirect(url);
          }
          break;
        }
      }
    } catch {
      // Invalid referer URL, continue normally
    }
  }

  return NextResponse.next();
}
