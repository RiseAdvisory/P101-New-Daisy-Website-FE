import { NextResponse, NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const ua = userAgent.toLowerCase();

  const pathname = new URL(request.url).pathname;

  // ✅ Never prerender compliance pages (Meta validators must reach origin)
  if (
    pathname === '/privacy-policy' ||
    pathname === '/terms' ||
    pathname === '/terms-conditions' ||
    pathname === '/data-deletion' ||
    pathname === '/cookie-policy'
  ) {
    return NextResponse.next();
  }

  const bots = [
    'googlebot',
    'yahoo! slurp',
    'bingbot',
    'yandex',
    'baiduspider',
    'facebookexternalhit',
    'twitterbot',
    'rogerbot',
    'linkedinbot',
    'embedly',
    'quora link preview',
    'showyoubot',
    'outbrain',
    'pinterest/0.',
    'developers.google.com/+/web/snippet',
    'slackbot',
    'vkshare',
    'w3c_validator',
    'redditbot',
    'applebot',
    'whatsapp',
    'flipboard',
    'tumblr',
    'bitlybot',
    'skypeuripreview',
    'nuzzel',
    'discordbot',
    'google page speed',
    'qwantify',
    'pinterestbot',
    'bitrix link preview',
    'xing-contenttabreceiver',
    'chrome-lighthouse',
    'telegrambot',
    'integration-test',
  ];

  const IGNORE_EXTENSIONS = [
    '.js',
    '.css',
    '.xml',
    '.less',
    '.png',
    '.jpg',
    '.jpeg',
    '.gif',
    '.pdf',
    '.doc',
    '.txt',
    '.ico',
    '.rss',
    '.zip',
    '.mp3',
    '.rar',
    '.exe',
    '.wmv',
    '.avi',
    '.ppt',
    '.mpg',
    '.mpeg',
    '.tif',
    '.wav',
    '.mov',
    '.psd',
    '.ai',
    '.xls',
    '.mp4',
    '.m4a',
    '.swf',
    '.dat',
    '.dmg',
    '.iso',
    '.flv',
    '.m4v',
    '.torrent',
    '.woff',
    '.ttf',
    '.svg',
    '.webmanifest',
  ];

  const isBot = bots.some((bot) => ua.includes(bot));
  const isPrerender = request.headers.get('x-prerender');

  const ext = pathname.includes('.')
    ? pathname.substring(pathname.lastIndexOf('.')).toLowerCase()
    : '';

  if (isPrerender || !isBot || (ext && IGNORE_EXTENSIONS.includes(ext))) {
    return NextResponse.next();
  }

  // Bot -> prerender
  const newURL = `https://service.prerender.io/${request.url}`;
  const newHeaders = new Headers(request.headers);

  // ⚠️ If this is empty in Edge, prerender will reject (your current issue)
  newHeaders.set('X-Prerender-Token', process.env.PRERENDER_TOKEN || '');
  newHeaders.set('X-Prerender-Int-Type', 'NextJS');

  const res = await fetch(
    new Request(newURL, { headers: newHeaders, redirect: 'manual' }),
  );

  const responseHeaders = new Headers(res.headers);
  responseHeaders.set('X-Redirected-From', request.url);

  return new Response(res.body, {
    status: res.status,
    statusText: res.statusText,
    headers: responseHeaders,
  });
}
