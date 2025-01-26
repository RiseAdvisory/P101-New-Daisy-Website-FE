import Head from 'next/head';

export default function Home() {
  return (
  <>
      <Head>
        <title>The Daisy</title>
        <meta name="description" content="{data.description}" />
        <meta property="og:title" content="{data.title}" />
        <meta property="og:description" content="{data.description}" />
        <meta property="og:image" content="https://www.jointhedaisy.com/_next/image?url=https%3A%2F%2Fmotivated-belief-b4a000ad6e.media.strapiapp.com%2FJoin_Colleagues_336b010fe7.png&w=1080&q=75" />
        <meta property="og:url" content="{`https://example.com/${data.slug}`}" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className=""></main>
  </>
  );
}