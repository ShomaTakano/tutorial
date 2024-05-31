import type { NextPage } from 'next';
import { Box, Stack } from '@chakra-ui/react';

import { SeoComponent } from 'components/seo/SeoComponent';

import { Thanks as Template } from 'templates/Thanks';

// type layer
// type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Contact: NextPage = () => {
  const h1 = `CONTACT`;

  const metaTitle = `お問い合わせ完了 | 株式会社ラクウェブ`;
  const metaDescription = `お問い合わせありがとうございました。`;

  return (
    <>
      <SeoComponent title={metaTitle} description={metaDescription} />
      <Template />
    </>
  );
};

export default Contact;
