// import layer
import { VFC } from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';

import { FooterContent1 } from 'components/footers/FooterContent1';
import { FooterContent3 } from 'components/footers/FooterContent3';
import { FooterContent4 } from 'components/footers/FooterContent4';
import { footer as footerColors } from 'constants/styles/colorsAd';
import { footer, sections } from 'constants/styles/spacesAd';
import { colors } from 'constants/styles/colors';
import { SectionContainer1420 } from 'components/containers/SectionContainer1420';

import { container } from './style.css';

// type layer
export type StyleProps = FlexProps;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  return (
    <Flex
      pt={footer.pt}
      pb={footer.pb}
      bgColor={colors.background}
      justifyContent={`center`}
      as={`footer`}
      {...props}
    >
      <SectionContainer1420 className={`${container}`}>
        <Flex
          flexDir={{ base: `column`, lg: `row` }}
          justify={{ lg: `space-between` }}
          w={
            {
              // xl: `${(75 * 16) / 12.8}vw`,
            }
          }
          px={sections.section1.mx}
          mx={`auto`}
        >
          <FooterContent1 mr={footer.content.mr} />
          <FooterContent3
            // display={{ base: `none`, lg: `initial` }}
            mt={footer.content.mt}
          />
          <FooterContent4
            mt={{ ...footer.content.mt, base: `7.47vw` }}
            // mt={{ ...footer.content.mt, base: `1.75rem` }}
            display={{ lg: `none` }}
          />
        </Flex>
      </SectionContainer1420>
    </Flex>
  );
};
