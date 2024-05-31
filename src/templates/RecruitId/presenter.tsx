// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';

import { Header } from 'components/headers/Header';
import { Footer } from 'components/footers/Footer2';
import { SubFirstview } from 'components/firstviews/SubFirstview';
import { InternalLink } from 'components/links/InternalLink';
import { Flex } from 'components/fundamentals/Flex';

import { RecruitIdSection } from 'components/sections/subpages/RecruitIdSection';

import { BlogSection } from 'components/sections/BlogSection';
import { RecruitSection } from 'components/sections/RecruitSection';
import { ContactSection } from 'components/sections/ContactSection';

import {
  container1320Style,
  breadcrumb,
  contact,
  main,
  titleStyle,
  subTitleStyle,
  subTextWrapper,
} from './style.css';

// import { space, width, fontSize } from 'constants/styles';
import { colors } from 'constants/styles/colors';
import { routes } from 'constants/routes';
import { recruitState } from 'features/recruit/atoms';
import { Text } from 'components/texts/Text';
import { ServiceContactSection } from 'components/sections/subpages/ServiceContactSection';
// type layer
// export type DataProps = { works: Work[] };
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const { title, date, image, content } = useRecoilValue(recruitState);

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
            title={`Recruit`}
            subTitle={`採用情報`}
            pageName={routes.recruit.name}
          />
          <div className={`${container1320Style}`}>
            <ul className={`${breadcrumb}`}>
              <InternalLink href={routes.home.url}>
                <li>{``}</li>
              </InternalLink>
              <Flex className={`${subTextWrapper}`}>
                <div className={`${subTitleStyle}`}>{date}</div>
              </Flex>
            </ul>

            <Text className={`${main}`}>
              <div>
                <h1 className={`${titleStyle}`}>{title}</h1>
              </div>
            </Text>
          </div>
          <RecruitIdSection content={content} image={image} />
          <div className={`${contact}`}>
            <ServiceContactSection />
          </div>
          <RecruitSection />
          {/* <BlogSection /> */}
          <ContactSection />
        </Box>
        <Footer data-scroll-section overflow={`hidden`} /*isSubpage*/ />
      </div>
    </>
  );
};
