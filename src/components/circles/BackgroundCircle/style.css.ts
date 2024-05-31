// import layer
import { style } from '@vanilla-extract/css';
import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { colors } from 'constants/styles/colors';

export const backgroundCircle = style([
  {
    background: colors.backgroundCircle,
    borderRadius: `50%`,
    position: `absolute`,
    top: `50%`,
    left: `-50%`,
    transform: `translate(0%, -50%)`,
  },
  responsiveStyle({
    desktop1024: {
      width: `${2247 / 19.2}vw`,
      height: `${2247 / 19.2}vw`,
    },
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
