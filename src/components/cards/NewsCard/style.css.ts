import { style } from '@vanilla-extract/css';

import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { colors } from 'constants/styles/colors';

export const titleStyle = style([
  {
    fontWeight: 700,
    fontSize: `${14 / 3.75}vw`,
    color: colors.white,
    lineHeight: `1.75em`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${24 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const cardBottom = style([
  {
    width: `100%`,
    display: `flex`,
    marginTop: `2.13vw`,
  },
  responsiveStyle({
    desktop1024: {
      marginTop: `${40 / 19.2}vw`,
      paddingRight: `${50 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const cardStyle = style([
  {
    zIndex: 1,
    position: `relative`,
    overflow: `hidden`,
    flexDirection: `column`,
    selectors: {
      '&:hover': {},
    },
  },
  responsiveStyle({
    desktop1024: {
      width: `100%`,
      justifyContent: `space-between`,
      flexDirection: `row`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const imageStyle = style([
  {
    width: `100%`,
    aspectRatio: `${302 / 208}`,
    // height: `${100 / 3.75}vw`,
    background: colors.white,
    // background: `#f0fff0`,
    position: `relative`,
  },
  responsiveStyle({
    desktop1024: {
      width: `${302 / 19.2}vw`,
      height: `${208 / 19.2}vw`,
      minWidth: `${302 / 19.2}vw`,
      marginRight: `${50 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const cardTop = style([
  {
    width: `100%`,
    fontSize: `${14 / 3.75}vw`,
    justifyContent: `space-between`,
    alignItems: `center`,
    color: colors.white,
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `${30 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const categoryStyle = style([
  {
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    lineHeight: `1em`,
    border: `1.25px solid #fff`,
    borderRadius: `30px`,
    color: colors.white,
    fontWeight: 400,
    padding: `${4 / 3.75}vw ${32 / 3.75}vw`,
    fontSize: `${14 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `${26 / 19.2}vw`,
      padding: `${4 / 19.2}vw ${46 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const cardRightStyle = style([
  {
    flexDirection: `column`,
    // justifyContent: `center`,
    // alignItems: `center`,
    width: `100%`,
    marginTop: `4.26vw`,
  },
  responsiveStyle({
    desktop1024: {
      width: `80%`,
      marginTop: `initial`,
      // width: `${830 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const defaultImageStyle = style([
  {
    width: `100%`,
    height: `80%`,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);
