// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { Header } from 'components/headers/Header';
import { Footer } from 'components/footers/Footer2';
import { SectionContainer1320 } from 'components/containers/SectionContainer1320';

import { colors } from 'constants/styles/colors';
import { WhiteText } from 'components/texts/WhiteText';

import {
  container1320Style,
  h1Style,
  massageStyle,
  contactWrapper,
  Boxtext,
} from './style.css';
import { InternalLink } from 'components/links/InternalLink';

// type layer
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const Massage = `お探しのページが見つかりませんでした。
  削除されたか、入力されたURLが間違っている可能性があります。
  お手数ですが、もう一度URLをご確認ください。`;
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
        <SectionContainer1320 className={container1320Style}>
          <WhiteText>
            <h1 className={h1Style}>404 Error Page</h1>
            <p className={massageStyle}>{Massage}</p>
          </WhiteText>
          <InternalLink href="/">
            <div className={`${contactWrapper}`}>
              <div className={Boxtext}>TOPに戻る</div>
            </div>
          </InternalLink>
        </SectionContainer1320>
      </Box>
      <Footer data-scroll-section /*isSubpage*/ />
    </>
  );
};
