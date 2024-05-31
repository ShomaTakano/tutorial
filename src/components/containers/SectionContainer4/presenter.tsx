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
      w={sections.section4.width}
      maxWidth={sections.section4.maxWidth}
      pt={spaces.section4.pt}
      pb={spaces.section4.pb}
      mx={`auto`}
      as={`section`}
      {...props}
    >
      {children}
    </Box>
  );
};
