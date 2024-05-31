// import layer
import { FC } from 'react';
import { Stack, StackProps } from '@chakra-ui/react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import { InternalLink } from 'components/links/InternalLink';
import { ExternalLink } from 'components/links/ExternalLink';
import { WhiteText } from 'components/texts/WhiteText';

import { routes, contact } from 'constants/routes';
import { footer } from 'constants/styles/fontSizeAd';
import { contactUrl } from 'constants/routes';

import { navName } from './style.css';

// type layer
export type StyleProps = StackProps;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const list = [
    { name: `ABOUT`, url: `/about` },
    { name: `SERVICES`, url: `/services/web-system` },
    { name: `NEWS`, url: `/news` },
    { name: `RECRUIT`, url: `/recruit` },
    { name: `BLOG`, url: `/blog` },
    { name: `CONTACT`, url: `/contact` },
  ];
  // const list = [
  //   routes.home,
  //   routes.about,
  //   routes.services,
  //   routes.overview,
  //   routes.news,
  //   contact,
  // ];
  return (
    <Stack
      spacing={{ base: `${16 / 3.75}vw`, lg: `${16 / 19.2}vw` }}
      w={`fit-content`}
      {...props}
    >
      {list.map((nav) =>
        nav.name == 'CONTACT' ? (
          <InternalLink key={nav.name} href={nav.url}>
            <WhiteText
              className={`${navName}`}
              w={`fit-content`}
              fontSize={footer.nav}
            >
              {nav.name}
            </WhiteText>
          </InternalLink>
        ) : (
          <InternalLink key={nav.name} href={nav.url}>
            <WhiteText
              className={`${navName}`}
              w={`fit-content`}
              fontSize={footer.nav}
            >
              {nav.name}
            </WhiteText>
          </InternalLink>
        )
      )}
    </Stack>
  );
};

// <InternalLink key={nav.name} href={nav.url}>
// </InternalLink>
