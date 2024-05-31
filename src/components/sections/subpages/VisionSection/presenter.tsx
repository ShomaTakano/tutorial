// import layer
import { FC } from 'react';

import { Section2 } from 'components/sections/subpages/Section2';
import { AboutText } from 'components/texts/AboutText';

import {
  BoldStyle,
  missionStyle,
  missionDescStyle,
  section2Style,
  imgContainer,
} from './style.css';

// type layer
export type StyleProps = Record<string, unknown>;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const vision = `地方から、攻めまくる`;
  const visionDescription = `地方はまだまだITに関して遅れているのが現状です。どこににいてもオンラインで仕事ができるようになった今だからこそWebで勝負することに価値があると考えています。そのために、私たちは常に最新の情報を取り入れ技術レベルを高めます。Webを武器に、あらゆる場所で成長したい、そんな熱い想いを持った仲間たちとチームとなって挑戦をしていくクリエイティブ集団を目指します。`;

  return (
    <Section2
      className={section2Style}
      title={`Vision`}
      subTitle={`私たちの目指す姿`}
      messages={['test']}
    >
      <div className={`${missionStyle}`}>
        <AboutText>{vision}</AboutText>
      </div>
      <AboutText className={missionDescStyle}>{visionDescription}</AboutText>
      <img
        className={`${imgContainer}`}
        src="/images/about/typing.jpg"
        alt="typing"
      />
    </Section2>
  );
};
