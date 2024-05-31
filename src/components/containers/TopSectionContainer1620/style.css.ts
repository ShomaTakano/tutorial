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
    padding: `${137 / 3.75}vw 0vw ${160 / 3.75}vw`,
    paddingLeft: `${24 / 3.75}vw`,
    paddingRight: `${24 / 3.75}vw`,
    overflow: `hidden`,
  },
  responsiveStyle({
    desktop1024: {
      width: `${1620 / 19.2}vw`,
      padding: `${19.23 / 19.2}vw ${54 / 19.2}vw ${218 / 19.2}vw`,
      height: `auto`,
      overflow: `initial`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);
