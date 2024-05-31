// import layer
import { FC } from 'react';

import { SectionContainer920 } from 'components/containers/SectionContainer920';
import { SubSectionContainer } from 'components/containers/SubSectionContainer';
import { SubSectionContainer768 } from 'components/containers/SubSectionContainer768';
import { MarkdownContent } from 'features/news/MarkdownContent';
import { SubpageMessage2 } from 'components/texts/SubpageMessage2';
import { Button } from 'components/buttons/Button';
import { routes } from 'constants/routes';

import {
  messages as messageSpaces,
  sections as spaces,
  article as articleSpaces,
} from 'constants/styles/spacesAd';
import {
  container1320Style,
  boldStyle,
  contactWrapper,
  text,
  hoverStyle,
} from './style.css';
import { InternalButtonLink } from 'components/links/InternalButtonLink';

////////////////////////////////
import { SectionContainer1320 } from 'components/containers/SectionContainer1320';
import { InternalLink } from 'components/links/InternalLink';

// type layer
export type StyleProps = Record<string, unknown>;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  return (
    <SectionContainer1320 className={`${container1320Style}`}>
      <div className={`${boldStyle}`}>CONTACT US</div>
      <div className={hoverStyle}>
        <InternalLink href="/contact">
          <div className={`${contactWrapper}`}>
            <div className={text}>お問合わせはこちら</div>
          </div>
        </InternalLink>
      </div>
    </SectionContainer1320>
  );
};
