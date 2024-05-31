// import layer
import { FC } from 'react';
import { useRecoilValue } from 'recoil';

import { Text } from 'components/texts/Text';
import { BlogCard } from 'components/cards/BlogCard';
import { TextUnderlineButton } from 'components/buttons/TextUnderlineButton';
import { Box } from 'components/fundamentals/Box';
import {
  container,
  inner,
  titleContainer,
  h2,
  linkStyle,
  h2Wrapper,
  outerStyle,
  blogArea,
  logoStyle,
  blogContainer,
} from './style.css';
import { articleListState } from 'features/blog/atoms';
import { routes } from 'constants/routes';

import { InternalButtonLink } from 'components/links/InternalButtonLink';
import { LogoImage } from 'components/images/LogoImage';

// type layer
export type StyleProps = Record<string, unknown>;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const h2Title = `BLOG`;
  const list = useRecoilValue(articleListState);

  return (
    <section id={`blog`} className={`${outerStyle}`}>
      <LogoImage className={`${logoStyle}`} />
      <div className={`${container}`}>
        <div className={`${inner}`}>
          <div className={`${titleContainer}`}>
            <Text className={`${h2Wrapper}`} as={`h2`}>
              <span className={`${h2}`}>{h2Title}</span>
            </Text>
          </div>
          {/* ブログ一覧 */}
          <div className={`${blogArea}`}>
            {list.map((card) => (
              <div key={card.title} className={`${blogContainer}`}>
                <BlogCard
                  url={card.url}
                  title={card.title}
                  date={card.date}
                  category={card.category}
                  image={{ ...card.image }}
                />
              </div>
            ))}
          </div>

          <Box className={`${linkStyle}`}>
            <InternalButtonLink href={routes.blog.url}>
              <TextUnderlineButton>{`詳しくはコチラ`}</TextUnderlineButton>
            </InternalButtonLink>
          </Box>
        </div>
      </div>
    </section>
  );
};
