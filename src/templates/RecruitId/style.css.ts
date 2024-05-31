import { style, keyframes } from '@vanilla-extract/css';

import { colors } from 'constants/styles/colors';
import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';

export const container1420Style = style([
  {
    margin: `0 auto`,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Style = style([
  {},
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const breadcrumb = style([
  {
    whiteSpace: `nowrap`,
    display: `flex`,
    justifyContent: `space-between`,
    position: `relative`,
    padding: `${10 / 3.75}vw  ${24 / 3.75}vw 0 `,
    fontSize: `${0 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      width: `${1320 / 19.2}vw`,
      padding: `${25 / 12.8}vw  0 0 0 `,
      marginLeft: `${300 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const container = style([
  {
    background: colors.white,

    // height: `${436 / 3.75}vw`,
    position: `relative`,
    fontFamily: `'Noto Sans JP', sans-serif;`,
  },
  responsiveStyle({
    desktop1024: {
      padding: `0 ${25 / 19.2}vw`,
      width: `calc(100% + ${50 / 19.2}vw)`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const container1320Style = style([
  {
    margin: `0 auto`,
    padding: `${10 / 3.75}vw ${10 / 3.75}vw ${0 / 3.75}vw`,
    fontFamily: `'Noto Sans JP', sans-serif;`,
  },
  responsiveStyle({
    desktop1024: {
      margin: `${50 / 19.2}vw auto ${10 / 19.2}vw`,
      padding: `unset`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const border = style([
  {
    listStyleType: `none`,
    color: colors.backgroundSection,
    border: `1px solid `,
    borderRadius: `30px`,
    padding: `1px 20px`,
  },
]);

export const pageNameStyle = style([
  { color: `#ACADB0` },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const main = style([
  {
    whiteSpace: `pre-wrap`,
    // width: `${89.75}vw`,
    margin: `0 auto`,
    padding: `${30 / 3.75}vw ${24 / 3.75}vw ${20 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      width: `${1320 / 19.2}vw`,
      padding: `${80 / 19.2}vw 0 ${50 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const titleStyle = style([
  {
    lineHeight: `1.25em`,
    fontSize: `${20 / 3.75}vw`,
    fontWeight: 700,
    textAlign: `start`,
  },
  responsiveStyle({
    desktop1024: {
      whiteSpace: `pre-wrap`,
      fontSize: `${62 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const subTitleStyle = style([
  {
    // lineHeight: `1em`,
    // marginTop: `${12 / 3.75}vw`,
    letterSpacing: `0.15em`,
    // marginLeft: `${6 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const subTextWrapper = style([
  {
    justifyContent: `space-between`,
    fontSize: `${14 / 3.75}vw`,
    marginLeft: `${105 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${25 / 19.2}vw`, marginLeft: `${1000 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const contact = style([
  {
    marginTop: `-10vw`,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);
