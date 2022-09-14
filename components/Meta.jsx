import React from "react";
import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{`${title} | SmartDragon`}</title>
    </Head>
  );
};

// KEYNOTE set default props
Meta.defaultProps = {
  title: "Education Expert",
  keywords: "Education, Children, STEM, Toys",
  description:
    "Smartdragon is an international education organization, providing professional educational toys to children in STEM areas.",
};

export default Meta;
