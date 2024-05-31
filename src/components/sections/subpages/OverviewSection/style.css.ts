import { style } from '@vanilla-extract/css';

import { colors } from 'constants/styles/colors';
import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';

export const container = style([
  {
    margin: `0 auto`,
    padding: `${56 / 3.75}vw ${24 / 3.75}vw ${80 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      width: `${600 / 10.24}vw`,
      margin: `${200 / 19.2}vw auto`,
      padding: `unset`,
    },
    desktop1280: {
      width: `${700 / 12.8}vw`,
    },
    desktop1536: {
      width: `${920 / 19.2}vw`,
    },
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
