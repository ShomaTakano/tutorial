// import layer
import { style } from '@vanilla-extract/css';
import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { colors } from 'constants/styles/colors';

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

export const Style = style([
  {},
  responsiveStyle({
    desktop1024: {},
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
