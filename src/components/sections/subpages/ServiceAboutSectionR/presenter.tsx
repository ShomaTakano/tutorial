// import layer
import { FC } from 'react';

import {
  container1320Style,
  SblogContainer,
  BblogContainer,
  SMblogContainer,
  BMblogContainer,
  blogArea,
  imgContainer,
} from './style.css';

import { SectionContainer1320 } from 'components/containers/SectionContainer1320';

// type layer
export type StyleProps = Record<string, unknown>;
export type DataProps = { Leftimg; Rightimg; Left; Right: string };
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({
  Leftimg,
  Rightimg,
  Left,
  Right,
}) => {
  return (
    <SectionContainer1320 className={container1320Style}>
      <div className={`${blogArea}`}>
        <div className={`${BblogContainer}`}>
          <img className={`${imgContainer}`} src={Leftimg} alt={Left} />
        </div>
        <div className={`${SblogContainer}`}>
          <img className={`${imgContainer}`} src={Rightimg} alt={Right} />
        </div>
        {/* モバイル表示用 */}
        <div className={`${SMblogContainer}`}>
          <img className={`${imgContainer}`} src={Rightimg} alt={Right} />
        </div>
        <div className={`${BMblogContainer}`}>
          <img className={`${imgContainer}`} src={Leftimg} alt={Left} />
        </div>
      </div>
    </SectionContainer1320>
  );
};
