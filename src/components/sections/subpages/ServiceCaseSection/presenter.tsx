// import layer
import { Image } from '@chakra-ui/react';
import { ServiceSectionTitle } from 'components/subpage/ServiceSectionTitle';

import { FC } from 'react';

import {
  CaseWarpper,
  Card1,
  Card2,
  Img,
  title,
  TextArea,
  Tags,
  TagsArea,
  Text,
} from './style.css';

// type layer
export type StyleProps = Record<string, unknown>;
export type PresenterProps = StyleProps;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  return (
    <>
      <ServiceSectionTitle
        text={`過去の開発事例`}
        subtext={`Why KARTE Blocks?`}
      />
      <div className={CaseWarpper}>
        <div className={Card1}>
          <Image
            className={Img}
            loading="lazy"
            alt=""
            src="/images/services/img-block-case-original-01.jpg.png"
          />
          <div className={TextArea}>
            <div className={title}>{`SNAP新潟公式サイト`}</div>
            <div className={Text}>
              {`Next.jsとThree.jsを組み合わせたウェブサイトを作成し、Strapi決済システムを備えたECサイトを提供しました`}
            </div>
            <div className={TagsArea}>
              <div className={Tags}>WEBサイト制作</div>
            </div>
          </div>
        </div>
        <div className={Card1}>
          <Image
            className={Img}
            loading="lazy"
            alt=""
            src="/images/services/img-block-case-original-01.jpg.png"
          />
          <div className={TextArea}>
            <div className={title}>{`SNAP新潟公式サイト`}</div>
            <div className={Text}>
              {`Next.jsとThree.jsを組み合わせたウェブサイトを作成し、Strapi決済システムを備えたECサイトを提供しました`}
            </div>
            <div className={TagsArea}>
              <div className={Tags}>WEBサイト制作</div>
            </div>
          </div>
        </div>
        <div className={Card1}>
          <Image
            className={Img}
            loading="lazy"
            alt=""
            src="/images/services/img-block-case-original-01.jpg.png"
          />
          <div className={TextArea}>
            <div className={title}>{`SNAP新潟公式サイト`}</div>
            <div className={Text}>
              {`Next.jsとThree.jsを組み合わせたウェブサイトを作成し、Strapi決済システムを備えたECサイトを提供しました`}
            </div>
            <div className={TagsArea}>
              <div className={Tags}>WEBサイト制作</div>
            </div>
          </div>
        </div>
        <div className={Card1}>
          <Image
            className={Img}
            loading="lazy"
            alt=""
            src="/images/services/img-block-case-original-01.jpg.png"
          />
          <div className={TextArea}>
            <div className={title}>{`SNAP新潟公式サイト`}</div>
            <div className={Text}>
              {`Next.jsとThree.jsを組み合わせたウェブサイトを作成し、Strapi決済システムを備えたECサイトを提供しました`}
            </div>
            <div className={TagsArea}>
              <div className={Tags}>WEBサイト制作</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
