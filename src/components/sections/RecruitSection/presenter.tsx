// import layer
import { FC } from 'react';

import { SectionContainer1420 } from 'components/containers/SectionContainer1420';
import { Image } from 'components/images/Image';
import { WhiteText } from 'components/texts/WhiteText';
import { Box } from 'components/fundamentals/Box';
import { TextUnderlineButton } from 'components/buttons/TextUnderlineButton';
import { InternalLink } from 'components/links/InternalLink';

import {
  containerStyle,
  imageStyle,
  innerStyle,
  logoWrapperStyle,
  titleStyle,
  logoImageStyle,
  messageStyle,
  buttonStyle,
  hoverStyle,
} from './style.css';

// type layer
export type StyleProps = Record<string, unknown>;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ ...props }) => {
  const title = `We are recruiting
at the moment.`;
  const message = `新潟から、攻めたいメンバー募集中`;

  return (
    <section id={`recruit`} className={`${containerStyle}`}>
      <a href="/recruit"> {/* eslint-disable-line */}
        <div className={hoverStyle}>
          <Box className={logoWrapperStyle}>
            <Image
              className={imageStyle}
              image={{
                src: `/images/recruit/recruit-bg.jpg`,
                // width: 1920,
                // height: 646,
                layout: `fill`,
              }}
            />
          </Box>
          <Image
            className={`${logoImageStyle} recruit_bg`}
            image={{
              src: `/svg/logo-white.svg`,
              width: 234,
              height: 232,
              layout: `responsive`,
            }}
          />

          <SectionContainer1420 className={innerStyle}>
            <WhiteText>
              <h2 className={titleStyle}>{title}</h2>
            </WhiteText>
            <WhiteText className={messageStyle}>{message}</WhiteText>

            <TextUnderlineButton
              className={buttonStyle}
            >{`詳しくはコチラ`}</TextUnderlineButton>
          </SectionContainer1420>
        </div>
      </a>
    </section>
  );
};
