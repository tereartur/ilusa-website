import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface Props {
  title: string;
  description?: string;
  image?: string;
  twitterCard?: string;
}

const HeadMatter: React.FC<Props> = props => {
  const router = useRouter();
  const url = `https://ilusa.ee${router.asPath}`;
  const image = props.image || 'https://ilusa.ee/static/og-logo.png';

  const twitterCard = props.twitterCard || 'summary';

  return (
    <Head>
      <title>{props.title} · Ilusa</title>
      {/*<link rel="shortcut icon" href="/favicon.png"></link>*/}
      <link rel="canonical" href={url} />
      <meta
        property="description"
        content={props.description}
        key="description"
      />
      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:title" content={props.title} key="og:title" />
      <meta property="og:locale" content="en_US" key="og:locale" />
      <meta
        property="og:description"
        content={props.description}
        key="og:description"
      />
      <meta property="og:url" content={url} key="og:url" />
      <meta property="og:site_name" content="Ilusa" key="og:site_name" />
      <meta property="og:image" content={image} key="og:image" />
      <meta name="twitter:site" content="@ilusa" key="twitter:site" />
      <meta name="twitter:card" content={twitterCard} key="twitter:card" />
    </Head>
  );
};

export default HeadMatter;
