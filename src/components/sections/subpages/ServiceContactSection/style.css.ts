import { style, keyframes } from '@vanilla-extract/css';

import { colors } from 'constants/styles/colors';
import {
  responsiveDesktop,
  calculateResponsiveDesktop,
  responsiveStyle,
} from 'styles/utils.css';

export const container = style([
  {},
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const container1320Style = style([
  {
    margin: `0 auto`,
    padding: `${10 / 3.75}vw ${40 / 3.75}vw ${50 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      margin: `${50 / 19.2}vw auto ${0 / 19.2}vw`,
      padding: `unset`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const hoverStyle = style([
  {},
  responsiveStyle({
    desktop1024: {
      ':hover': {
        cursor: `pointer`,
        opacity: `0.5`,
        transition: `0.3s`,
      },
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const boldStyle = style([
  {
    fontFamily: `Noto Sans JP`,
    textAlign: `center`,
    fontWeight: `bold`,
    marginTop: `15vw`,
    marginBottom: `1vw`,
    fontSize: `${25 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `${58 / 19.2}vw`,
      marginTop: `12vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const contactWrapper = style([
  {
    backgroundColor: colors.bgBlack,
    fontWeight: `bold`,
    color: colors.white,
    margin: `0 auto`,
    marginBottom: `10vw`,
    position: `relative`,
    width: `${150 / 3.75}vw`,
    height: `${25 / 3.75}vw`,
    lineHeight: `${25 / 3.75}vw`,
    fontSize: `${10 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      width: `${428 / 19.2}vw`,
      height: `${97 / 19.2}vw`,
      lineHeight: `${97 / 19.2}vw`,
      fontSize: `${32 / 19.2}vw`,
      marginBottom: `15vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const text = style([
  {
    fontFamily: `Noto Sans JP`,
    textAlign: `center`,

    letterSpacing: `0.3vw`,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);
