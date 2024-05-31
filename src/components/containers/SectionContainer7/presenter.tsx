// import layer
import { FC } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

import { sections } from 'constants/styles/sizesAd';
import { sections as spaces } from 'constants/styles/spacesAd';

// type layer
export type StyleProps = BoxProps;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ children, ...props }) => {
  return (
    <Box
      w={sections.section1.width}
      maxWidth={sections.section1.maxWidth}
      mx={`auto`}
      my={spaces.subpages.my}
      as={`section`}
      {...props}
    >
      {children}
    </Box>
  );
};
