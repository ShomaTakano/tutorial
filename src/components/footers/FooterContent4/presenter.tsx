// import layer
import { VFC } from 'react';
import { Stack, StackProps } from '@chakra-ui/react';

import { WhiteText } from 'components/texts/WhiteText';

import { footer } from 'constants/styles/fontSizeAd';
import { footer as footerSpaces } from 'constants/styles/spacesAd';

import { copyright } from './style.css';

// type layer
export type StyleProps = StackProps;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: VFC<PresenterProps> = ({ ...props }) => {
  return (
    <Stack
      direction={{ base: `column`, lg: `row` }}
      spacing={footerSpaces.content1.spacing}
      {...props}
    >
      <Stack spacing={footerSpaces.content1.imageBottom}>
        {/*
        <Image
          w={{ base: `31.47vw`, lg: `4.355rem`, xl: `6.5rem` }}
          // w={{ base: `7.375rem`, lg: `4.355rem`, xl: `6.5rem` }}
          image={{ src: yukimuroImage, alt: `雪室屋` }}
        />
      */}
        <WhiteText className={`${copyright}`}>
          {`Copyright © RAKUWEB, Inc.
All Rights Reserved.`}
        </WhiteText>
      </Stack>
    </Stack>
  );
};
