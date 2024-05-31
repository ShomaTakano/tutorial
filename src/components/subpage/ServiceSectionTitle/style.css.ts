import { style, keyframes } from '@vanilla-extract/css';

import { colors } from 'constants/styles/colors';
import {
  responsiveDesktop,
  calculateResponsiveDesktop,
  responsiveStyle,
} from 'styles/utils.css';

export const TitleWrapper = style([
  {
    margin: `0 auto`,
    width: `fit-content`,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const maintext = style([
  {
    fontFamily: `Noto Sans JP`,
    lineHeight: `1.8em`,
    fontSize: `${24 / 3.75}vw`,
    fontWeight: `1000`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${48 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const linetext = style([
  {
    fontWeight: `bold`,
    textAlign: `center`,
    color: `#00100E`,
    opacity: `0.32`,
    fontFamily: `Noto Sans JP`,
    lineHeight: `1.8em`,
    fontSize: `${12 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `${20 / 19.2}vw`,
      // marginBottom: `${37 / 19.2}vw`
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);
