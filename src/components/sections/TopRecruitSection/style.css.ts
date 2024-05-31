import { style } from '@vanilla-extract/css';

import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { colors } from 'constants/styles/colors';

export const outerStyle = style([
  {
    backgroundColor: colors.backgroundSection,
    position: `relative`,

    // zIndex: -1,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const container = style([
  {
    margin: `0 auto`,
    padding: `${137 / 3.75}vw ${40 / 3.75}vw ${160 / 3.75}vw`,
    backgroundColor: colors.backgroundSection,
  },
  responsiveStyle({
    desktop1024: {
      width: `${1420 / 19.2}vw`,
      padding: `${150 / 19.2}vw 0 ${110 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const inner = style([
  {
    display: `flex`,
    justifyContent: `space-between`,
    flexDirection: `column`,
    zIndex: 2,
  },
  responsiveStyle({
    desktop1024: {
      // width: `${1108 / 19.2}vw`,
      // maxWidth: `${970 / 16}rem`,
    },
    desktop1280: {
      // maxWidth: `71.01025vw`
    },
    desktop1536: {
      // maxWidth: `${1108 / 16}rem`
    },
  }),
]);

export const titleContainer = style([
  { position: `relative`, zIndex: 2 },
  responsiveStyle({
    desktop1024: {
      paddingRight: `${24 / 19.2}vw`,
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
    desktop1024: {
      fontSize: `${64 / 19.2}vw`,
      paddingRight: `${5 / 19.2}vw`,
      whiteSpace: `pre-wrap`,
    },
    desktop1280: {
      // fontSize: `4.68521vw` ,
    },
    desktop1536: {
      // fontSize: `${73 / 16}rem`,
    },
  }),
]);

export const h2Sub = style([
  { display: `block`, fontWeight: 600, fontSize: `${14 / 3.75}vw` },
  responsiveStyle({
    desktop1024: {
      fontSize: `${16 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const blogArea = style([
  //ブログ部分のエリア
  {
    width: `100%`,
    marginTop: `10vw`,
  },
  responsiveStyle({
    desktop1024: {
      display: `Flex`,
      // justifyContent: `space-between`,
      width: `${1320 / 19.2}vw`,
      margin: `0 auto `,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const blogContainer = style([
  {},
  responsiveStyle({
    desktop1024: { marginRight: `1.1vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const imgContainer = style([
  //画像部分の大きさ
  { width: `100vw`, height: `auto` },
  responsiveStyle({
    desktop1024: {
      width: `100vw`,
      height: `${216 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const hoverStyle = style([
  {},
  responsiveStyle({
    desktop1024: {
      ':hover': {
        cursor: `pointer`,
        opacity: `0.5`,
        transition: `0.3s`,
      },
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Category = style([
  //カテゴリ(囲まれた文字部分)
  {
    fontFamily: `'Noto Sans JP', sans-serif;`,
    fontSize: `${8 / 3.75}vw`,
    fontWeight: 500,
    color: colors.white,
    border: `1px solid `,
    borderRadius: `30px`,
    marginTop: `15px`,
    padding: `1px 20px`,
    display: `inline-block`,
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `${17 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const blogTitle = style([
  //ブログタイトル
  {
    fontFamily: `'Noto Sans JP', sans-serif;`,
    fontSize: `3.73vw`,
    fontWeight: `bold`,
    color: colors.white,
    display: `inline-block`,
    marginTop: `2vw`,
  },
  responsiveStyle({
    desktop1024: {
      fontFamily: `'Noto Sans JP', sans-serif;`,
      fontSize: `25px`,
      fontWeight: `bold`,
      color: colors.white,
      display: `inline-block`,
      marginTop: `0`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const linkStyle = style([
  {
    display: `inline-block`,
    margin: `0 auto`,
    color: colors.textBlack,
    textDecoration: `none`,
    backfaceVisibility: `hidden`,
    zIndex: 2,
    marginTop: `${25 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      margin: `${100 / 19.2}vw auto 0`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const linkTitleStyle = style([
  {
    color: colors.textBlack,
    lineHeight: `1.6em`,
    fontWeight: 700,
    fontSize: `${24 / 3.75}vw`,
    overflowWrap: `break-word`,
    wordWrap: `break-word`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${41 / 19.2}vw` },
    desktop1280: {
      // fontSize: `2.63543vw`
    },
    desktop1536: {
      // fontSize: `${41 / 16}rem`
    },
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
  {
    display: `none`,
  },
  responsiveStyle({
    desktop1024: {
      display: `inline-block`,
    },
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
      width: `${80 / 19.2}vw`,
      height: `${80 / 19.2}vw`,
      top: `-${35 / 19.2}vw`,
      left: `-${51 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const buttonStyle = style([
  { marginTop: `${45 / 3.75}vw`, width: `fit-content` },
  responsiveStyle({
    desktop1024: { marginTop: `initial` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const logoStyle = style([
  {
    position: `absolute`,
    width: `75vw`,
    left: `${-50 / 3.75}vw`,
    bottom: 0,
    transform: `translate(-25%, 50%)`,
    mixBlendMode: `soft-light`,
    willChange: `mixBlendMode`,
    zIndex: 0,
  },
  responsiveStyle({
    desktop1024: {
      width: `${760 / 19.2}vw`,
      transform: `translateX(-25%)`,
      left: `${-150 / 19.2}vw`,
      bottom: `${-350 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);
