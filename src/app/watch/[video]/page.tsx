import { get } from '@vercel/global-config';
import { notFound, redirect } from 'next/navigation';

// Each explainer video's permanent link (jointhedaisy.com/watch/<video>):
// a temporary redirect to its current YouTube upload. The upload id lives
// in a Vercel Global Config store the explainer toolkit keeps current.
// The YouTube address is built here, so the link can only lead to YouTube.
export const dynamic = 'force-dynamic';

const LINK = /^[a-z0-9-]{1,120}$/;
const YOUTUBE_ID = /^[A-Za-z0-9_-]{11}$/;

async function currentUpload(video: string): Promise<string | undefined> {
  try {
    const id = await get<string>(video);
    return typeof id === 'string' && YOUTUBE_ID.test(id) ? id : undefined;
  } catch {
    return undefined;
  }
}

export default async function WatchPage({
  params,
}: {
  params: { video: string };
}) {
  const { video } = params;
  const id = LINK.test(video) ? await currentUpload(video) : undefined;
  if (!id) {
    notFound();
  }
  redirect(`https://www.youtube.com/watch?v=${id}`);
}
