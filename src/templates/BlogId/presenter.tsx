// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';

import { Header } from 'components/headers/Header';
import { Footer } from 'components/footers/Footer2';
import { SubFirstview } from 'components/firstviews/SubFirstview';
import { SectionContainer1420 } from 'components/containers/SectionContainer1420';
import { NewsFirstview } from 'components/firstviews/NewsFirstview';
import { BlogIdSection } from 'components/sections/subpages/BlogIdSection';

import { RecruitSection } from 'components/sections/RecruitSection';
import { ContactSection } from 'components/sections/ContactSection';

// import { space, width, fontSize } from 'constants/styles';
import { colors } from 'constants/styles/colors';
import { routes } from 'constants/routes';
import { articleState } from 'features/blog/atoms';
// type layer
// export type DataProps = { works: Work[] };
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const { title, date, category, content, imageUrl, url } =
    useRecoilValue(articleState);

  return (
    <>
      <div>
        <Header
          w={`100%`}
          bg={`white`}
          zIndex={`sticky`}
          position={`fixed`}
          // position={`sticky`}
          top={0}
        />
        <Box
          data-scroll-section
          overflow={`hidden`}
          bgColor={colors.white}
          // pt={{ base: `80px`, lg: `80px` }}
          as={`main`}
        >
          <SubFirstview
            position={`relative`}
            title={`Blog`}
            subTitle={`ブログ`}
            pageName={routes.blog.name}
          />
          <NewsFirstview title={title} date={date} category={category} />
          <BlogIdSection content={content} image={imageUrl} />
          <RecruitSection />
          {/* <BlogSection /> */}
          <ContactSection />
        </Box>
        <Footer data-scroll-section overflow={`hidden`} /*isSubpage*/ />
      </div>
    </>
  );
};
