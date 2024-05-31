// import layer
import { FC } from 'react';
import { useRecoilValue } from 'recoil';

import { Text } from 'components/texts/Text';
import { NewsCard } from 'components/cards/NewsCard';
import { TextUnderlineButton } from 'components/buttons/TextUnderlineButton';
import { SectionContainer1420 } from 'components/containers/SectionContainer1420';
import { InternalLink } from 'components/links/InternalLink';
import { LogoImage } from 'components/images/LogoImage';

import {
  containerStyle,
  inner,
  titleContainer,
  h2,
  h2Wrapper,
  subContainer,
  listStyle,
  spaceX,
  spaceBottom,
  buttonStyle,
  logoStyle,
  outerStyle,
} from './style.css';
import { newsListState } from 'features/news/atoms';
import { routes } from 'constants/routes';

// type layer
export type StyleProps = Record<string, unknown>;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const h2Title = `NEWS`;
  const list = useRecoilValue(newsListState);

  return (
    <div id={`news`} className={outerStyle}>
      <LogoImage className={logoStyle} />

      <SectionContainer1420 className={`${containerStyle}`}>
        <div className={`${inner}`}>
          <div className={`${titleContainer}`}>
            <Text className={`${h2Wrapper}`} as={`h2`}>
              <span className={`${h2}`}>{h2Title}</span>
            </Text>
          </div>

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

        <TextUnderlineButton className={buttonStyle}>
          <InternalLink href={routes.news.url}>{`詳しくはコチラ`}</InternalLink>
        </TextUnderlineButton>
      </SectionContainer1420>
    </div>
  );
};
