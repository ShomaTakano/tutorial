// import layer
import { FC } from 'react';
import { useRecoilValue } from 'recoil';

import { Text } from 'components/texts/Text';
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

import {
  imgContainer,
  occupationArea,
  occupationContainer,
  occupationTitle,
  hoverStyle,
} from 'src/templates/Recruit/style.css';
import { recruitListState } from 'features/recruit/atoms';
import { routes } from 'constants/routes';

import { InternalButtonLink } from 'components/links/InternalButtonLink';
import { LogoImage } from 'components/images/LogoImage';

// type layer
export type StyleProps = Record<string, unknown>;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const h2Title = `RECRUIT`;
  const list = useRecoilValue(recruitListState);
  const id1 = list[0];
  const id2 = list[1];
  const id3 = list[2];

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
          {/* 求人一覧 */}
          <div className={`${blogArea}`}>
            <div className={`${occupationArea} `}>
              {id1?.url && (
                <a className={`${hoverStyle} `} href={id1?.url}>
                  <div className={`${occupationContainer} `}>
                    <img
                      className={`${imgContainer} `}
                      src={id1.image.src as string}
                      alt="engineer"
                    />
                    <p className={`${occupationTitle} `}>{id1?.title}</p>
                  </div>
                </a>
              )}
              {id2?.url && (
                <a className={`${hoverStyle} `} href={id2?.url}>
                  <div className={`${occupationContainer} `}>
                    <img
                      className={`${imgContainer} `}
                      src={id2?.image.src as string}
                      alt="back"
                    />
                    <p className={`${occupationTitle} `}>{id2?.title}</p>
                  </div>
                </a>
              )}
              {id3?.url && (
                <a className={`${hoverStyle} `} href={id3?.url}>
                  <div className={`${occupationContainer} `}>
                    <img
                      className={`${imgContainer} `}
                      src={id3?.image.src as string}
                      alt="back"
                    />
                    <p className={`${occupationTitle} `}>{id3?.title}</p>
                  </div>
                </a>
              )}
            </div>
          </div>

          <Box className={`${linkStyle}`}>
            <InternalButtonLink href={routes.recruit.url}>
              <TextUnderlineButton>{`詳しくはコチラ`}</TextUnderlineButton>
            </InternalButtonLink>
          </Box>
        </div>
      </div>
    </section>
  );
};
