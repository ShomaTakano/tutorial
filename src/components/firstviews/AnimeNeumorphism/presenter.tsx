// import layer
import { FC } from 'react';

import { li, container, box } from './style.css';

// type layer
export type StyleProps = Record<string, unknown>;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  return (
    <li className={`${li}`}>
      <div className={`${container}`}>
        <div className={`${box}`}></div>
      </div>
    </li>
  );
};
