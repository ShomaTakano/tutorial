// import layer
import { FC } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

import { subSections as sizes } from 'constants/styles/sizesAd';

// type layer
export type StyleProps = BoxProps;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ children, ...props }) => {
  return (
    <Box w={sizes.sub1100.width} mx={`auto`} {...props}>
      {children}
    </Box>
  );
};
