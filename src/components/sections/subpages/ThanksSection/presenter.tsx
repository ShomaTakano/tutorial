// import layer
import { FC } from 'react';
import { Box, Stack, Flex, Icon } from '@chakra-ui/react';
// import { FaFacebook, FaTwitter } from 'react-icons/fa';
// import { FacebookShareButton, TwitterShareButton } from 'react-share';

import { SectionContainer920 } from 'components/containers/SectionContainer920';
import { SubSectionContainer } from 'components/containers/SubSectionContainer';
import { SubSectionContainer768 } from 'components/containers/SubSectionContainer768';
import { SubpageMessage2 } from 'components/texts/SubpageMessage2';
import { Button } from 'components/buttons/Button';
import { routes } from 'constants/routes';
import { InternalLink } from 'components/links/InternalLink';

import {
  messages as messageSpaces,
  sections as spaces,
  article as articleSpaces,
} from 'constants/styles/spacesAd';
// import { facebookLink, twitterLink, routes } from '~/constants/routes';
// import { ORIGIN_URL } from 'constants/parameters';
// import { companyName } from 'constants/seo';
import { container } from './style.css';
import { InternalButtonLink } from 'components/links/InternalButtonLink';

// type layer
export type StyleProps = Record<string, any>;
export type DataProps = Record<string, any>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const messages = [
    `お問合せいただき、ありがとうございます。`,
    `
`,
    `ご登録いただいたメールアドレス宛に、メールをお送りしております。`,
    `メールが届かない場合はお手数ですがご連絡いただくか、再度お問合せください。`,
    `ご不明点などございましたら、お気軽にお問合せください。`,
  ];

  return (
    <SubSectionContainer768
      className={`${container}`}
      pb={{ base: `32.53vw`, lg: `12.5rem` }}
    >
      <Stack
        spacing={{ base: `12vw`, lg: `2rem`, xl: `3.01rem`, '2xl': `4rem` }}
        align={`center`}
      >
        <Box>
          {messages.map((message) => (
            <SubpageMessage2 key={message}>{message}</SubpageMessage2>
          ))}
        </Box>
        <InternalLink href={routes.home.url}>
          <Button
            py={{ base: `5.26vw`, lg: `1.8em`, xl: `1.5em` }}
            w={{ base: `45vw`, lg: `11rem`, xl: `15rem` }}
            mx={`auto`}
          >
            TOPへ戻る
          </Button>
        </InternalLink>
      </Stack>
    </SubSectionContainer768>
  );
};
