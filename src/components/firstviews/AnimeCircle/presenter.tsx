// import layer
import { FC } from 'react';

import { li, circle, part } from './style.css';

// type layer
export type StyleProps = Record<string, unknown>;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  return (
    <li className={`${li}`}>
      <div className={`${circle}`}>
        <div className={`${part}`}></div>
        <div className={`${part}`}></div>
        <div className={`${part}`}></div>
        <div className={`${part}`}></div>
        <div className={`${part}`}></div>
      </div>
    </li>
  );
};
