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

import {} from 'constants/styles/spacesAd';
// import { facebookLink, twitterLink, routes } from '~/constants/routes';
// import { ORIGIN_URL } from 'constants/parameters';
// import { companyName } from 'constants/seo';
import { img, container1320Style, contentStyle, introtext } from './style.css';
import { InternalButtonLink } from 'components/links/InternalButtonLink';
import { articleState } from 'features/blog/atoms';

////////////////////////////////
import { SectionContainer1320 } from 'components/containers/SectionContainer1320';

// type layer
export type StyleProps = Record<string, any>;
export type DataProps = { content: string; image: string };
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ content, image }) => {
  return (
    <SubSectionContainer768
      w={{ lg: `${768 / 19.2}vw` }}
      className={`${container1320Style}`}
    >
      {image && <img className={`${img}`} src={image} alt="blog" />}
      <MarkdownContent input={content}></MarkdownContent>
    </SubSectionContainer768>
  );
};
// export const Presenter: FC<PresenterProps> = ({ ...props }) => {
// const { content } = useRecoilValue(articleState);
// <SectionContainer920 className={`${container}`} as={`section`}>
//   <Stack
//   // spacing={{ ...articleSpaces.content.spacing }}
//   >
//     <MarkdownContent input={content} />
//     <Stack spacing={{ base: `5.07vw`, lg: `3.125rem` }}>
//       <Stack
//         spacing={{ base: `3.2vw`, lg: `2rem` }}
//         direction={{ base: `row`, lg: `row` }}
//         justifyContent={`center`}
//       >
//         <InternalButtonLink href={routes.news.url}>
//           <Button>{`ニュース一覧へ戻る`}</Button>
//         </InternalButtonLink>
//       </Stack>
//     </Stack>
//   </Stack>
// </SectionContainer920>
//   );
// };