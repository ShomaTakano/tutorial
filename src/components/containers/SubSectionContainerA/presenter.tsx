// import layer
import { VFC } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

// import { width, space } from 'constants/styles';

// type layer
export type StyleProps = BoxProps;
export type DataProps = { isBgColor?: number };
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: VFC<PresenterProps> = ({
  children,
  pt,
  pb,
  ...props
}) => {
  return (
    <Box
      // bgColor={isBgColor === 1 ? color.bgColor.bg1 : color.bgColor.bg2}
      as={`section`}
      // color={`white`}
      // pt={pt ?? space.sub.section.pt}
      // pb={pb ?? space.sub.section.pb}
    >
      <Box
        // w={width.sub.section} mx={`auto`}
        {...props}
      >
        {children}
      </Box>
    </Box>
  );
};
