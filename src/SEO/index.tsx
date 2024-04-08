import Head from "next/head";
import React from "react";

interface IProps {
  title?: string;
  description?: string;
  URL?: string;
  IMG?: string;
}

export default function SEO(props: IProps) {
  const { title, description, URL, IMG } = props;
  return (
    <Head>
      <title>{title ? `빌더브릿지 | ${title}` : "빌더브릿지"}</title>
      <meta name="description" content={description || "빌더브릿지"} />
      <link rel="icon" href="/images/logos/blue.png" sizes="any" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "next"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={URL || "http://localhost:3000"} />
      <meta
        property="og:image"
        content={IMG || "https://localhost:3000/static/logo/logo_2.png"}
      />
      <meta property="og:article:author" content="next" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="original" data-rh="true" />
      <meta name="twitter:description" content={description || "next wave"} />
      <meta name="twitter:site" content="@http://localhost:3000 next" />
      <meta
        name="twitter:image"
        content={IMG || "http://localhost:3000/static/logo/logo_2.png"}
      />
    </Head>
  );
}
