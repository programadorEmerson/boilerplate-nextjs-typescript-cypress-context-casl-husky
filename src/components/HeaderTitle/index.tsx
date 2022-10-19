import React, { FC } from 'react';

import Head from 'next/head';

const HeaderTitle: FC<{ title: string }> = ({ title }) => (
  <Head>
    <title>{`JoinUs | ${title}`}</title>
    <meta name="description" content="JoinUs" />
    <link rel="icon" href="/logods.png" />
  </Head>
);

export default HeaderTitle;
