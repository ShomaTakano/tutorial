// import layer
import { FC } from 'react';

import { Text } from 'components/texts/Text';
import { Image } from 'components/images/Image';
import { SectionCircle } from 'components/sections/SectionCircle';

import {
  container,
  inner,
  titleContainer,
  h2,
  h2Sub,
  link,
  linkTitleStyle,
  linkAboutStyle,
  uSpi,
  uPci,
  icon,
  h2Wrapper,
  subSection,
  image,
} from './style.css';
import { TopSectionContainer1620 } from 'components/containers/TopSectionContainer1620';

import overviewImage from 'public/images/overview/overview.png';
import { routes } from 'constants/routes';

// type layer
export type StyleProps = Record<string, unknown>;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const title = `Company`;
  const subTitle = `会社概要`;
  const description = `株式会社ラクウェブは場所にとらわれずに自由に様々な場所で働ける環境を作っています。
本社や営業所の所在地、その他の会社の情報はこちらから！`;

  return (
    <TopSectionContainer1620 className={`${subSection}`}>
      <Image
        className={`${image}`}
        data-scroll
        data-scroll-repeat
        data-scroll-speed={`1.15`}
        image={{ src: overviewImage, layout: `fill`, objectFit: `cover` }}
      ></Image>
      <div data-scroll data-scroll-repeat data-scroll-speed={`2.5`}>
        <SectionCircle
          title={title}
          subTitle={subTitle}
          description={description}
          url={routes.overview.url}
        />
      </div>
    </TopSectionContainer1620>
  );
};
