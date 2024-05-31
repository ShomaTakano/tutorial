import { style } from '@vanilla-extract/css';

import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';

import { colors } from 'constants/styles/colors';

export const logo = style([
  {},
  responsiveStyle({
    desktop1024: { width: `${240 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const copyright = style([
  { fontSize: `${10 / 3.75}vw`, },
  responsiveStyle({
    desktop1024: { fontSize: `${12 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);
