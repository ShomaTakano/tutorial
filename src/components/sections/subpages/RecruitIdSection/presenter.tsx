// import layer
import { FC } from 'react';

import { img, container1320Style, contentStyle } from './style.css';

import { SectionContainer1320 } from 'components/containers/SectionContainer1320';
import { Text } from 'components/texts/Text';

// type layer
export type StyleProps = Record<string, any>;
export type DataProps = { content: string; image: any };
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ content, image }) => {
  return (
    <SectionContainer1320 className={`${container1320Style}`}>
      <img
        className={`${img}`}
        src="/images/recruit/blank.jpg"
        alt="news"
        {...image}
      />
      <Text className={`${contentStyle}`}>{content}</Text>
    </SectionContainer1320>
  );
};
