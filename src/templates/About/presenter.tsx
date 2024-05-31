// import layer
import { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { Header } from 'components/headers/Header';
import { Footer } from 'components/footers/Footer2';
import { SubFirstview } from 'components/firstviews/SubFirstview';
import { Section2 } from 'components/sections/subpages/Section2';
import { SectionContainer1320 } from 'components/containers/SectionContainer1320';
import { AboutText } from 'components/texts/AboutText';

import { colors } from 'constants/styles/colors';
import { routes } from 'constants/routes';

import {
  container1320Style,
  BoldStyle,
  missionStyle,
  missionDescStyle,
  imgContainer,
  valueDescStyle,
  valueStyle,
  profileContainer,
  profileContainer2,
  profileTitle,
  profileMain,
  profileMain2,
  marginTopStyle,
  section2Style,
} from './style.css';
import { RecruitSection } from 'components/sections/RecruitSection';
import { MissionSection } from 'components/sections/subpages/MissionSection';
import { VisionSection } from 'components/sections/subpages/VisionSection';
import { BlogSection } from 'components/sections/BlogSection';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const title = `About us`;
  const subTitle = `私たちについて`;

  const values = [
    {
      item: `GO SIMPLE`,
      description: `ー何事もシンプルに行動できるように努力する。
□抽出：本質を見極め、優先順位で行動しよう。
□排除：無駄なことを探し提案し、行動しよう。`,
    },
    {
      item: `GO GROWING`,
      description: `ー仕事を通して、成長を望み、行動する。
□自責：他責ではなく、自責でものごとを捉える。
□失敗：1度目の過ちは経験、2度目を失敗と捉える。`,
    },
    {
      item: `GO VALUED`,
      description: `ー自分でよかったを、お客様へ、会社へ、社員へ。
□追求：RAKUWEBで、そして自分でよかったを追求しよう。
□発信：追求するだけでなく、発信することを心がけよう。`,
    },
    {
      item: `GO FORWARD`,
      description: `ーチャレンジ精神を忘れずに、行動する。
□前向：できない理由を探す前に、できた先のことを考えよう。
□挑戦：誰もが最初は初心者。挑戦することで、新しい扉は開く。`,
    },
  ];

  const plofile = `本社
〒950-0917
新潟県新潟市中央区天神1-1
PLAKA3 2F


営業所1
〒950-2102
新潟県新潟市西区五十嵐２の町 産学連携共同研究棟 1号棟
Not the University
  
  
営業所2
〒952-3421
新潟県佐渡市吾潟39-2`;

  const plofile2 = `Webサイト制作及びシステム開発
コワーキングスペースの運営
SNS運用/クリエイティブ制作等`;

  return (
    <>
      <Header
        w={`100%`}
        bg={`white`}
        zIndex={`sticky`}
        position={`fixed`}
        top={`0rem`}
      />
      <Box
        data-scroll-section
        overflow={`hidden`}
        bgColor={colors.bgBlack}
        as={`main`}
      >
        <SubFirstview
          title={title}
          subTitle={subTitle}
          pageName={routes.about.name}
        />
        <SectionContainer1320 className={container1320Style}>
          <MissionSection />
          <VisionSection />
          <Section2
            className={section2Style}
            title={`Value`}
            subTitle={`私たちの行動指針`}
            messages={['test']}
          >
            {values.map((value, index) => (
              <div key={value.item}>
                <AboutText
                  className={`${valueStyle} ${index > 0 ? marginTopStyle : ``}`}
                >
                  {value.item}
                </AboutText>
                <AboutText className={`${valueDescStyle}`}>
                  {value.description}
                </AboutText>
              </div>
            ))}
          </Section2>
          {/* profile追加 */}
          <Section2
            className={section2Style}
            title={`Profile`}
            subTitle={`会社概要`}
          >
            <div className={`${profileContainer}`}>
              <AboutText>
                <div>
                  <p className={`${profileTitle}`}>会社名</p>
                  <span className={`${profileMain}`}>株式会社ラクウェブ</span>
                </div>
              </AboutText>
            </div>

            <div className={`${profileContainer2}`}>
              <AboutText>
                <Flex>
                  <p className={`${profileTitle}`}>所在地</p>
                  <span className={`${profileMain2}`}>{plofile}</span>
                </Flex>
              </AboutText>
            </div>

            <div className={`${profileContainer2}`}>
              <AboutText>
                <div>
                  <p className={`${profileTitle}`}>設立日</p>
                  <span className={`${profileMain}`}>2020年2月20日</span>
                </div>
              </AboutText>
            </div>
            <div className={`${profileContainer2}`}>
              <AboutText>
                <div>
                  <p className={`${profileTitle}`}>CEO</p>
                  <span className={`${profileMain}`}>熊澤隼斗</span>
                </div>
              </AboutText>
            </div>
            <div className={`${profileContainer2}`}>
              <AboutText>
                <div>
                  <p className={`${profileTitle}`}>事業内容</p>
                  <span className={`${profileMain}`}>{plofile2}</span>
                </div>
              </AboutText>
            </div>
          </Section2>
        </SectionContainer1320>
        <RecruitSection />
      </Box>
      <Footer data-scroll-section /*isSubpage*/ />
    </>
  );
};
