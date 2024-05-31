// import layer
import { FC } from 'react';

import { TitleWrapper, maintext, linetext } from './style.css';

// type layer
export type StyleProps = Record<string, any>;
export type DataProps = { text; subtext: string };
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ text, subtext }) => {
  return (
    <div className={`${TitleWrapper}`}>
      <div className={`${linetext}`}>{subtext}</div>
      <div className={`${maintext}`}>{text}</div>
    </div>
  );
};
