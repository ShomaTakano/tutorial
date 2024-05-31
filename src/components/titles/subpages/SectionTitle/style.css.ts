// import layer
import { style } from '@vanilla-extract/css';
import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { colors } from 'constants/styles/colors';

export const icon = style([
  {
    position: `absolute`,
    width: `${60 / 3.75}vw`,
    height: `${60 / 3.75}vw`,
    top: `-10vw`,
    left: `-10vw`,
    // zIndex: -1,
  },
  responsiveStyle({
    desktop1024: {
      width: `${80 / 19.2}vw`,
      height: `${80 / 19.2}vw`,
      top: `-${35 / 19.2}vw`,
      left: `-${51 / 19.2}vw`,
    },
    desktop1280: {
      // width: `5.85652vw`,
      // height: `5.85652vw`,
      // top: `-2.56223vw`,
      // left: `-3.73353vw`,
    },
    desktop1536: {
      // width: `${91 / 16}rem`,
      // height: `${91 / 16}rem`,
      // top: `-${40 / 16}rem`,
      // left: `-${58 / 16}rem`,
    },
  }),
]);

export const h2Wrapper = style([
  {
    // display: `flex`,
    zIndex: 2,
    // flexDirection: `row`,
    // alignItems: `flex-end`,
    lineHeight: `1em`,
  },
  responsiveStyle({
    desktop1024: {
      display: `flex`,
      position: `initial`,
      flexDirection: `column`,
      alignItems: `flex-start`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const h2 = style([
  {
    // lineHeight: `1.5em`,
    zIndex: 2,
    fontSize: `${40 / 3.75}vw`,
    lineHeight: `1em`,
    paddingRight: `${18 / 3.75}vw`,
    color: colors.aboutsubTitle,
    fontFamily: `'Noto Sans JP', sans-serif;`,
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `${73 / 19.2}vw`,
      paddingRight: `${5 / 19.2}vw`,
      lineHeight: `1em`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const h2Sub = style([
  {
    display: `inline-block`,
    fontWeight: 600,
    fontSize: `${14 / 3.75}vw`,
    // paddingBottom: `${4 / 3.75}vw`,
    color: colors.aboutsubTitle,
    fontFamily: `'Noto Sans JP', sans-serif;`,
    // height: `30px`,
    verticalAlign: `baseline`,
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `${18 / 19.2}vw`,
      marginTop: `${18 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const container = style([
  { position: `relative` },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);
