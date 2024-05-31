// import layer
import { FC, ReactNode, ElementType } from 'react';

import { container } from './style.css';

// type layer
export type StyleProps = { className?: string; as?: ElementType };
export type DataProps = { children?: ReactNode };
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({
  className,
  children,
  as: Tag = 'div',
}) => {
  return <Tag className={`${container} ${className}`}>{children}</Tag>;
};
