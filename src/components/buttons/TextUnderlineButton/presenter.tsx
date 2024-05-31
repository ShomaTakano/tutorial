// import layer
import { FC, ReactNode } from 'react';

import { Text } from 'components/texts/Text';

import { textStyle } from './style.css';

// type layer
export type StyleProps = { className?: string };
export type DataProps = { children?: ReactNode };
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ className, children }) => {
  return <Text className={`${textStyle} ${className ?? ``}`}>{children}</Text>;
};
