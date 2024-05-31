// import layer
import { FC, ReactNode } from 'react';

import { container } from './style.css';

// type layer
export type StyleProps = Record<string, unknown>;
export type DataProps = { className?: string; children: ReactNode };
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ children, className }) => {
  return (
    <section className={`${container} ${className ?? ''}`}>{children}</section>
  );
};
