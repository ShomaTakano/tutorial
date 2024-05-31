// import layer
import { VFC } from 'react';

import { Text, TextProps } from 'components/texts/Text';

import { text } from './style.css';

// type layer
export type StyleProps = TextProps;
export type DataProps = { className?: string };
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: VFC<PresenterProps> = ({
  children,
  className = '',
  ...props
}) => {
  return <Text className={`${text} ${className}`}>{children}</Text>;
};
