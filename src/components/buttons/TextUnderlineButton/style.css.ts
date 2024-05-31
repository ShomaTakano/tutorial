// import layer
import { style } from '@vanilla-extract/css';
import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { colors } from 'constants/styles/colors';

export const textStyle = style([
  {
    fontSize: `4.26vw`,
    lineHeight: `1em`,
    color: `white`,
    transition: `all 0.5s;`,
    position: `relative`,
    ':before': {
      content: "''",
      position: `absolute`,
      bottom: `-8px`,
      width: `calc(100%)`,
      height: `1px`,
      background: colors.white,
      transform: `scale(0,1)`,
      transformOrigin: `left top`,
    },
    ':hover': {
      cursor: `pointer`,
    },
    selectors: {
      '&:hover::before': {
        transition: `all .3s`,
        transform: `scale(1,1)`,
      },
    },
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `${22 / 19.2}vw`,
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
