import { keyframes, style } from '@vanilla-extract/css';

import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { colors } from 'constants/styles/colors';

//アニメーション

const views = keyframes({
  '0%': { width: `0` },
  '15%': { width: `${555 / 19.2}vw` },
});

const outview = keyframes({
  '80%': { top: `0` },
  '100%': { top: `-105vh` },
});

const tviews = keyframes({
  '0%': { top: `100%` },
  '11%': { top: `100%` },
  '30%': { top: `-3px` },
  '100%': { top: `-3px` },
});

const appeare = keyframes({
  '0%': { opacity: `0` },
  '99%': { opacity: `0` },
  '100%': { opacity: `1` },
});

export const container = style([
  {
    background: colors.background,
    overflow: `hidden`,
    scrollBehavior: `smooth`,
  },
]);

export const grayAreaStyle = style([
  {
    // background: colors.backgroundSectionGray,  名前はgrayですが黒に変更しました。
    background: colors.bgBlack,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const wrapper = style([
  {
    position: `relative`,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const messageWrapperStyle = style([
  {
    flexDirection: `column`,
    position: `absolute`,
    top: `47.5%`,
    left: `50%`,
    transform: `translate(-50%,-50%)`,
    '@media': {
      'screen and (min-width: 768px)': {
        top: `45%`,
      },
    },
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
    overflow: `hidden`,
    width: `${280 / 3.75}vw`,
    height: `${35 / 3.75}vw`,

    '@media': {
      'screen and (min-width: 768px)': {
        fontSize: `8vw`,
        width: `${533 / 7.68}vw`,
      },
    },
    ':before': {
      content: '',
      display: `block`,
      width: `100%`,
      height: `0px`,
      background: `#fff`,
      position: `absolute`,
      left: `0`,
      bottom: `0px`,
    },
  },
  responsiveStyle({
    desktop1024: {
      width: `${555 / 19.2}vw`,
      height: `${75 / 19.2}vw`,
      fontSize: `${64 / 19.2}vw`,
      animation: `${views} 4s cubic-bezier(0.65, 0, 0.35, 1) forwards`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const messageStyle = style([
  {
    position: `absolute`,
    left: `0`,
    bottom: `0px`,
    animation: `${tviews} 4s cubic-bezier(0.65, 0, 0.35, 1) forwards`,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const minmessageWrapper = style([
  {
    position: `relative`,
    fontFamily: `'Noto Sans JP', sans-serif;`,
    fontWeight: `bold`,
    fontSize: `2vw`,
    marginTop: `1.5vw`,
    color: colors.white,
    zIndex: 1,
    overflow: `hidden`,
    whiteSpace: `nowrap`,
    width: `${280 / 3.75}vw`,
    height: `${15 / 3.75}vw`,
    '@media': {
      'screen and (min-width: 768px)': {
        fontSize: `2vw`,
        width: `${533 / 7.68}vw`,
      },
    },
    ':before': {
      content: '',
      display: `block`,
      width: `100%`,
      height: `0px`,
      background: `#fff`,
      position: `absolute`,
      left: `0`,
      bottom: `0px`,
    },
  },
  responsiveStyle({
    desktop1024: {
      width: `${555 / 19.2}vw`,
      height: `${22.5 / 19.2}vw`,
      fontSize: `${15 / 19.2}vw`,
      marginTop: `1.2vw`,
      animation: `${views} 4s cubic-bezier(0.65, 0, 0.35, 1) 2.4s forwards`,
      // animationDelay: `3s`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const minmessageStyle = style([
  {
    position: `absolute`,
    transform: `translateX(-50%)`,
    left: `50%`,
    top: `0px`,
    animation: `${tviews} 4s cubic-bezier(0.65, 0, 0.35, 1) 2.4s forwards`,
    // animationDelay: `3s`,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const opacity = style([
  {
    opacity: `0`,
    animation: `${appeare} 2.5s forwards`,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

// export const minmessageStyle = style([
//   {
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
//       width: `${555 / 19.2}vw`,
//     },
//     desktop1280: {},
//     desktop1536: {},
//   }),
// ]);

// animation: `${tviews} 4s cubic-bezier(0.65, 0, 0.35, 1) forwards`,
