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
    desktop1024: { width: `${920 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);
