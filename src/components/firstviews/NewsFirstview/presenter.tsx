// import layer
import { FC } from 'react';

import { Image } from 'components/images/Image';

import { SubSectionContainer768 } from 'components/containers/SubSectionContainer768';
import {
  container,
  containerStyle,
  breadcrumb,
  main,
  titleStyle,
  subTitleStyle,
  pageNameStyle,
  subTextWrapper,
  border,
} from './style.css';
import { InternalLink } from 'components/links/InternalLink';
import { Flex } from 'components/fundamentals/Flex';

import { routes } from 'constants/routes';

// type layer
export type StyleProps = Record<string, unknown>;
export type DataProps = {
  title: string;
  date: string;
  category: string;
};
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ title, date, category }) => {
  return (
    <SubSectionContainer768
      w={{ lg: `${768 / 19.2}vw` }}
      className={`${containerStyle}`}
    >
      <Flex className={`${subTextWrapper}`}>
        {category && (
          // <InternalLink href={routes.home.url}>
          <div className={`${border}`}>{category}</div>
          /* </InternalLink> */
        )}
        <div className={`${subTitleStyle}`}>{date}</div>
      </Flex>
      <div>
        <h1 className={`${titleStyle}`}>{title}</h1>
      </div>
    </SubSectionContainer768>
  );
};
