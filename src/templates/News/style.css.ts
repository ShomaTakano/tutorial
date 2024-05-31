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

export const container1320Style = style([
  {
    margin: `0 auto`,
    padding: `${137 / 3.75}vw ${40 / 3.75}vw ${25 / 3.75}vw ${40 / 3.75}vw `,
  },
  responsiveStyle({
    desktop1024: {
      margin: `${200 / 19.2}vw auto ${110 / 19.2}vw auto `,
      padding: `unset`,
    },
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
    desktop1024: { display: `flex`, paddingLeft: `45vw` },
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

export const page = style([
  //下のページ数部分
  {
    fontFamily: `'Noto Sans JP', sans-serif;`,
    fontSize: `${22 / 3.75}vw`,
    textAlign: `center`,
    marginBottom: `5vw`,
    color: colors.white,
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

export const Style = style([
  {},
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);
