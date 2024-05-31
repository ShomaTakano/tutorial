// import layer
import { FC } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

import { subSections as spaces } from 'constants/styles/spacesAd';

// type layer
export type StyleProps = BoxProps;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ children, ...props }) => {
  return (
    <Box mt={spaces.sub1.mt} {...props}>
      {children}
    </Box>
  );
};
