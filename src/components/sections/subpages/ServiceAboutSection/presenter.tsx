// import layer
import Image from 'next/image';
import { FC } from 'react';

import {
  RakuwebReacttyp,
  RakuwebReacttyp1,
  RakuwebReacttyp2,
  Service,
  Span3,
  BackgroundParent,
  FrameDiv,
  Background,
  ListWrapper,
  Card1,
  CardTitle,
  CardText,
  Card2,
  CardImg1,
  CardImg2,
  CardImg3,
  BigImg,
} from './style.css';

// type layer
export type StyleProps = Record<string, unknown>;
export type PresenterProps = StyleProps;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  return (
    <>
      <div className={FrameDiv}>
        <div className={BackgroundParent}>
          <div className={Background}>
            <p className={RakuwebReacttyp}>
              <span className={RakuwebReacttyp1}>
                <span className={RakuwebReacttyp2}>
                  RAKUWEBでは、モダンフロントエンド（React/TypeScript)をベースとしたウェブサイト制作やウェブアプリケーション開発を行ってきました。
                </span>
                <span className={Span3}>
                  これまでに、企業様、行政様や大学様はもちろんのこと、スタートアップ様のチームの一員としてプロジェクトに参加して開発も行い、様々なニーズにお答えしてきました。
                </span>
              </span>
            </p>
          </div>
          <i className={Service}>Service</i>
        </div>
      </div>
      <div className={ListWrapper}>
        <div className={Card1}>
          <div className={CardTitle}>WEB開発</div>
          <div className={CardText}>
            ダミーのテキストとして参照もとから引用ですプロジェクトそのものであり、最終成果常識を疑うことから始まるリサーチプロセスや、予定調和を崩すための様々な仕掛け。答えのない問いに向き合うためのマネジメントの技術など様々なメソッドを組み合わせ、関わるすべての人の創造性が引き出されるプロセスと体験をデザインします。
          </div>
          <Image
            className={CardImg1}
            loading="lazy"
            alt=""
            src="/images/services/3079_color.png"
          />
        </div>
        <div className={Card2}>
          <div className={CardTitle}>システム開発</div>
          <div className={CardText}>
            ダミーのテキストとして参照もとから引用ですプロジェクトそのものであり、最終成果常識を疑うことから始まるリサーチプロセスや、予定調和を崩すための様々な仕掛け。答えのない問いに向き合うためのマネジメントの技術など様々なメソッドを組み合わせ、関わるすべての人の創造性が引き出されるプロセスと体験をデザインします。
          </div>
          <Image
            className={CardImg2}
            loading="lazy"
            alt=""
            src="/images/services/9780_color.png"
          />
        </div>
        <div className={Card1}>
          <div className={CardTitle}>{`SES(リソース提供)`}</div>
          <div className={CardText}>
            ダミーのテキストとして参照もとから引用ですプロジェクトそのものであり、最終成果常識を疑うことから始まるリサーチプロセスや、予定調和を崩すための様々な仕掛け。答えのない問いに向き合うためのマネジメントの技術など様々なメソッドを組み合わせ、関わるすべての人の創造性が引き出されるプロセスと体験をデザインします。
          </div>
          <Image
            className={CardImg3}
            loading="lazy"
            alt=""
            src="/images/services/8557_color.png"
          />
        </div>
      </div>

      <Image
        className={BigImg}
        loading="lazy"
        alt=""
        src="/images/services/Troubled.svg"
      />
    </>
  );
};
