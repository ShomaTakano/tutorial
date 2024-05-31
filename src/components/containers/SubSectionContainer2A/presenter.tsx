// import layer
import { VFC } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

// import { color, width, space } from '~/constants';

// type layer
export type StyleProps = BoxProps;
export type DataProps = { isBgColor?: number };
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: VFC<PresenterProps> = ({ children, ...props }) => {
  return (
    <Box
      mx={`auto`}
      // pb={space.sub.subSection.pb}
      {...props}
    >
      {children}
    </Box>
  );
};
