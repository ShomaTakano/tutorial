// import layer
import { style, keyframes } from '@vanilla-extract/css';
import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { colors } from 'constants/styles/colors';

export const stackMargin = style([
  {},
  responsiveStyle({
    desktop1024: {
      selectors: {
        '&:not(:first-child)': {
          marginLeft: `${(2.5 * 16) / 19.2}vw`,
        },
      },
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const navText = style([
  {
    fontSize: `4.26vw`,
    ':hover': { cursor: `pointer` },
  },
  stackMargin,
  responsiveStyle({
    desktop1024: {
      fontSize: `${(0.9875 * 16) / 19.2}vw`,
      fontWeight: 700,
      display: `flex`,
      flexDirection: `column`,
      position: `relative`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const navList = style([
  { flexDirection: `column` },
  responsiveStyle({
    desktop1024: {
      // visibility: `hidden`,
      opacity: `0`,
      display: `none`,

      selectors: {
        [`${navText}:hover &`]: {
          // visibility: `visible`,
          opacity: `1`,
          display: `block`,
          cursor: `pointer`,
          position: `absolute`,
          top: `1.1vw`,
          color: colors.white,
          fontWeight: `500`,
          fontFamily: `Noto Sans JP`,
          listStyleType: `none`,
        },
      },
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const navMenu = style([
  { flexDirection: `column` },
  responsiveStyle({
    desktop1024: {
      display: `block`,
      width: `150%`,
      textAlign: `left`,
      padding: `${20 / 19.2}vw ${0 / 19.2}vw ${0 / 19.2}vw ${10 / 19.2}vw`,
      backgroundColor: `#1c1c1c`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

//下のpaddingを広げる
export const navMenu2 = style([
  { flexDirection: `column` },
  responsiveStyle({
    desktop1024: {
      display: `block`,
      width: `150%`,
      textAlign: `left`,
      padding: `${20 / 19.2}vw ${0 / 19.2}vw ${20 / 19.2}vw ${10 / 19.2}vw`,
      backgroundColor: `#1c1c1c`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const lineStyle = style([
  {},
  responsiveStyle({
    desktop1024: {
      display: `inline-block`,
      width: `95%`,
      borderBottom: `1px solid #383838`,
      paddingBottom: `0.3vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const container = style([
  { justifyContent: `center`, alignItems: `center`, display: `none` },
  responsiveStyle({
    desktop1024: { display: `flex`, marginRight: `${270 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const buttonStyle = style([
  {},
  stackMargin,
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const serviceList = style([
  { flexDirection: `column` },
  responsiveStyle({
    desktop1024: {
      flexDirection: `row`,
      justifyContent: `center`,
      alignItems: `center`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Style = style([
  {
    selectors: {
      // '${menu}&': {},
    },
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);
