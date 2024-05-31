import { style } from '@vanilla-extract/css';

import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { colors } from 'constants/styles/colors';

export const container = style([
  {
    margin: `0 auto`,
    padding: `${137 / 3.75}vw 0vw ${160 / 3.75}vw`,
    paddingLeft: `${24 / 3.75}vw`,
    paddingRight: `${24 / 3.75}vw`,
    overflow: `hidden`,
    height: `${80}vh`,
  },
  responsiveStyle({
    desktop1024: {
      padding: `${163 / 16}rem ${54 / 16}rem ${218 / 16}rem`,
      height: `auto`,
      overflow: `initial`,
    },
    desktop1280: { maxWidth: `74.67057vw` },
    desktop1536: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  }),
]);

export const inner = style([
  { display: `flex`, justifyContent: `space-between`, zIndex: 2 },
  responsiveStyle({
    desktop1024: {
      maxWidth: `${970 / 16}rem`,
    },
    desktop1280: { maxWidth: `71.01025vw` },
    desktop1536: { maxWidth: `${1108 / 16}rem` },
  }),
]);

export const titleContainer = style([
  { position: `relative`, zIndex: 2 },
  responsiveStyle({
    desktop1024: {
      paddingRight: `1.5rem`,
      whiteSpace: `nowrap`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);
export const h2Wrapper = style([
  { zIndex: 2 },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const h2 = style([
  { lineHeight: `1.5em`, zIndex: 2 },
  responsiveStyle({
    desktop1024: { fontSize: `${64 / 16}rem`, paddingRight: `${5 / 16}rem` },
    desktop1280: { fontSize: `4.68521vw` },
    desktop1536: {
      fontSize: `${73 / 16}rem`,
    },
  }),
]);

export const h2Sub = style([
  { display: `block`, fontWeight: 600 },
  responsiveStyle({
    desktop1024: {
      fontSize: `1rem`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const link = style([
  {
    display: `block`,
    color: colors.textBlack,
    textDecoration: `none`,
    backfaceVisibility: `hidden`,
    zIndex: 2,
  },
  responsiveStyle({
    desktop1024: {
      paddingTop: `${18 / 16}rem`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const linkTitleStyle = style([
  {
    color: colors.primary,
    lineHeight: `1.6em`,
    whiteSpace: `nowrap`,
    fontWeight: 700,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${36 / 16}rem` },
    desktop1280: { fontSize: `2.63543vw` },
    desktop1536: { fontSize: `${41 / 16}rem` },
  }),
]);

export const linkAboutStyle = style([
  { lineHeight: `2em`, fontWeight: 500 },
  responsiveStyle({
    desktop1024: { fontSize: `${18 / 16}rem`, marginTop: `${48 / 16}rem` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const uSpi = style([
  {},
  responsiveStyle({
    desktop1024: {
      display: `none`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const uPci = style([
  { display: `inline-block` },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const icon = style([
  { position: `absolute` },
  responsiveStyle({
    desktop1024: {
      width: `${80 / 16}rem`,
      height: `${80 / 16}rem`,
      top: `-${35 / 16}rem`,
      left: `-${51 / 16}rem`,
    },
    desktop1280: {
      width: `5.85652vw`,
      height: `5.85652vw`,
      top: `-2.56223vw`,
      left: `-3.73353vw`,
    },
    desktop1536: {
      width: `${91 / 16}rem`,
      height: `${91 / 16}rem`,
      top: `-${40 / 16}rem`,
      left: `-${58 / 16}rem`,
    },
  }),
]);

export const subSection = style([
  { position: `relative`, display: `flex` },
  responsiveStyle({
    desktop1024: { justifyContent: `space-between`, alignItems: `center` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const image = style([
  {
    zIndex: 1,
    width: `${241 / 3.75}vw`,
    height: `${241 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      width: `${767 / 19.2}vw`,
      height: `${767 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);
