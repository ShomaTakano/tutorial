import { style } from '@vanilla-extract/css';

import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { colors } from 'constants/styles/colors';

export const containerStyle = style([
  {
    zIndex: 3,
    margin: `0 auto`,
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    padding: `0 ${40 / 3.75}vw ${160 / 3.75}vw`,
    // padding: `${137 / 3.75}vw ${40 / 3.75}vw ${160 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      padding: `initial`,
      paddingBottom: `${130 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const inner = style([
  {
    display: `flex`,
    justifyContent: `space-between`,
    zIndex: 2,
    flexDirection: `column`,
    width: `100%`,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const titleContainer = style([
  { position: `relative`, zIndex: 2 },
  responsiveStyle({
    desktop1024: {
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
  {
    lineHeight: `1em`,
    zIndex: 2,
    fontSize: `${40 / 3.75}vw`,
    color: colors.white,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${64 / 19.2}vw`, paddingRight: `${5 / 19.2}vw` },
    desktop1280: {
      // fontSize: `4.68521vw`
    },
    desktop1536: {
      // fontSize: `${73 / 16}rem`,
    },
  }),
]);

export const h2Sub = style([
  {
    display: `block`,
    fontWeight: 700,
    fontSize: `${14 / 3.75}vw`,
    marginLeft: `1em`,
    color: colors.primary,
    marginTop: `${28 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `${16 / 19.2}vw`,
      marginTop: `${40 / 19.2}vw`,
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
  {
    position: `absolute`,
    width: `${60 / 3.75}vw`,
    height: `${60 / 3.75}vw`,
    top: `-10vw`,
    left: `-10vw`,
    zIndex: -1,
  },
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

export const subContainer = style([
  { display: `flex`, justifyContent: `flex-end`, marginTop: `${42 / 3.75}vw` },
  responsiveStyle({
    desktop1024: {
      marginTop: `${130 / 19.2}vw`,
      paddingRight: `${48 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
  // calculateResponsiveDesktop('width', { desktop1536: 800 / 16 }),
]);

export const listStyle = style([
  {
    width: `100%`,
  },
]);

export const spaceX = style([
  { padding: `${28 / 3.75}vw 0`, borderBottom: `1px solid #707070` },
  responsiveStyle({
    desktop1024: {
      padding: `${32 / 19.2}vw 0`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const spaceBottom = style([
  { padding: `0 0 ${28 / 3.75}vw 0`, borderBottom: `1px solid #707070` },
  responsiveStyle({
    desktop1024: {
      padding: `0 0 ${32 / 19.2}vw 0`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const buttonStyle = style([
  { marginTop: `${50 / 3.75}vw` },
  responsiveStyle({
    desktop1024: { marginTop: `${120 / 19.2}vw`, alignSelf: `flex-end` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const tagMobile = style([
  {
    borderRadius: `10em`,
    background: colors.primary,
    color: colors.white,
    padding: `${(0.6875 * 16) / 3.75}vw ${(1.25 * 16) / 3.75}vw ${
      (0.5 * 16) / 3.75
    }vw`,
    width: `fit-content`,
    fontSize: `${14 / 3.75}vw`,
    fontWeight: 500,
    lineHeight: `1em`,
  },
  responsiveStyle({
    desktop1024: {
      borderRadius: `unset`,
      background: `unset`,
      padding: `unset`,
      color: colors.primary,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const logoStyle = style([
  {
    position: `absolute`,
    width: `90vw`,
    right: 0,
    top: `0%`,
    transform: `translate(50%, -50%)`,
    mixBlendMode: `hard-light`,
  },
  responsiveStyle({
    desktop1024: {
      top: `50%`,
      width: `${760 / 19.2}vw`,
      height: `${750 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const outerStyle = style([
  { position: `relative` },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);
