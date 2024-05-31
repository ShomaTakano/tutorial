// import layer
import { style } from '@vanilla-extract/css';
import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { colors } from 'constants/styles/colors';

export const buttonStyle = style([
  {
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
    outline: 'none',
    border: 0,
    verticalAlign: 'middle',
    textDecoration: 'none',

    background: 'transparent',
    padding: 0,
    fontSize: 'inherit',
    fontFamily: 'inherit',
  },
  responsiveStyle({
    desktop1024: {},
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
