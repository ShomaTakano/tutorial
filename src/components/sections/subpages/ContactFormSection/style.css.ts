import { style, keyframes } from '@vanilla-extract/css';

import { colors } from 'constants/styles/colors';
import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { boxShadow } from 'styles/basic.css';
import { textDecoration } from '@chakra-ui/react';

export const container = style([
  boxShadow,
  {
    background: colors.white,
    padding: `${56 / 3.75}vw ${22 / 3.75}vw ${90 / 3.75}vw`,
    borderRadius: `${20 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      borderRadius: `${40 / 19.2}vw`,
      padding: `${95 / 19.2}vw ${24 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const linkStyle = style([
  {
    // color: `blue`,
    textDecoration: `underline`,
  },
  responsiveStyle({
    desktop1024: {},
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
