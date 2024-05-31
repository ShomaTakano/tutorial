// import layer
import { FC, useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import { Flex } from 'components/fundamentals/Flex';
import { Text } from 'components/texts/Text';
import { WhiteText } from 'components/texts/WhiteText';
import { Image } from 'components/images/Image';
import { LogoImage } from 'components/images/LogoImage';

import {
  container,
  firstviewKv,
  kvText,
  mainText,
  mainTextMarginTop,
  subText,
  whiteSpace,
  buttonStyle,
  animationBandStyle1,
  animationBandStyle2,
  messageImageStyle,
  logoImageStyle,
  h2Style,
  messageWrapperStyle,
  messageStyle,
  minmessageStyle,
  logoStyle,
  verticalTextStyle,
  animationLineStyle,
  verticalWrapperStyle,
  verticalWrapperMobileStyle,
} from './style.css';
import { Box } from '@chakra-ui/react';

// type layer
export type StyleProps = Record<string, unknown>;
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = () => {
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    scroll &&
      scroll.on('scroll', (e) => {
        Object.keys(e.currentElements).length > 0 &&
          Object.values(e.currentElements)
            .filter((t: any) => {
              return t.el.classList.contains('logoRotate');
            })
            .forEach((n: any) => {
              const r =
                1 +
                -2 *
                  Math.abs(
                    Math.max(0, n.top - e.scroll.y + n.el.offsetHeight / 2) /
                      window.innerHeight -
                      0.5
                  );
              n.el.style.transform = `rotate(${Math.max(
                (-r * 100 + 91.11) % 360,
                0
              )}deg)`;
            });
      });
  }, [scroll]);

  return (
    <div className={`${container}`}>
      <div className={`${logoStyle}`}>
        <div data-scroll className={`logoRotate`}>
          <Image
            className={`${logoImageStyle}`}
            image={{
              src: `/svg/logo.svg`,
              width: 760,
              height: 750,
              layout: `responsive`,
              loading: `eager`,
              priority: true,
            }}
          />
        </div>

        <Flex className={`${verticalWrapperStyle}`}>
          <WhiteText
            className={`${verticalTextStyle}`}
          >{`RAKUWEB Incorporated`}</WhiteText>
          <Box className={`${animationLineStyle}`} />
        </Flex>
      </div>
      {/* <div className={`${messageStyle}`}>
        Combine the web
        <br />
        Go beyond limits
        <br />
        Creates the world
        <p className={`${minmessageStyle}`}>
          Webを掛け合わせ、限界を超え、セカイを創る会社
        </p>
      </div> */}
      <Flex className={`${messageWrapperStyle}`}>
        <h2 className={`${h2Style}`}>
          <div className={`${messageStyle}`}>Combine the web</div>
        </h2>
        <h2 className={`${h2Style}`}>
          <div className={`${messageStyle}`}>Go beyond limits</div>
        </h2>
        <h2 className={`${h2Style}`}>
          <div className={`${messageStyle}`}>Creates the world</div>
        </h2>
        <p className={`${minmessageStyle}`}>
          Webを掛け合わせ、限界を超え、セカイを創る会社
        </p>
      </Flex>

      <Flex className={`${verticalWrapperMobileStyle}`}>
        <WhiteText
          className={`${verticalTextStyle}`}
        >{`RAKUWEB Incorporated`}</WhiteText>
        <Box className={`${animationLineStyle}`} />
      </Flex>
    </div>
  );
};
