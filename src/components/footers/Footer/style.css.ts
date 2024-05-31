import { style } from '@vanilla-extract/css';

import { responsiveStyle, calculateResponsiveDesktop } from 'styles/utils.css';

export const container = style([
  { color: `#fff` },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const whiteText = style([
  { color: `#fff` },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const logoSize = style([
  { color: `#fff` },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
  calculateResponsiveDesktop('fontSize', { desktop1536: 2 }),
]);
