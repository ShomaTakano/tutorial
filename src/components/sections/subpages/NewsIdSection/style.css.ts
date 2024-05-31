import { style, keyframes } from '@vanilla-extract/css';

import { colors } from 'constants/styles/colors';
import {
  responsiveDesktop,
  calculateResponsiveDesktop,
  responsiveStyle,
} from 'styles/utils.css';

export const container = style([
  {},
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const container1320Style = style([
  {
    margin: `0 auto`,
    padding: `${10 / 3.75}vw ${40 / 3.75}vw ${50 / 3.75}vw`,
    fontFamily: `'Noto Sans JP', sans-serif;`,
  },
  responsiveStyle({
    desktop1024: {
      margin: `${50 / 19.2}vw auto ${300 / 19.2}vw`,
      padding: `unset`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const img = style([
  //画像部分の大きさ
  { width: `100%`, height: `100%` },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);
export const contentStyle = style([
  {
    paddingTop: `3vw`,
    fontSize: `${14 / 3.75}vw`,
    lineHeight: `2`,
    letterSpacing: `0.15vw`,
    whiteSpace: `pre-wrap`,
    fontFamily: `'Noto Sans JP', sans-serif;`,
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `${16 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);
