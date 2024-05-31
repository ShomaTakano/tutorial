import { style, keyframes } from '@vanilla-extract/css';

import { colors } from 'constants/styles/colors';
import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';

export const sectionMargin = style([
  {
    margin: `${160 / 3.75}vw auto`,
  },
  responsiveStyle({
    desktop1024: {
      margin: `${200 / 19.2}vw auto`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const container1620Style = style([
  {
    height: `140vw`,
  },
  responsiveStyle({
    desktop1024: { height: `unset` },
    desktop1280: {},
    desktop1536: {},
  }),
  sectionMargin,
]);

export const Style = style([
  {},
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);
