import { style, keyframes } from '@vanilla-extract/css';

import { colors } from 'constants/styles/colors';
import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { boxShadow } from 'styles/basic.css';

import {
  titleContainer,
  h2,
  h2Sub,
  h2Wrapper,
} from 'components/sections/AboutSection/style.css';

export const icon = style([
  {
    position: `absolute`,
    width: `${60 / 3.75}vw`,
    height: `${60 / 3.75}vw`,
    top: `-7vw`,
    left: `-7vw`,
    zIndex: -1,
  },
  responsiveStyle({
    desktop1024: {
      width: `${80 / 19.2}vw`,
      height: `${80 / 19.2}vw`,
      top: `-${35 / 19.2}vw`,
      left: `-${51 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const circle = style([
  boxShadow,
  {
    borderRadius: `50%`,
    background: colors.white,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    flexDirection: `column`,
    zIndex: 5,
    width: `${120}vw`,
    height: `${120}vw`,
    position: `absolute`,
    top: 0,
    left: `50%`,
    transform: `translate(-50%, 0%)`,
  },
  responsiveStyle({
    desktop1024: {
      position: `relative`,
      transform: `initial`,
      left: `unset`,
      top: `unset`,
      width: `${980 / 19.2}vw`,
      height: `${980 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const desc = style([
  {
    maxWidth: `${550 / 16}rem`,
    overflowWrap: `break-word`,
    whiteSpace: `pre-wrap`,
  },
  responsiveStyle({
    desktop1024: {
      marginTop: `${30 / 19.2}vw`,
      fontSize: `${18 / 19.2}vw`,
      width: `${550 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
  // calculateResponsiveDesktop('fontSize', { desktop1536: 18 / 16 }),
  // calculateResponsiveDesktop('marginTop', { desktop1536: 30 / 16 }),
]);

export const h2CircleWrapper = style([
  h2Wrapper,
  {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `flex-end`,
    lineHeight: `1em`,
  },
  responsiveStyle({
    desktop1024: {
      position: `initial`,
      flexDirection: `column`,
      alignItems: `flex-start`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const h2Circle = style([
  h2,
  {
    lineHeight: `1em`,
    paddingRight: `${18 / 3.75}vw`,
    color: colors.textBlack,
  },
  responsiveStyle({
    desktop1024: {
      lineHeight: `1.5em`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const descCircle = style([
  {
    fontSize: `${14 / 3.75}vw`,
    marginTop: `${24 / 3.75}vw`,
    lineHeight: `2em`,
    width: `${286 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const buttonWrapper = style([
  {
    width: `100%`,
    display: `flex`,
    justifyContent: `flex-end`,
    marginTop: `${6.4}vw`,
  },
  responsiveStyle({
    desktop1024: { marginTop: `${50 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);
