// import layer
import { style } from '@vanilla-extract/css';
import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { colors } from 'constants/styles/colors';

export const containerStyle = style([
  {
    justifyContent: `center`,
    alignItems: `center`,
    width: `100%`,
    padding: `${60 / 3.75}vw ${40 / 3.75}vw ${60 / 3.75}vw`,
    background: colors.bgBlack,
  },
  responsiveStyle({
    desktop1024: { padding: `${180 / 19.2}vw 0 ${150 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const messageStyle = style([
  {
    color: colors.backgroundSectionGray,
    transition: `all .3s`,
    whiteSpace: `pre-wrap`,
    fontSize: `${20 / 3.75}vw`,
    ':hover': { opacity: `50%`, cursor: `pointer` },
  },
  responsiveStyle({
    desktop1024: { fontSize: `${60 / 19.2}vw`, whiteSpace: `initial` },
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
