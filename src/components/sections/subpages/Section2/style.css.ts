import { style, keyframes } from '@vanilla-extract/css';

import { colors } from 'constants/styles/colors';
import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';

export const subTitleStyle = style([
  {
    paddingTop: `0.25rem`,
    fontSize: `4.75vw`,
    paddingBottom: `7.6vw`,
    lineHeight: `1em`,
    fontWeight: 700,
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `0.95rem`,
      paddingBottom: `1.75rem`,
      lineHeight: 1.625,
    },
    desktop1280: { fontSize: `1rem` },
    desktop1536: { fontSize: `1.125rem` },
  }),
]);

export const contentContainer = style([
  {},
  responsiveStyle({
    desktop1024: { width: `63%` },
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
