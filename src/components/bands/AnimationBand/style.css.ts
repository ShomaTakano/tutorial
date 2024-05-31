// import layer
import { style } from '@vanilla-extract/css';
import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { colors } from 'constants/styles/colors';

export const ul = style([
  {
    height: `20vw`,
    display: `flex`,
    position: `relative`,
    width: `100vw`,
    listStyleType: `none`,
    alignItems: `center`,
    willChange: `transform`,
  },

  responsiveStyle({
    desktop1024: {
      height: `${200 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const container = style([
  {},
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);
