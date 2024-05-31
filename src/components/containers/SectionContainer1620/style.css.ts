import { style, keyframes } from '@vanilla-extract/css';

import { colors } from 'constants/styles/colors';
import {
  responsiveDesktop,
  calculateResponsiveDesktop,
  responsiveStyle,
} from 'styles/utils.css';

export const container = style([
  { zIndex: 2 },
  responsiveStyle({
    desktop1024: { width: `${1620 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);
