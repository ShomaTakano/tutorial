// import layer
import { FC } from 'react';

import { Text } from 'components/texts/Text';
import { TextUnderlineButton } from 'components/buttons/TextUnderlineButton';
import { Box } from 'components/fundamentals/Box';

import { routes } from 'constants/routes';
import {
  container,
  inner,
  titleContainer,
  h2,
  linkAboutStyle,
  descriptionStyle,
  linkStyle,
  h2Wrapper,
  outerStyle,
  logoStyle,
} from './style.css';
import { InternalButtonLink } from 'components/links/InternalButtonLink';
import { LogoImage } from 'components/images/LogoImage';

// type layer
export type StyleProps = Record<string, unknown>;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const h2Title = `Attack from the local
with Web Technology`;
  const linkAbout = `私達はモダンWebに強みを持つ地方発のクリエイティブ集団です。これまでに数多くのWebサイト制作、システム開発、アプリ開発を行ってまいりました。日々、複雑化する業界だからこそ、いかに”ラクにウェブ”を提供できるかについて考え行動してきました。しかし私たちにとって、Webは1つの手段。Web領域に留まらず、掛け合わせ、限界を超え、新たなセカイを作り出します。地方から攻めまくる会社として。`;

  return (
    <section id={`about`} className={`${outerStyle}`}>
      <div className={`${container}`}>
        <div className={`${inner}`}>
          <div className={`${titleContainer}`}>
            <Text className={`${h2Wrapper}`} as={`h2`}>
              <span className={`${h2}`}>{h2Title}</span>
            </Text>
          </div>

          <div className={`${descriptionStyle}`}>
            <Text className={`${linkAboutStyle}`} as={`p`}>
              {linkAbout}
            </Text>
          </div>

          <Box className={`${linkStyle}`}>
            <InternalButtonLink href={routes.about.url}>
              <TextUnderlineButton>{`詳しくはコチラ`}</TextUnderlineButton>
            </InternalButtonLink>
          </Box>
        </div>
      </div>

      <LogoImage className={logoStyle} />
    </section>
  );
};
