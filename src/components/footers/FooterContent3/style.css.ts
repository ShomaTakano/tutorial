import { style } from '@vanilla-extract/css';

import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';

import { colors } from 'constants/styles/colors';

export const navName = style([
  { fontSize: `${14 / 3.75}vw`, ':hover': { cursor: `pointer` } },
  responsiveStyle({
    desktop1024: { fontSize: `${16 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);
