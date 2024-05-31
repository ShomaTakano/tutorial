// import layer
import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';

import { Header } from 'components/headers/Header';
import { Footer } from 'components/footers/Footer2';
import { SubFirstview } from 'components/firstviews/SubFirstview';
import { ServiceTextSection } from 'components/sections/subpages/ServiceTextSection';
import { ServiceAboutSection } from 'components/sections/subpages/ServiceAboutSection';

import { ServiceContactSection } from 'components/sections/subpages/ServiceContactSection';

// import { space, width, fontSize } from 'constants/styles';
import { colors } from 'constants/styles/colors';
import { routes } from 'constants/routes';
import { ServiceStrongSection } from 'components/sections/subpages/ServiceStrongSection';
import { ServiceCaseSection } from 'components/sections/subpages/ServiceCaseSection';
import { ServicePriceSection } from 'components/sections/subpages/ServicePriceSection';

// type layer
// export type DataProps = { works: Work[] };
export type PresenterProps = Record<string, unknown>;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const title = `Web Development`;
  const subTitle = `ウェブ開発/アプリケーション開発について`;
  //テキストの宣言
  const text = `企業様の魅力をサイトで120%表現できることを目指します。
もう一行のダミーテキストです。`;
  const subtext = `コーポレートサイトは企業にとって、最も基本的なWebサイトです。
企業の成長を促進させるためお客様や取引先とのコミュニケーションを円滑にします。
企業としてのコンセプトやメッセージを伝え、企業ブランディングをするためにはコーポレートサイトは欠かせないものになっています。コーポレートサイトは企業概要、企業メッセージ、製品やサービス、IR情報、採用情報などその役割は主に会社案内を目的としたものがメインとなります。お客様や取引先だけでなく、採用希望者とのコミュニケーション向上のために、コーポレートサイト制作をご検討の際はお気軽にご相談ください。`;

  //画像の宣言

  return (
    <>
      <div>
        <Header
          w={`100%`}
          bg={`white`}
          zIndex={`sticky`}
          position={`fixed`}
          // position={`sticky`}
          top={0}
        />
        <Box
          data-scroll-section
          overflow={`hidden`}
          bgColor={colors.white}
          // pt={{ base: `80px`, lg: `80px` }}
          as={`main`}
        >
          <SubFirstview
            title={title}
            subTitle={subTitle}
            pageName={routes.Webdevelop.name}
          />
          <ServiceTextSection text={text} subtext={subtext} />

          <ServiceAboutSection />
          <ServiceStrongSection />
          <ServiceCaseSection />
          <ServicePriceSection />

          <ServiceContactSection />
        </Box>
        <Footer data-scroll-section overflow={`hidden`} /*isSubpage*/ />
      </div>
    </>
  );
};
