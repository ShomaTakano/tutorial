import { style } from '@vanilla-extract/css';

import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { colors } from 'constants/styles/colors';

export const container = style([
  { padding: `0 ${24 / 3.75}vw` },
  responsiveStyle({
    desktop1024: { padding: `unset` },
    desktop1280: {},
    desktop1536: {},
  }),
]);
