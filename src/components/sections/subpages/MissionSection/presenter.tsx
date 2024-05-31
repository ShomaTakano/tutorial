// import layer
import { FC } from 'react';

import { Section2 } from 'components/sections/subpages/Section2';
import { AboutText } from 'components/texts/AboutText';

import { BoldStyle, missionStyle, missionDescStyle } from './style.css';

// type layer
export type StyleProps = Record<string, unknown>;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const mission = `Webを掛け合わせ、
Webで限界を超え、
セカイを創る会社`;
  const missionDescription = `創業以来、Webの先端技術「モダンWeb」を使った開発を提供してまいりました。もっと多くの人々に、そしていかに”ラクにウェブ”を提供できるかを、私たちは考え行動してきました。しかし、Webはひとつのツール（手段）に過ぎません。これらをどのように使いこなし、どのように掛け合わせ、そして新たな化学反応を起こせるかが大事と考えます。Webを作って終わりではなく、その先を見据え、今まででは有り得なかったような限界を超え、セカイを創り出すこと、それが私たちの存在意義であり、私たちの価値です。`;

  return (
    <Section2 title={`Mission`} subTitle={`私たちの使命`}>
      <div className={`${missionStyle}`}>
        <AboutText className={`${BoldStyle}`}>{mission}</AboutText>
      </div>
      <AboutText className={missionDescStyle}>{missionDescription}</AboutText>
    </Section2>
  );
};
