// import layer
import { FC } from 'react';
import { Text, TextProps } from '@chakra-ui/react';

// type layer
export type PresenterProps = TextProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ children, ...props }) => {
  return (
    <Text
      fontFamily={`'Noto Sans JP', sans-serif;`}
      color={'normal'}
      letterSpacing={`0.1em`}
      lineHeight={`1.75em`}
      as={`div`}
      {...props}
    >
      {children}
    </Text>
  );
};
