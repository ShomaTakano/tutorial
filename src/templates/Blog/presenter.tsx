// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';

import { Header } from 'components/headers/Header';
import { SubFirstview } from 'components/firstviews/SubFirstview';
import { Section2 } from 'components/sections/subpages/Section2';
import { SectionContainer1320 } from 'components/containers/SectionContainer1320';
import { RecruitSection } from 'components/sections/RecruitSection';
import { ContactSection } from 'components/sections/ContactSection';
import { Footer } from 'components/footers/Footer2';
import { colors } from 'constants/styles/colors';
import { routes } from 'constants/routes';

import {
  container1320Style,
  blogContainer,
  blogArea,
  imgContainer,
  Category,
  Categorymenu,
  blogTitle,
  hoverStyle,
  CM,
  CMF,
  page,
  pageline,
  pageIconLeft,
  pageIconRight,
} from './style.css';
import React from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { articleListState } from 'features/blog/atoms';
import { BlogCard } from 'components/cards/BlogCard';
import { InternalLink } from 'components/links/InternalLink';

// type layer
// export type DataProps = { works: Work[] };
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const title = `Blog`;
  const subTitle = `ブログ一覧`;

  const list = useRecoilValue(articleListState);

  const values = [
    { item: `すべて` },
    { item: `#ウェブ開発` },
    { item: `#SNS運用` },
    { item: `#コワーキング事業` },
  ];

  return (
    <>
      <Header
        w={`100%`}
        bg={`white`}
        zIndex={`sticky`}
        position={`fixed`}
        // position={`sticky`}
        top={`0rem`}
      />
      <Box
        data-scroll-section
        overflow={`hidden`}
        bgColor={colors.bgBlack}
        // pt={{ base: `80px`, lg: `80px` }}
        as={`main`}
      >
        <SubFirstview
          title={title}
          subTitle={subTitle}
          pageName={routes.blog.name}
        />
        <SectionContainer1320 className={container1320Style}>
          {/* <div className={`${Categorymenu}`}>
            {values.map((value, index) => (
              <div key={value.item}>
                <div className={`${CM} ${index == 0 ? CMF : ``}`}>
                  {value.item}
                </div>
              </div>
            ))}
          </div> */}
          <div className={`${blogArea}`}>
            {list.map((card, index) => (
              <div className={`${blogContainer}`} key={card.title}>
                <BlogCard
                  url={card.url}
                  title={card.title}
                  date={card.date}
                  category={card.category}
                  image={{ ...card.image }}
                />
              </div>
            ))}
          </div>
          {/* <p className={`${page}`}>
            <KeyboardArrowLeftIcon className={`${pageIconLeft}`} />
            <span className={`${pageline}`}>1</span>23...6
            <KeyboardArrowRightIcon className={`${pageIconRight}`} />
          </p> */}
        </SectionContainer1320>
        <RecruitSection />
        <ContactSection />
      </Box>
      <Footer data-scroll-section /*isSubpage*/ />
    </>
  );
};
