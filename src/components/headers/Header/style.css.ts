// import layer
import { style } from '@vanilla-extract/css';
import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { colors } from 'constants/styles/colors';
import { boxShadow } from 'styles/basic.css';
import { background } from '@chakra-ui/react';

export const container = style([
  // boxShadow,
  {
    width: `100%`,
    justifyContent: `space-between`,
    alignItems: `center`,
    padding: `2.13vw 4.26vw`,
    transition: `all .3s`,
    background: colors.bgBlack,
    position: `fixed`,
    zIndex: 11,
    top: 0,
    height: `${66 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      padding: `${32 / 19.2}vw ${70 / 19.2}vw`,
      height: `auto`,
      // maxHeight: `${80 / 16}rem`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const logoWrapperStyle = style([
  { justifyContent: `center`, alignItems: `center`, width: `fit-content` },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const logoStyle = style([
  {
    position: `relative`,
    width: `${134 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: { width: `${290 / 19.2}vw` },
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
