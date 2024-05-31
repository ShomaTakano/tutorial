// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { Header } from 'components/headers/Header';
import { Footer } from 'components/footers/Footer2';
import { SubFirstview } from 'components/firstviews/SubFirstview';
import { SectionContainer1620 } from 'components/containers/SectionContainer1620';
import { Image } from 'components/images/Image';
import { colors } from 'constants/styles/colors';
import { routes } from 'constants/routes';
import { container1620Style } from './style.css';
import { SectionCircle } from 'components/sections/subpages/SectionCircle';
import { BackgroundCircle } from 'components/circles/BackgroundCircle';
import { image } from 'components/sections/ServiceSection/style.css';

import siteImage from 'public/images/services/website.png';
import systemImage from 'public/images/services/web-system.png';
import coworkingImage from 'public/images/services/coworking.png';

// type layer
// export type DataProps = { works: Work[] };
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const title = `Services`;
  const subTitle = `事業概要`;

  return (
    <>
      <Header
        w={`100%`}
        bg={`white`}
        zIndex={`sticky`}
        position={`fixed`}
        top={`0rem`}
      />
      <Box
        data-scroll-section
        overflow={`hidden`}
        bgColor={colors.background}
        // pt={{ base: `80px`, lg: `80px` }}
        as={`main`}
        zIndex={-2}
      >
        <BackgroundCircle
          data-scroll
          data-scroll-repeat
          data-scroll-speed={`1.75`}
        ></BackgroundCircle>
        <SubFirstview
          title={title}
          subTitle={subTitle}
          pageName={routes.overview.name}
        />
        <SectionContainer1620
          className={`${container1620Style}`}
          as={`section`}
        >
          <SectionCircle
            title={`Webサイト制作`}
            subTitle={``}
            description={`Webの先端技術「モダンWeb」を使った高セキュリティで安全、表示スピードが速くストレスを感じさせない高品質なWebサイトを公開までスピーディにお届けします。`}
          />
          <Image
            className={image}
            image={{ src: siteImage, layout: `fill`, objectFit: `cover` }}
          />
        </SectionContainer1620>
        <SectionContainer1620
          className={`${container1620Style}`}
          as={`section`}
        >
          <Image
            className={image}
            image={{ src: systemImage, layout: `fill`, objectFit: `cover` }}
          />
          <SectionCircle
            title={`Webシステム開発`}
            subTitle={``}
            description={`弊社のWebシステム開発は、クラウドやSaaSを用いた高速な開発が特徴です。TypeScript, React, Next.js, といったモダンWeb技術を使って開発をしています。また、LINE上で動作するLIFFと呼ばれるWebアプリ開発も対応可能です。`}
          />
        </SectionContainer1620>
        <SectionContainer1620
          className={`${container1620Style}`}
          as={`section`}
        >
          <SectionCircle
            title={`Not The University`}
            subTitle={`新潟大学コワーキングスペースの管理`}
            description={`新潟大学五十嵐キャンパスにある弊社が運営する学生と企業をつなげるコワーキングスペースです。大学内にあるけど大学とは一味違うサードプレイスの提供をコンセプトとして学生・企業にとって新しい場所を提供します。
※現在改装中`}
          />
          <Image
            className={image}
            image={{ src: coworkingImage, layout: `fill`, objectFit: `cover` }}
          />
        </SectionContainer1620>
      </Box>
      <Footer data-scroll-section isSubpage />
    </>
  );
};
