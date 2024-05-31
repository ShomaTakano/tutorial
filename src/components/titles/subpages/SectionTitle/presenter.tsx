// import layer
import { FC } from 'react';

import { Text } from 'components/texts/Text';
import { Image } from 'components/images/Image';

import { icon, h2, h2Sub, h2Wrapper, container } from './style.css';

// type layer
export type StyleProps = Record<string, unknown>;
export type DataProps = { title: string; subTitle: string };
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({
  title,
  subTitle,
  ...props
}) => {
  return (
    <div className={container}>
      {/* セクションタイトル部分のアイコン */}
      {/* <div className={`${icon}`}>
        <Image image={{ src: `/svg/section-icon.svg` }} />
      </div> */}
      <Text className={`${h2Wrapper}`} as={`h2`}>
        <span className={`${h2}`}>{title}</span>
        <span className={`${h2Sub}`}>{subTitle}</span>
      </Text>
    </div>
  );
};
