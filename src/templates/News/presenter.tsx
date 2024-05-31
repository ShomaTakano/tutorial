// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { Header } from 'components/headers/Header';
import { Footer } from 'components/footers/Footer2';
import { SubFirstview } from 'components/firstviews/SubFirstview';
import { SectionContainer1420 } from 'components/containers/SectionContainer1420';
import { ContactFormSection } from 'components/sections/subpages/ContactFormSection';
import { NewsListSection } from 'components/sections/subpages/NewsListSection';
import { RecruitSection } from 'components/sections/RecruitSection';
import { ContactSection } from 'components/sections/ContactSection';

// import { space, width, fontSize } from 'constants/styles';
import { colors } from 'constants/styles/colors';
import { routes } from 'constants/routes';
import { SectionContainer1320 } from 'components/containers/SectionContainer1320';
import {
  container1420Style,
  container1320Style,
  Categorymenu,
  CM,
  CMF,
  page,
  pageline,
  pageIconLeft,
  pageIconRight,
} from './style.css';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// type layer
// export type DataProps = { works: Work[] };
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const title = `News`;
  const subTitle = `ニュース一覧`;

  return (
    <>
      <div>
        <Header
          w={`100%`}
          bg={`white`}
          zIndex={`sticky`}
          position={`fixed`}
          top={0}
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
            pageName={routes.news.name}
          />
          <SectionContainer1320 className={container1320Style}>
            {/* カテゴリメニュー
            <div className={`${Categorymenu}`}>
              {values.map((value, index) => (
                <div key={value.item}>
                  <div className={`${CM} ${index == 0 ? CMF : ``}`}>
                    {value.item}
                  </div>
                </div>
              ))}
            </div> */}
          </SectionContainer1320>
          <NewsListSection />
          {/*  ページネーション 
          <p className={`${page}`}>
            <KeyboardArrowLeftIcon className={`${pageIconLeft}`} />
            <span className={`${pageline}`}>1</span>23...6
            <KeyboardArrowRightIcon className={`${pageIconRight}`} />
          </p> */}
          <RecruitSection />
          <ContactSection />
        </Box>
        <Footer data-scroll-section /*isSubpage*/ />
      </div>
    </>
  );
};
