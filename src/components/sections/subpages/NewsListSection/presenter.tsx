import { FC } from 'react';
import { useRecoilValue } from 'recoil';

import { Text } from 'components/texts/Text';
import { NewsCard } from 'components/cards/NewsCard';
import { TextUnderlineButton } from 'components/buttons/TextUnderlineButton';
import { SectionContainer1420 } from 'components/containers/SectionContainer1420';
import { InternalLink } from 'components/links/InternalLink';
import { LogoImage } from 'components/images/LogoImage';
import { InternalButtonLink } from 'components/links/InternalButtonLink';

import {
  container,
  inner,
  subContainer,
  listStyle,
  spaceX,
  spaceBottom,
  buttonStyle,
  outerStyle,
} from './style.css';
import { routes } from 'constants/routes';
import { newsListState } from 'features/news/atoms';

// type layer
export type StyleProps = Record<string, unknown>;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

const newsImagePath = `/images/news`;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const list = useRecoilValue(newsListState);

  return (
    <div id={`news`} className={outerStyle}>
      <SectionContainer1420 className={`${container}`}>
        <div className={`${inner}`}>
          <div className={`${subContainer}`}>
            <div className={`${listStyle}`}>
              {list.map((card, index) => (
                <div
                  key={card.title}
                  className={`${index === 0 ? spaceBottom : spaceX}`}
                >
                  <InternalLink href={card.url}>
                    <NewsCard
                      title={card.title}
                      date={card.date}
                      category={card.category}
                      image={{ ...card.image }}
                    />
                  </InternalLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer1420>
    </div>
  );
};
