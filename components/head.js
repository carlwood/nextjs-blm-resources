import Head from "next/head";

export default function DocumentHead({ title }) {

  return (
    <Head>
      <title>BLM Resources {title && `| ${title}`}</title>
      <meta name="description" content="Links to antiracism resources" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#ffffff" />
      <link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Open+Sans+Condensed:wght@700&display=swap" rel="stylesheet" />
    </Head>
  )
}
