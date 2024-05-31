import { style } from '@vanilla-extract/css';

import { responsiveStyle } from 'styles/utils.css';

export const container = style([
  { position: `relative` },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);
