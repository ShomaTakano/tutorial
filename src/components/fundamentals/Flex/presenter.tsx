// import layer
import { FC, ReactNode, ElementType } from 'react';

import { container } from './style.css';

// type layer
export type StyleProps = { className?: string; as?: ElementType };
export type DataProps = { id?: string; children?: ReactNode };
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({
  className,
  children,
  id,
  as: Tag = 'div',
}) => {
  return (
    <Tag id={id} className={`${container} ${className}`}>
      {children}
    </Tag>
  );
};
