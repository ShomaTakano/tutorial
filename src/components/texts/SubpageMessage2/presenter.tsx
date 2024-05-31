// import layer
import { VFC } from 'react';

import { Text, TextProps } from 'components/texts/Text';

import { messages as fontSize } from 'constants/styles/fontSizeAd';

// type layer
export type StyleProps = TextProps;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: VFC<PresenterProps> = ({ children, ...props }) => {
  return (
    <Text
      // fontSize={fontSize.message2}
      // whiteSpace={{ base: `pre-wrap` }}
      // lineHeight={{ base: `1.75em`, xl: `2em` }}
      {...props}
    >
      {children}
    </Text>
  );
};
