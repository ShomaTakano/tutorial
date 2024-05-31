import { style } from '@vanilla-extract/css';

import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { colors } from 'constants/styles/colors';

export const containerStyle = style([
  {
    margin: `0 auto`,
    zIndex: 0,
    position: `relative`,
    padding: `${137 / 3.75}vw ${40 / 3.75}vw ${160 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: { transform: `translateY(-25%)`, padding: `initial` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const listStyle = style([
  { margin: `0 auto`, flexDirection: `column` },
  responsiveStyle({
    desktop1024: { flexDirection: `row` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const imageStyle = style([
  {
    mixBlendMode: `lighten`,
    selectors: {
      '&:not(:first-child)': {
        marginTop: `${40 / 3.75}vw`,
      },
    },
  },
  responsiveStyle({
    desktop1024: {
      width: `${480 / 19.2}vw`,
      overflow: `hidden`,
      transform: `scale(1)`,
      selectors: {
        '&:not(:first-child)': {
          marginTop: `initial`,
          marginLeft: `${36 / 19.2}vw`,
        },
      },
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const bigText = style([
  {
    position: `absolute`,
    color: colors.white,
    fontFamily: `Noto Sans JP`,
    fontWeight: `bold`,
    fontSize: `${22 / 3.75}vw`,
    margin: `-14.5vw 0 0 5.6vw`,
  },
  responsiveStyle({
    desktop1024: { margin: `-4.8vw 0 0 1.8vw`, fontSize: `${30 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);
export const smallText = style([
  {
    position: `absolute`,
    color: colors.white,
    fontFamily: `Noto Sans JP`,
    fontWeight: `bold`,
    fontSize: `${12 / 3.75}vw`,
    margin: `-6.8vw 0 0 5.6vw`,
  },
  responsiveStyle({
    desktop1024: { margin: `-2.2vw 0 0 1.9vw`, fontSize: `${12 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const hoverStyle = style([
  {
    ':hover': {
      cursor: `pointer`,
      opacity: `0.5`,
      transition: `0.3s`,
    },
  },
  responsiveStyle({
    desktop1024: {
      transition: `.3s ease-in-out`,
      position: `relative`,
      ':hover': {
        cursor: `pointer`,
        opacity: `1`,
        transform: `scale(1.3)`,
      },
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const image = style([
  { position: `relative` },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);
