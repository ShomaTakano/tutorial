// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { Header } from 'components/headers/Header';
import { Footer } from 'components/footers/Footer2';
import { SubFirstview } from 'components/firstviews/SubFirstview';
import { Section2 } from 'components/sections/subpages/Section2';
import { SectionContainer1420 } from 'components/containers/SectionContainer1420';
import { OverviewSection } from 'components/sections/subpages/OverviewSection';

// import { space, width, fontSize } from 'constants/styles';
import { colors } from 'constants/styles/colors';
import { routes } from 'constants/routes';
import { container1420Style } from './style.css';

// type layer
// export type DataProps = { works: Work[] };
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const title = `Overview`;
  const subTitle = `会社概要`;

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
          bgColor={colors.background}
          // pt={{ base: `80px`, lg: `80px` }}
          as={`main`}
        >
          <SubFirstview
            title={title}
            subTitle={subTitle}
            pageName={routes.overview.name}
          />
          <OverviewSection />
        </Box>
        <Footer data-scroll-section overflow={`hidden`} isSubpage />
      </div>
    </>
  );
};
