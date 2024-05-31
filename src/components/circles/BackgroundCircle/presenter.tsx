// import layer
import { FC } from 'react';

import { backgroundCircle } from './style.css';

// type layer
export type StyleProps = Record<string, unknown>;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  return <div className={backgroundCircle}></div>;
};
