// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { Header } from 'components/headers/Header';
import { Footer } from 'components/footers/Footer2';
import { SubFirstview } from 'components/firstviews/SubFirstview';
import { SectionContainer1420 } from 'components/containers/SectionContainer1420';
import { ContactFormSection } from 'components/sections/subpages/ContactFormSection';

// import { space, width, fontSize } from 'constants/styles';
import { colors } from 'constants/styles/colors';
import { contact } from 'constants/routes';
import { container1420Style } from './style.css';

// type layer
// export type DataProps = { works: Work[] };
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const title = `Contact`;
  const subTitle = `お問い合わせ`;

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
          as={`main`}
        >
          <SubFirstview
            title={title}
            subTitle={subTitle}
            pageName={contact.name}
          />
          <ContactFormSection />
        </Box>
        <Footer data-scroll-section /*isSubpage*/ />
      </div>
    </>
  );
};
