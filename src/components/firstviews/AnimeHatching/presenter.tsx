// import layer
import { FC } from 'react';

import { li, anime1 } from './style.css';

// type layer
export type StyleProps = Record<string, unknown>;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  return (
    <li className={`${li}`}>
      <div className={`${anime1}`}></div>
    </li>
  );
};
