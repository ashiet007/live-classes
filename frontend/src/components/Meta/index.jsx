import Head from "next/head";
import React from "react";

const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={description} />
      <meta
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        name="viewport"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#2B5797" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />
    </Head>
  );
};

export default Meta;
