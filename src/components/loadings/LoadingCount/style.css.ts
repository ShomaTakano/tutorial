import { style } from '@vanilla-extract/css';
import { calculateSizesBy2xl } from 'lib/theme/utils';
import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { colors } from 'constants/styles/colors';

export const loadingnow = style([
  {
    fontSize: `4.26vw`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${33 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const loadingcount = style([
  {
    fontSize: `4.26vw`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${58 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const loadingsmall = style([
  {
    fontSize: `2.13vw`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${38 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);
