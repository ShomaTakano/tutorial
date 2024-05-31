// import layer
import { FC } from 'react';

import { AnimeCircle } from 'components/firstviews/AnimeCircle';
import { Image } from 'components/images/Image';
import { LogoImage } from 'components/images/LogoImage';

import {
  container,
  breadcrumb,
  innerBreadcrumb,
  main,
  titleStyle,
  subTitleStyle,
  pageNameStyle,
  logoStyle,
} from './style.css';
import { InternalLink } from 'components/links/InternalLink';

import { routes } from 'constants/routes';

// type layer
export type StyleProps = Record<string, unknown>;
export type DataProps = { title: string; subTitle: string; pageName: string };
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({
  title,
  subTitle,
  pageName,
}) => {
  return (
    <div className={`${container}`}>
      <ul className={`${breadcrumb}`}>
        <InternalLink href={routes.home.url}>
          <li className={`${innerBreadcrumb}`}>{`ホーム`}</li>
        </InternalLink>
        <li className={`${pageNameStyle}`}>{`${pageName}`}</li>
      </ul>
      <div className={`${main}`}>
        <div>
          <div className={`${titleStyle}`}>{title}</div>
          <h1 className={`${subTitleStyle}`}>{subTitle}</h1>
        </div>
      </div>
      <LogoImage className={logoStyle} />
    </div>
  );
};
