import { style } from '@vanilla-extract/css';
import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { colors } from 'constants/styles/colors';

export const text = style([
  {
    fontFamily: `'Noto Sans JP', sans-serif;`,
    lineHeight: `1.5em`,
    letterSpacing: `0.1em`,
    fontWeight: 500,
    whiteSpace: `nowrap`,
    verticalAlign: `middle`,
    display: `inline-block`,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);
