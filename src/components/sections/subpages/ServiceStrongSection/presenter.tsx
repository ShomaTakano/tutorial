// import layer
import { ServiceSectionTitle } from 'components/subpage/ServiceSectionTitle';
import Image from 'next/image';
import { FC } from 'react';

import {
  StorongWarpper,
  Card1,
  Card2,
  Img,
  title,
  TextArea,
  Tags,
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
        text={`システム開発の強み`}
        subtext={`Why KARTE Blocks?`}
      />
      <div className={StorongWarpper}>
        <div className={Card1}>
          <Image
            className={Img}
            loading="lazy"
            alt=""
            src="/images/services/strong.png"
            width="460"
            height="400"
          />
          <div className={TextArea}>
            <div className={title}>
              {`お客様のご要望に合わせたCMSを
構築可能です`}
            </div>
            <div className={Tags}>Rich Editor</div>
            <div className={Text}>
              {`4行分くらい入ります
ダミーのテキストです
Simply place the tag.
Easy to replace, hide, add and even reorder blocks.`}
            </div>
          </div>
        </div>
        <div className={Card2}>
          <Image
            className={Img}
            loading="lazy"
            alt=""
            src="/images/services/strong.png"
            width="460"
            height="400"
          />
          <div className={TextArea}>
            <div className={title}>
              {`お客様のご要望に合わせたCMSを
構築可能です`}
            </div>
            <div className={Tags}>Rich Editor</div>
            <div className={Text}>
              {`4行分くらい入ります
ダミーのテキストです
Simply place the tag.
Easy to replace, hide, add and even reorder blocks.`}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
