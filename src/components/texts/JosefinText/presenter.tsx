// import layer
import { FC, ReactNode, ElementType } from 'react';

import { text } from './style.css';

// type layer
export type StyleProps = { className?: string };
export type DataProps = { children: ReactNode; as?: ElementType };
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({
  className,
  children,
  as: As = 'div',
}) => {
  return <As className={`${text} ${className ?? ''}`}>{children}</As>;
};
