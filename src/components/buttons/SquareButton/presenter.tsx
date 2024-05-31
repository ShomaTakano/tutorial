// import layer
import { FC } from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';

import textStyles from 'lib/theme/textStyles/harm';

// type layer
export type StyleProps = FlexProps;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ children, ...props }) => {
  return (
    <Flex
      fontFamily={`'Noto Sans JP', sans-serif;`}
      fontSize={{ lg: `0.9875rem` }}
      justify={`center`}
      align={`center`}
      py={{ lg: `0.75rem` }}
      position={`relative`}
      transition={`all .3s`}
      _hover={{
        cursor: 'pointer',
      }}
      {...textStyles.header.nav}
      letterSpacing={`0.1em`}
      {...props}
    >
      {children}
    </Flex>
  );
};
