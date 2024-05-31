// import layer
import { FC } from 'react';
import { Stack, StackProps } from '@chakra-ui/react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import { Image } from 'components/images/Image';
import { WhiteText } from 'components/texts/WhiteText';
import { footer as footerSpaces } from 'constants/styles/spacesAd';

import { copyright } from '../FooterContent4/style.css';
import { logo } from './style.css';

import companyImage from 'public/svg/logo-white.svg';
import yukimuroImage from 'public/img/yukimuro-logo.png';

// type layer
export type StyleProps = StackProps;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  return (
    <Stack
      justify={{ lg: `space-between` }}
      spacing={footerSpaces.content1.spacing}
      {...props}
    >
      <Stack spacing={footerSpaces.content1.imageBottom}>
        <Image
          className={logo}
          image={{
            src: `/svg/logo-text-white.svg`,
            width: 300,
            height: 73,
            layout: `responsive`,
          }}
        />
      </Stack>
      <Stack
        display={{ base: `none`, lg: `initial` }}
        spacing={footerSpaces.content1.imageBottom}
      >
        <WhiteText className={`${copyright}`}>
          {`Copyright © RAKUWEB Inc.
All Rights Reserved.`}
        </WhiteText>
      </Stack>
    </Stack>
  );
};
