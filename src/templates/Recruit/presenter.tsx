// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';

import { Header } from 'components/headers/Header';
import { Footer } from 'components/footers/Footer2';
import { SubFirstview } from 'components/firstviews/SubFirstview';
import { Section2 } from 'components/sections/subpages/Section2';
import { SectionContainer1320 } from 'components/containers/SectionContainer1320';
import { ContactSection } from 'components/sections/ContactSection';
import { AboutText } from 'components/texts/AboutText';

import { colors } from 'constants/styles/colors';
import { routes } from 'constants/routes';

import {
  container1320Style,
  BoldStyle,
  missionStyle,
  missionDescStyle,
  imgContainer,
  occupationArea,
  occupationContainer,
  occupationTitle,
  hoverStyle,
  section2Style,
} from './style.css';
// import { id1, id2 } from 'constants/recruit';
import { InternalLink } from 'components/links/InternalLink';
import { recruitListState } from 'features/recruit/atoms';

// type layer
// export type DataProps = { works: Work[] };
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const list = useRecoilValue(recruitListState);
  const id1 = list[0];
  const id2 = list[1];
  const id3 = list[2];
  const title = `Recruit`;
  const subTitle = `リクルート`;

  const Terms = `Mission&Visionの共感`;
  const TermsDescription = `弊社では、Mission＆Visionに共感してくださる方を募集します。
そのため、マイビジョン＆ミッションマップのご用意をお願いしております。`;
  // 会社概要について▶︎https://rakuweb.jp/about`;
  // マイビジョン＆ミッションマップ▶︎https://rakuweb.jp/yourvision`;

  const Feature = `新潟市or佐渡市orリモートで自由に働ける`;
  const FeatureDescription = `弊社は、自由に働ける環境の整備を目指しております。リモートワークはもちろんのこと、新潟市のコワーキング施設２ヶ所、自社コワーキング１ヶ所、佐渡サテライトオフィスの合計４ヶ所を利用できます。場所を変えて仕事をすることで、気分転換や業務効率アップに繋げます。`;

  const Flow = `一般的な流れ`;
  const FlowDescription = `1. お問い合わせフォームよりご連絡
2. 書類提出（ES、履歴書、職務経歴書、マイビジョンマップ）
3. カジュアル面談
4. 面談＆簡単なテスト※1
5. 合否ご連絡
6. 試用期間（１ヶ月〜３ヶ月）※2

※1：職種によっては有りません。詳しくは職種ごとの応募要項をご覧ください。
※2：合否連絡の際に、弊社より試用期間を提示させていただきます。`;

  return (
    <>
      <Header
        w={`100%`}
        bg={`white`}
        zIndex={`sticky`}
        position={`fixed`}
        // position={`sticky`}
        top={`0rem`}
      />
      <Box
        data-scroll-section
        overflow={`hidden`}
        bgColor={colors.bgBlack}
        // pt={{ base: `80px`, lg: `80px` }}
        as={`main`}
      >
        <SubFirstview
          title={title}
          subTitle={subTitle}
          pageName={routes.recruit.name}
        />
        <SectionContainer1320 className={container1320Style}>
          <Section2 title={`Terms`} subTitle={`応募条件`}>
            <div className={`${missionStyle}`}>
              <AboutText className={`${BoldStyle}`}>{Terms}</AboutText>
            </div>
            <AboutText className={missionDescStyle}>
              {TermsDescription}
              <InternalLink href={routes.about.url}>
                <div>会社概要について▶︎https://rakuweb.jp/about</div>
              </InternalLink>
            </AboutText>
          </Section2>
          {/* 画像貼るところ */}
          {/* {(id1?.url || id2?.url || id3?.url) ?? ( */}
          <div className={`${occupationArea} `}>
            {id1?.url && (
              <a className={`${hoverStyle} `} href={id1?.url}>
                <div className={`${occupationContainer} `}>
                  <img
                    className={`${imgContainer} `}
                    src={id1.image.src as string}
                    alt="engineer"
                  />
                  <p className={`${occupationTitle} `}>{id1?.title}</p>
                </div>
              </a>
            )}
            {id2?.url && (
              <a className={`${hoverStyle} `} href={id2?.url}>
                <div className={`${occupationContainer} `}>
                  <img
                    className={`${imgContainer} `}
                    src={id2?.image.src as string}
                    alt="back"
                  />
                  <p className={`${occupationTitle} `}>{id2?.title}</p>
                </div>
              </a>
            )}
            {id3?.url && (
              <a className={`${hoverStyle} `} href={id3?.url}>
                <div className={`${occupationContainer} `}>
                  <img
                    className={`${imgContainer} `}
                    src={id3?.image.src as string}
                    alt="back"
                  />
                  <p className={`${occupationTitle} `}>{id3?.title}</p>
                </div>
              </a>
            )}
            {/*
            <a className={`${ hoverStyle } `} href="./recruit/3"/>
              <div className={`${occupationContainer} `}>
                <img
                  className={`${imgContainer} `}
                  src="images/news/newsblank.png"
                  alt="back"
                />
                <p className={`${occupationTitle} `}>Coming soon...</p>
              </div>
            </a>
            */}
          </div>
          {/* )} */}
          {/* /////////////// */}
          <Section2
            className={section2Style}
            title={`Feature`}
            subTitle={`働き方の特徴`}
          >
            <div className={`${missionStyle} `}>
              <AboutText>{Feature}</AboutText>
            </div>
            <AboutText className={missionDescStyle}>
              {FeatureDescription}
            </AboutText>
          </Section2>

          <Section2
            className={section2Style}
            title={`Flow`}
            subTitle={`応募フロー`}
          >
            <div className={`${missionStyle} `}>
              <AboutText>{Flow}</AboutText>
            </div>
            <AboutText className={missionDescStyle}>
              {FlowDescription}
            </AboutText>
          </Section2>
        </SectionContainer1320>
        <ContactSection />
      </Box>
      <Footer data-scroll-section /*isSubpage*/ />
    </>
  );
};
