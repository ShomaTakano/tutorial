// import layer
import { FC } from 'react';
import { Box, Stack, Flex, Icon } from '@chakra-ui/react';
// import { FaFacebook, FaTwitter } from 'react-icons/fa';
// import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { useRecoilValue } from 'recoil';

import { SectionContainer920 } from 'components/containers/SectionContainer920';
import { SubSectionContainer } from 'components/containers/SubSectionContainer';
import { SubSectionContainer768 } from 'components/containers/SubSectionContainer768';
import { MarkdownContent } from 'features/news/MarkdownContent';
import { SubpageMessage2 } from 'components/texts/SubpageMessage2';
import { Button } from 'components/buttons/Button';
import { routes } from 'constants/routes';

import {
  messages as messageSpaces,
  sections as spaces,
  article as articleSpaces,
} from 'constants/styles/spacesAd';
// import { facebookLink, twitterLink, routes } from '~/constants/routes';
// import { ORIGIN_URL } from 'constants/parameters';
// import { companyName } from 'constants/seo';
import { container, img, container1320Style, contentStyle } from './style.css';
import { InternalButtonLink } from 'components/links/InternalButtonLink';

import { SectionContainer1320 } from 'components/containers/SectionContainer1320';
import { ExternalLink } from 'components/links/ExternalLink';

// type layer
export type StyleProps = Record<string, any>;
export type DataProps = { link?: string; content: string; image: string };
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ link, content, image }) => {
  return (
    <SubSectionContainer768
      w={{ lg: `${768 / 19.2}vw` }}
      className={`${container1320Style}`}
    >
      {image && <img className={`${img}`} src={image} alt="news" />}
      {/* <div className={`${contentStyle}`}>{content}</div> */}
      <MarkdownContent input={content} />
      {/* {link && (
        <div className={`${contentStyle}`}>
          詳しくはこちら▶︎
          <ExternalLink href={link} as={`span`}>
            {link}
          </ExternalLink>
        </div>
      )} */}
    </SubSectionContainer768>
  );
};
