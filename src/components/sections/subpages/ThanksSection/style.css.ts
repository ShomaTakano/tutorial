import { style, keyframes } from '@vanilla-extract/css';

import { colors } from 'constants/styles/colors';
import {
  responsiveDesktop,
  calculateResponsiveDesktop,
  responsiveStyle,
} from 'styles/utils.css';

export const container = style([
  {
    margin: `0 auto`,
    padding: `${137 / 3.75}vw ${24 / 3.75}vw ${160 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      padding: `${130 / 19.2}vw 0vw ${218 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);
