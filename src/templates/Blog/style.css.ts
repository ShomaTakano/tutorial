import { style, keyframes } from '@vanilla-extract/css';

import { colors } from 'constants/styles/colors';

import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';

export const container1320Style = style([
  {
    margin: `0 auto`,
    padding: `${50 / 3.75}vw ${40 / 3.75}vw ${160 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      margin: `${150 / 19.2}vw auto`,
      width: `${1350 / 19.2}vw`,
      padding: `unset`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const section2Style = style([
  {
    margin: `0 auto`,
    padding: `${137 / 3.75}vw ${0}vw 0`,
  },
  responsiveStyle({
    desktop1024: {
      padding: `unset`,
      margin: `${200 / 19.2}vw auto`,
    },
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

export const blogArea = style([
  //ブログ部分のエリア
  {
    width: `100%`,
    marginTop: `10vw`,
  },
  responsiveStyle({
    desktop1024: {
      display: `Flex`,
      width: `100%`,
      marginTop: `0`,
      // justifyContent: `space-between`,
      flexWrap: `wrap`,
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

export const imgContainer = style([
  //画像部分の大きさ
  { width: `100vw`, height: `60vw` },
  responsiveStyle({
    desktop1024: { width: `100vw`, height: `65%` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Categorymenu = style([
  // 上の方のメニュー
  {
    width: `100%`,
  },
  responsiveStyle({
    desktop1024: { display: `flex`, paddingLeft: `37vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const CM = style([
  //メニュー部分のカテゴリ
  {
    width: `auto`,
    fontFamily: `'Noto Sans JP', sans-serif;`,
    color: colors.backgroundSection,
    backgroundColor: colors.white,
    border: `1px solid `,
    borderRadius: `30px`,
    textAlign: `center`,
    marginBottom: `3vw`,
    whiteSpace: `nowrap`,
  },
  responsiveStyle({
    desktop1024: {
      width: `auto`,
      fontSize: `${17 / 19.2}vw`,
      padding: `1px ${20 / 19.2}vw`,
      flexDirection: `row`,
      marginRight: `1vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const CMF = style([
  //メニュー部分のフォーカスされてるカテゴリ
  {
    fontFamily: `'Noto Sans JP', sans-serif;`,
    color: colors.white,
    backgroundColor: colors.backgroundSection,
    border: `1px solid `,
    borderRadius: `30px`,
    whiteSpace: `nowrap`,
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `${17 / 19.2}vw`,
      padding: `1px ${20 / 19.2}vw`,
      flexDirection: `row`,
      marginRight: `1vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Category = style([
  //カテゴリ(囲まれた文字部分)
  {
    fontFamily: `'Noto Sans JP', sans-serif;`,
    fontSize: `17px`,
    fontWeight: 500,
    color: colors.white,
    border: `1px solid `,
    borderRadius: `30px`,
    padding: `1px 20px`,
    display: `inline-block`,
    flexDirection: `row`,
    marginTop: `3vw`,
    marginRight: `1vw`,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const blogTitle = style([
  //ブログタイトル
  {
    fontFamily: `'Noto Sans JP', sans-serif;`,
    fontSize: `${25 / 3.75}vw`,
    fontWeight: `bold`,
    color: colors.white,
    display: `inline-block`,
  },
  responsiveStyle({
    desktop1024: {
      fontFamily: `'Noto Sans JP', sans-serif;`,
      fontSize: `${25 / 19.2}vw`,
      fontWeight: `bold`,
      color: colors.white,
      display: `inline-block`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const page = style([
  //下のページ数部分
  {
    fontFamily: `'Noto Sans JP', sans-serif;`,
    fontSize: `${22 / 3.75}vw`,
    textAlign: `center`,
    color: colors.white,
    marginTop: `10vw`,
    letterSpacing: `3vw`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${33 / 19.2}vw`, letterSpacing: `2vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const pageline = style([
  //下のページ数部分アンダーライン
  {
    fontFamily: `'Noto Sans JP', sans-serif;`,
    fontSize: `${22 / 3.75}vw`,
    textAlign: `center`,
    color: colors.white,
    marginTop: `10vw`,
    marginLeft: `10px`,
    letterSpacing: `3vw`,
    borderBottom: `solid 1px `,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${33 / 19.2}vw`, letterSpacing: `2vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const pageIconLeft = style([
  //下のページ数アイコン左
  {
    fontSize: `${22 / 3.75}vw`,
    marginRight: `1vw`,
    position: `relative`,
    top: '1vw',
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `${22 / 19.2}vw`,
      marginRight: `1vw`,
      top: `0`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const pageIconRight = style([
  //下のページ数アイコン右
  {
    fontSize: `${22 / 3.75}vw`,
    position: `relative`,
    top: '1vw',
    marginLeft: `-0.25em`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${22 / 19.2}vw`, marginLeft: `-0.5em`, top: `0` },
    desktop1280: {},
    desktop1536: {},
  }),
]);
