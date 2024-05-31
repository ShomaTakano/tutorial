import { style, keyframes } from '@vanilla-extract/css';

import { colors } from 'constants/styles/colors';

import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';

export const container1320Style = style([
  {
    margin: `0 auto`,
    padding: `${137 / 3.75}vw ${40 / 3.75}vw ${160 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      margin: `${200 / 19.2}vw auto`,
      padding: `unset`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const h1Style = style([
  {
    textAlign: `center`,
    marginTop: `10vw`,
    fontSize: `${30 / 3.75}vw`,
    fontWeight: `bold`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${70 / 19.2}vw`, marginTop: `20vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const massageStyle = style([
  {
    textAlign: `center`,
    marginTop: `8vw`,
    fontSize: `${10 / 3.75}vw`,
    whiteSpace: `pre-wrap`,
    lineHeight: `5vw`,
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `${20 / 19.2}vw`,
      marginTop: `5vw`,
      lineHeight: `2vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const contactWrapper = style([
  {
    display: `inline-block`,
    backgroundColor: `#000000`,
    fontWeight: `bold`,
    color: colors.white,
    position: `relative`,
    width: `${150 / 3.75}vw`,
    height: `${25 / 3.75}vw`,
    lineHeight: `${25 / 3.75}vw`,
    fontSize: `${10 / 3.75}vw`,
    marginLeft: `${70 / 3.75}vw`,
    marginTop: `5vw`,
  },
  responsiveStyle({
    desktop1024: {
      width: `${428 / 19.2}vw`,
      height: `${97 / 19.2}vw`,
      lineHeight: `${97 / 19.2}vw`,
      fontSize: `${32 / 19.2}vw`,
      marginLeft: `${450 / 19.2}vw`,
      marginTop: `5vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Boxtext = style([
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

export const Style = style([
  {},
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);
