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
    fontSize: `${24 / 3.75}vw`,
    // width: `65vw`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${40 / 19.2}vw`, margin: `unset` },
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

export const imgContainer = style([
  //画像部分の大きさ
  {
    width: `100vw`,
    height: `60vw`,
    marginLeft: `auto`,
    marginRight: `auto`,
    marginTop: `2vw`,
  },
  responsiveStyle({
    desktop1024: { width: `33vw`, height: `22vw` },
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
  //profile一番上の線入れる
  {
    margin: `${24 / 3.75}vw auto 0 0`,
    borderTop: `solid 1px #707070`,
    borderBottom: `solid 1px #707070`,
    display: `flex`,
    flexDirection: `row`,
    padding: `${6 / 3.75}vw 0`,
  },
  responsiveStyle({
    desktop1024: {
      marginTop: `3vw  `,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const profileContainer2 = style([
  //二つ目以降のやつ
  {
    borderBottom: `solid 1px #707070`,
    display: `flex`,
    flexDirection: `row`,
    padding: `${6 / 3.75}vw 0`,
  },
  responsiveStyle({
    desktop1024: { marginTop: `0` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const profileTitle = style([
  {
    padding: `${6 / 3.75}vw 0`,
    fontSize: `${11 / 3.75}vw`,
    lineHeight: `2`,
    width: `${50 / 3.75}vw`,
    display: `inline-block`,
    verticalAlign: `top`,
    whiteSpace: `nowrap`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${20 / 19.2}vw`, width: `${100 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const profileMain = style([
  {
    display: `inline-block`,
    padding: `${6 / 3.75}vw 0`,
    whiteSpace: `pre-wrap`,
    lineHeight: `2`,
    paddingLeft: `8vw`,
    fontSize: `${11 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${20 / 19.2}vw`, paddingLeft: `10vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const profileMain2 = style([
  {
    display: `inline-block`,
    paddingTop: `${6 / 3.75}vw`,
    paddingLeft: `11.5vw`,
    whiteSpace: `pre-wrap`,
    lineHeight: `2`,
    fontSize: `${11 / 3.75}vw`,
    verticalAlign: `text-top`,
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `${20 / 19.2}vw`,
      paddingRight: `${6 / 3.75}vw`,
      paddingLeft: `10.5vw`,
      paddingBottom: `${6 / 3.75}vw`,
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
