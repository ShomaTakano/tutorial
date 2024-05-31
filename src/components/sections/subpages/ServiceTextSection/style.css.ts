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

export const containerStyle = style([
  {
    margin: `${30 / 3.75}vw auto ${60 / 3.75}vw`,
    padding: `0 ${20 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      margin: `${50 / 19.2}vw auto ${0 / 19.2}vw`,
      width: `${1180 / 19.2}vw`,
      padding: `0`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const maintext = style([
  {
    fontFamily: `Noto Sans JP`,
    paddingTop: `3vw`,
    lineHeight: `1.6em`,
    letterSpacing: `0.11vw`,
    fontSize: `${22 / 3.75}vw`,
    whiteSpace: `pre-wrap`,
    fontWeight: `bold`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${40 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const linetext = style([
  {
    fontFamily: `Noto Sans JP`,
    paddingTop: `4vw`,
    lineHeight: `1.8em`,
    fontSize: `${13 / 3.75}vw`,
    whiteSpace: `pre-wrap`,
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `${16 / 19.2}vw`,
      paddingTop: `${37 / 19.2}vw`,
      lineHeight: `2em`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);
