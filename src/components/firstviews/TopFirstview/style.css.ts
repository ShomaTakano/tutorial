import { style, keyframes } from '@vanilla-extract/css';

import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { colors } from 'constants/styles/colors';

export const container = style([
  {
    width: `100%`,
    height: [`calc(100dvh - 20vw - 80px)`, `calc(100vh - 20vw)`],
    position: `relative`,
    background: colors.bgBlack,
    display: `flex`,
    alignItems: `center`,
    flexDirection: `column`,
    justifyContent: `center`,
  },
  responsiveStyle({
    desktop1024: {
      // marginTop: `7vw`,
      // height: `calc(100vh - 5vw)`,
      height: `100vh`,
      alignItems: `initial`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const animationBandStyle1 = style([
  {
    // display: `none`,
    // position: `absolute`,
    transform: `rotate(15deg)`,
  },
  responsiveStyle({
    desktop1024: {
      position: `absolute`,
      display: `flex`,
      transform: `rotate(15deg)`,
      top: `5vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const animationBandStyle2 = style([
  {
    transform: `rotate(-30deg)`,
  },
  responsiveStyle({
    desktop1024: {
      position: `absolute`,
      transform: `rotate(-15deg)`,
      bottom: `10vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const firstviewKv = style([
  {
    display: `flex`,
    position: `relative`,
    overflow: `hidden`,
    height: `calc(50vh + 20vw)`,
    // height: `calc(100vh - 80vw - ${71.5 / 3.75}vw)`,
    alignItems: `center`,
    padding: `${70 / 3.75}vw ${40 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: { height: `calc(100vh)`, padding: `initial` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const kvText = style([
  { zIndex: 5 },
  responsiveStyle({
    desktop1024: {
      paddingLeft: `${300 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const mainText = style([
  {
    fontSize: `${28 / 3.75}vw`,
    marginTop: `${20 / 3.75}vw`,
    whiteSpace: `nowrap`,
    lineHeight: `1em`,
    fontWeight: 700,
    letterSpacing: `0.05em`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${60 / 19.2}vw`, marginTop: `${50 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const mainTextMarginTop = style([
  { marginTop: `${14 / 3.75}vw` },
  responsiveStyle({
    desktop1024: { marginTop: `${40 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const subText = style([
  {
    fontSize: `${12 / 3.75}vw`,
    lineHeight: `1em`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${14 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const buttonStyle = style([
  { marginTop: `${25 / 3.75}vw` },
  responsiveStyle({
    desktop1024: { marginTop: `${50 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const whiteSpace = style([
  responsiveDesktop('display', { desktop1024: `none` }),
]);

export const messageImageStyle = style([
  {
    position: `relative`,
    width: `80vw`,
    '@media': {
      'screen and (min-width: 768px)': {
        width: `70vw`,
      },
    },
  },
  responsiveStyle({
    desktop1024: {
      width: `${1172 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

// export const messageStyle = style([
//   //文字のメッセージ
//   {
//     marginTop: `8vw`,
//     fontFamily: `'Noto Sans JP', sans-serif;`,
//     fontWeight: `bold`,
//     fontSize: `${32 / 3.75}vw`,
//     lineHeight: 1.1,
//     color: colors.white,
//     zIndex: 1,
//     '@media': {
//       'screen and (min-width: 768px)': {
//         fontSize: `8vw`,
//       },
//     },
//   },
//   responsiveStyle({
//     desktop1024: {
//       position: `absolute`,
//       top: `50%`,
//       transform: `translateY(-50%)`,
//       margin: `0 0 0 ${300 / 19.2}vw`,
//       fontSize: `${64 / 19.2}vw`,
//     },
//     desktop1280: {},
//     desktop1536: {},
//   }),
// ]);

// export const minmessageStyle = style([
//   {
//     //小さい文字
//     textAlign: `center`,
//     marginTop: `1.5vw`,
//     fontFamily: `'Noto Sans JP', sans-serif;`,
//     fontWeight: `bold`,
//     fontSize: '2vw',
//     color: colors.white,
//     zIndex: 3,
//     '@media': {
//       'screen and (min-width: 768px)': {
//         fontSize: `2vw`,
//       },
//     },
//   },
//   responsiveStyle({
//     desktop1024: {
//       fontSize: `${15 / 19.2}vw`,
//       marginTop: `1vw`,
//     },
//     desktop1280: {},
//     desktop1536: {},
//   }),
// ]);

export const messageWrapperStyle = style([
  {
    flexDirection: `column`,
    position: `absolute`,
    top: `52%`,
    left: `50%`,
    transform: `translate(-50%,-50%)`,
  },
  responsiveStyle({
    desktop1024: {
      position: `absolute`,
      top: `50%`,
      left: `0`,
      transform: `translateY(-50%)`,
      margin: `0 0 0 ${300 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const h2Style = style([
  {
    position: `relative`,
    fontFamily: `'Noto Sans JP', sans-serif;`,
    fontWeight: `bold`,
    fontSize: `${32 / 3.75}vw`,
    lineHeight: 1.1,
    color: colors.white,
    zIndex: 1,
    width: `${280 / 3.75}vw`,
    height: `${35 / 3.75}vw`,
    '@media': {
      'screen and (min-width: 768px)': {
        fontSize: `8vw`,
        width: `${533 / 7.68}vw`,
      },
    },
  },
  responsiveStyle({
    desktop1024: {
      width: `${555 / 19.2}vw`,
      height: `${75 / 19.2}vw`,
      fontSize: `${64 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const messageStyle = style([
  {
    position: `absolute`,
    left: `0`,
  },
  responsiveStyle({
    desktop1024: { bottom: `8px` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const minmessageStyle = style([
  {
    textAlign: `center`,
    marginTop: `1.5vw`,
    fontFamily: `'Noto Sans JP', sans-serif;`,
    fontWeight: `bold`,
    fontSize: '2vw',
    color: colors.white,
    zIndex: 3,
    '@media': {
      'screen and (min-width: 768px)': {
        fontSize: `2vw`,
      },
    },
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `${15 / 19.2}vw`,
      marginTop: `1vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);
export const logoImageStyle = style([
  {
    position: `relative`,
    width: `80vw`,
    '@media': {
      'screen and (min-width: 768px)': {
        width: `70vw`,
      },
    },
  },
  responsiveStyle({
    desktop1024: {
      width: `${760 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const logoStyle = style([
  {
    display: `flex`,
    marginTop: `5vw`,
    position: `absolute`,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  },
  responsiveStyle({
    desktop1024: {
      position: `absolute`,
      top: `50%`,
      transform: `translateY(-50%)`,
      left: `unset`,
      right: `${160 / 19.2}vw`,
      marginTop: `1vw`,
    },
    desktop1280: { marginTop: `initial` },
    desktop1536: {},
  }),
]);

export const verticalTextStyle = style([
  {
    writingMode: `vertical-rl`,
    fontSize: `${10 / 3.75}vw`,
    letterSpacing: 8,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${22 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

const keyframe = keyframes({
  '0%': {
    transform: `scale(1,0);`,
  },
  '60%': {
    transform: `scale(1,1);`,
  },
  '100%': {
    transform: `scale(1,1);`,
  },
});

export const animationLineStyle = style([
  {
    width: `1px`,
    height: `30vw`,
    backgroundColor: `#ffffff`,
    animation: `${keyframe} infinite 1.5s linear`,
    transition: `all .3s`,
    transformOrigin: `top`,
    marginTop: `4.26vw`,
  },
  responsiveStyle({
    desktop1024: {
      height: `${220 / 19.2}vw`,
      marginTop: `${80 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const verticalWrapperStyle = style([
  {
    justifyContent: `center`,
    alignItems: `center`,
    flexDirection: `column`,
    display: `none`,
  },
  responsiveStyle({
    desktop1024: {
      display: `flex`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const verticalWrapperMobileStyle = style([
  {
    position: `absolute`,
    bottom: `20vw`, //12
    justifyContent: `center`,
    alignItems: `center`,
    flexDirection: `column`,
    display: `flex`,
    alignSelf: `flex-end`,
    marginRight: `4.26vw`,
    '@media': {
      'screen and (min-width: 768px)': {
        transform: `translateY(-50%)`,
        bottom: `${-350 / 7.68}vw`,
      },
    },
  },
  responsiveStyle({
    desktop1024: {
      display: `none`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);
