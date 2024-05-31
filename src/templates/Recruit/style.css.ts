import { style, keyframes } from '@vanilla-extract/css';

import { colors } from 'constants/styles/colors';
import { text } from '../../components/forms/ShortTextForm/style.css';

import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';

export const container1320Style = style([
  {
    margin: `0 auto`,
    padding: `${137 / 3.75}vw ${40 / 3.75}vw ${160 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      margin: `${200 / 19.2}vw auto`,
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

export const missionStyle = style([
  {
    whiteSpace: `pre-wrap`,
    margin: `${48 / 3.75}vw auto 0`,
    fontSize: `${23 / 3.75}vw`,
    // width: `65vw`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${39 / 19.2}vw`, margin: `unset` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const BoldStyle = style([
  //一部部分をボールド化するために使う
  {
    fontWeight: 'bold',
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const missionDescStyle = style([
  {
    whiteSpace: `pre-wrap`,
    lineHeight: `2em`,
    fontSize: `${14 / 3.75}vw`,
    marginTop: `${32 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: { marginTop: `${104 / 19.2}vw`, fontSize: `${20 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const occupationArea = style([
  //ブログ部分のエリア
  {
    width: `100%`,
    marginTop: `10vw`,
  },
  responsiveStyle({
    desktop1024: {
      display: `Flex`,
      width: `100%`,
      height: `333px`,
      marginTop: `6vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const occupationContainer = style([
  {
    flexDirection: `column`,
    marginBottom: `9vw`,
    width: `100%`,
    textAlign: `left`,
  },
  responsiveStyle({
    desktop1024: { width: `22.2vw`, height: `333px`, marginLeft: `1.5vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const imgContainer = style([
  //画像部分の大きさ
  { width: `100vw`, height: `41vw`, backgroundColor: colors.white },
  responsiveStyle({
    desktop1024: { width: `100vw`, height: `11.6vw` },
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

export const occupationTitle = style([
  //ブログタイトル
  {
    fontFamily: `'Noto Sans JP', sans-serif;`,
    fontSize: `${14 / 3.75}vw`,
    fontWeight: `bold`,
    color: colors.white,
    display: `inline-block`,
    marginTop: `5vw`,
  },
  responsiveStyle({
    desktop1024: {
      fontFamily: `'Noto Sans JP', sans-serif;`,
      fontSize: `${25 / 19.2}vw`,
      fontWeight: `bold`,
      color: colors.white,
      display: `inline-block`,
      marginTop: `1vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const valueStyle = style([
  {
    color: colors.white,
    whiteSpace: `pre-wrap`,
    margin: `${48 / 3.75}vw auto 0`,
    fontSize: `${24 / 3.75}vw`,
    fontWeight: 'bold',
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `${48 / 19.2}vw`,
      lineHeight: `1em`,
      margin: `unset`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const valueDescStyle = style([
  {
    whiteSpace: `pre-wrap`,
    lineHeight: `2em`,
    marginTop: `${10 / 3.75}vw`,
    fontSize: `${14 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: { marginTop: `${50 / 19.2}vw`, fontSize: `${20 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const profileContainer = style([
  //profile一番上の線
  {
    margin: `${48 / 3.75}vw auto 0`,
    borderTop: `solid 1px #707070`,
  },
  responsiveStyle({
    desktop1024: { marginTop: `3vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const profileTitle = style([
  {
    padding: `${12 / 3.75}vw 0`,
    borderBottom: `1px solid #707070`,
    fontSize: `${11 / 3.75}vw`,
    lineHeight: `2`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${200 / 192}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const profileMain = style([
  {
    marginLeft: `5vw`,
    marginTop: `0.05em`,
    fontSize: `${11 / 3.75}vw`,
    display: `inline-block`,
    verticalAlign: `top`,
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `${200 / 192}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const marginTopStyle = style([
  {},
  responsiveStyle({
    desktop1024: { marginTop: `${80 / 19.2}vw` },
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
