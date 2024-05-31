import { style, keyframes } from '@vanilla-extract/css';

import { colors } from 'constants/styles/colors';
import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';

export const tdStyle = style([
  { fontSize: `${16 / 3.75}vw` },
  responsiveStyle({
    desktop1024: {
      padding: `${40 / 19.2}vw 0`,
      fontSize: `${16 / 19.2}vw`,
    },
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
