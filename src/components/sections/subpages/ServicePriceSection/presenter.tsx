// import layer
import { Image } from '@chakra-ui/react';
import { InternalLink } from 'components/links/InternalLink';
import { ServiceSectionTitle } from 'components/subpage/ServiceSectionTitle';

import { FC } from 'react';

import {
  PriceWarpper,
  Card1,
  Img,
  title,
  TextArea,
  Text,
  LineText,
  Price,
  Price2,
  SubTitle,
  MinText,
  Border,
  ContactSub,
  Contact,
} from './style.css';

// type layer
export type StyleProps = Record<string, unknown>;
export type PresenterProps = StyleProps;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  return (
    <>
      <ServiceSectionTitle
        text={`費用について`}
        subtext={`Why KARTE Blocks?`}
      />
      <div className={PriceWarpper}>
        <div className={Card1}>
          <div className={title}>{`WEB開発`}</div>
          <div className={SubTitle}>{`ダミーテキスト`}</div>
          <div className={Price}>
            {`30`}
            <span className={MinText}>万円~</span>
          </div>
          <div className={LineText}>{`ダミー`}</div>

          <div className={TextArea}>
            <Image
              className={Img}
              loading="lazy"
              alt=""
              src="/images/services/kkrn_icon_check_1.svg"
            />
            <div className={Text}>{`ダミーテキスト`}</div>
          </div>
          <div className={TextArea}>
            <Image
              className={Img}
              loading="lazy"
              alt=""
              src="/images/services/kkrn_icon_check_1.svg"
            />
            <div className={Text}>{`ダミーテキスト`}</div>
          </div>
          <div className={TextArea}>
            <Image
              className={Img}
              loading="lazy"
              alt=""
              src="/images/services/kkrn_icon_check_1.svg"
            />
            <div className={Text}>{`ダミーテキスト`}</div>
          </div>
          <div className={TextArea}>
            <Image
              className={Img}
              loading="lazy"
              alt=""
              src="/images/services/kkrn_icon_check_1.svg"
            />
            <div className={Text}>{`ダミーテキスト`}</div>
          </div>

          <div className={Border}></div>
          <div className={ContactSub}>
            {`お客様の要望を実現します
ダミーテキスト`}
          </div>
          <InternalLink href={`/contact`}>
            <div className={Contact}>お問い合わせはこちら</div>
          </InternalLink>
        </div>

        {/* 2枚目 */}
        <div className={Card1}>
          <div className={title}>{`システム開発`}</div>
          <div className={SubTitle}>{`ダミーテキスト`}</div>
          <div className={Price}>
            {`50`}
            <span className={MinText}>万円~</span>
          </div>
          <div className={LineText}>{`ダミー`}</div>

          <div className={TextArea}>
            <Image
              className={Img}
              loading="lazy"
              alt=""
              src="/images/services/kkrn_icon_check_1.svg"
            />
            <div className={Text}>{`ダミーテキスト`}</div>
          </div>
          <div className={TextArea}>
            <Image
              className={Img}
              loading="lazy"
              alt=""
              src="/images/services/kkrn_icon_check_1.svg"
            />
            <div className={Text}>{`ダミーテキスト`}</div>
          </div>
          <div className={TextArea}>
            <Image
              className={Img}
              loading="lazy"
              alt=""
              src="/images/services/kkrn_icon_check_1.svg"
            />
            <div className={Text}>{`ダミーテキスト`}</div>
          </div>
          <div className={TextArea}>
            <Image
              className={Img}
              loading="lazy"
              alt=""
              src="/images/services/kkrn_icon_check_1.svg"
            />
            <div className={Text}>{`ダミーテキスト`}</div>
          </div>

          <div className={Border}></div>
          <div className={ContactSub}>
            {`お客様の要望を実現します
ダミーテキスト`}
          </div>
          <InternalLink href={`/contact`}>
            <div className={Contact}>お問い合わせはこちら</div>
          </InternalLink>
        </div>

        {/* 3枚目 */}
        <div className={Card1}>
          <div className={title}>{`SES`}</div>
          <div className={SubTitle}>{`ダミーテキスト`}</div>
          <div className={Price2}>
            {`4`}
            <span className={MinText}>万円/日</span>
          </div>
          <div className={LineText}>{`ダミー`}</div>

          <div className={TextArea}>
            <Image
              className={Img}
              loading="lazy"
              alt=""
              src="/images/services/kkrn_icon_check_1.svg"
            />
            <div className={Text}>{`ダミーテキスト`}</div>
          </div>
          <div className={TextArea}>
            <Image
              className={Img}
              loading="lazy"
              alt=""
              src="/images/services/kkrn_icon_check_1.svg"
            />
            <div className={Text}>{`ダミーテキスト`}</div>
          </div>
          <div className={TextArea}>
            <Image
              className={Img}
              loading="lazy"
              alt=""
              src="/images/services/kkrn_icon_check_1.svg"
            />
            <div className={Text}>{`ダミーテキスト`}</div>
          </div>
          <div className={TextArea}>
            <Image
              className={Img}
              loading="lazy"
              alt=""
              src="/images/services/kkrn_icon_check_1.svg"
            />
            <div className={Text}>{`ダミーテキスト`}</div>
          </div>

          <div className={Border}></div>
          <div className={ContactSub}>
            {`お客様のリソース不足解消に
ぜひお任せください`}
          </div>
          <InternalLink href={`/contact`}>
            <div className={Contact}>お問い合わせはこちら</div>
          </InternalLink>
        </div>
      </div>
    </>
  );
};
