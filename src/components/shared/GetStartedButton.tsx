'use client';
import { MouseEvent, useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  SIGNUP_URL,
  buildSignupUrl,
  campaignSlugFromPath,
} from '@/lib/attribution';
import { trackConversion } from '@/lib/meta/trackConversion';
import { getLocaleFromPathname } from '@/lib/utils/locale';

/**
 * "Get started" CTA linking the marketing site to web app signup.
 *
 * The campaign slug is derived from the pathname rather than passed in, so
 * utm_campaign cannot drift out of sync with the page the button sits on.
 *
 * Attribution lives in localStorage, so the stamped href can only be built
 * after mount. The button renders with the plain signup URL first and swaps
 * in the attributed one on hydration: a crawler or a visitor without JS still
 * gets a working link, just an unattributed one, which is the right way round.
 *
 * App-store buttons are untouched by this; it is an additional path, not a
 * replacement.
 */

/**
 * Labelled by destination, not by offer. This button and the app-store
 * button used to both promise "start your free trial", which is true of
 * both and therefore told the visitor nothing about which to pick. The
 * trial promise now lives in shared subtext under the pair.
 */
const LABELS = {
  en: 'Start free trial',
  ar: 'ابدأ التجربة المجانية',
};

interface Props {
  className?: string;
  /** Override the derived campaign slug. Rarely needed. */
  campaign?: string;
  label?: string;
}

export const GetStartedButton = ({ className, campaign, label }: Props) => {
  const pathname = usePathname();
  const locale = useMemo(() => getLocaleFromPathname(pathname), [pathname]);
  const slug = campaign ?? campaignSlugFromPath(pathname || '');
  const [href, setHref] = useState(SIGNUP_URL);

  useEffect(() => {
    setHref(buildSignupUrl(slug));
  }, [slug]);

  /**
   * The href is rebuilt at click time because the pixel sets _fbp after this
   * button mounts, so on a first visit the mount-time href lacks it.
   *
   * trackConversion sends its Conversions API request with keepalive before
   * returning, so it survives the page navigating away.
   */
  const onActivate = (e: MouseEvent<HTMLAnchorElement>) => {
    // auxclick also fires for the right button; only the middle one navigates.
    if (e.type === 'auxclick' && e.button !== 1) return;
    const url = buildSignupUrl(slug);
    e.currentTarget.href = url;
    setHref(url);
    void trackConversion('GetStartedClick', { customData: { content_name: slug } });
  };

  const text = label ?? (locale === 'ar' ? LABELS.ar : LABELS.en);

  return (
    <a
      href={href}
      onClick={onActivate}
      onAuxClick={onActivate}
      data-testid="get-started-cta"
      data-campaign={slug}
      className={
        className ??
        'inline-block rounded-lg bg-primary px-8 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-primary/90 ltr:font-montserrat rtl:font-cairo'
      }
    >
      {text}
    </a>
  );
};
