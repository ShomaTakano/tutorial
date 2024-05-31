import { style, keyframes } from '@vanilla-extract/css';

import { colors } from 'constants/styles/colors';

import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';

export const blogContainer = style([
  {
    flexDirection: `column`,
    marginBottom: `${28 / 3.75}vw`,
    width: `100%`,
  },
  responsiveStyle({
    desktop1024: {
      width: `22.2vw`,
      marginBottom: `${50 / 19.2}vw`,
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

export const imgContainer = style([
  //画像部分の大きさ
  {
    width: `100%`,
    aspectRatio: `${302 / 208}`,
    background: colors.white,
    position: `relative`,
  },
  responsiveStyle({
    desktop1024: { width: `${427 / 19.2}vw`, height: `${216 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Category = style([
  //カテゴリ(囲まれた文字部分)
  {
    fontFamily: `'Noto Sans JP', sans-serif;`,
    fontSize: `${14 / 3.75}vw`,
    fontWeight: 500,
    color: colors.white,
    border: `1px solid `,
    borderRadius: `${30 / 3.75}vw`,
    padding: `${1 / 3.75}vw ${20 / 3.75}vw`,
    display: `inline-block`,
    flexDirection: `row`,
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `${17 / 19.2}vw`,
      padding: `${1 / 19.2}vw ${20 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const dateStyle = style([
  //日付
  {
    fontFamily: `'Noto Sans JP', sans-serif;`,
    fontSize: `${14 / 3.75}vw`,
    fontWeight: 500,
    color: colors.white,
    letterSpacing: `0.1em`,
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `${18 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const blogTitle = style([
  //ブログタイトル
  {
    fontFamily: `'Noto Sans JP', sans-serif;`,
    fontSize: `${14 / 3.75}vw`,
    fontWeight: `bold`,
    lineHeight: `1.75em`,
    color: colors.white,
    paddingBottom: `${28 / 3.75}vw`,
    borderBottom: `1px solid #707070`,
  },
  responsiveStyle({
    desktop1024: {
      fontFamily: `'Noto Sans JP', sans-serif;`,
      fontSize: `${25 / 19.2}vw`,
      fontWeight: `bold`,
      color: colors.white,
      display: `inline-block`,
      paddingBottom: `initial`,
      borderBottom: `0px`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);
