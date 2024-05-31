// import layer
import { FC } from 'react';

import { Text, TextProps } from 'components/texts/Text';

import { textStyle } from './style.css';

// type layer
export type StyleProps = TextProps;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Text className={`${textStyle} ${className ?? ''}`} {...props}>
      {children}
    </Text>
  );
};
