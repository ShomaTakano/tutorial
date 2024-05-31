import { style } from '@vanilla-extract/css';

import { colors } from 'constants/styles/colors';

import { responsiveStyle } from 'styles/utils.css';

export const container1320Style = style([
  {
    margin: `0 auto`,
    padding: `${100 / 3.75}vw ${40 / 3.75}vw ${160 / 3.75}vw`,
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

export const FirstSentence = style([
  {
    whiteSpace: `pre-wrap`,
    lineHeight: `2em`,
    fontSize: `${12 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${24 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const listStyle = style([
  {
    display: `flex`,
    flexDirection: `column`,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const h2Style = style([
  {
    marginTop: `20vw`,
    fontSize: `${24 / 3.75}vw`,
    lineHeight: `1.2em`,
    fontWeight: `bold`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${40 / 19.2}vw`, marginTop: `5vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const stateStyle = style([
  {
    fontSize: `${12 / 3.75}vw`,
    lineHeight: `2em`,
    letterSpacing: `0.2em`,
    whiteSpace: `pre-wrap`,
  },
  responsiveStyle({
    desktop1024: {
      letterSpacing: `0.2em`,
      fontSize: `${24 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const stateMarginStyle = style([
  {
    margin: `5vw 0`,
  },
  responsiveStyle({
    desktop1024: {
      margin: `2vw 0`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const stateItemStyle = style([
  {
    fontSize: `${12 / 3.75}vw`,
    lineHeight: `1.75em`,
    letterSpacing: `0.2em`,
    whiteSpace: `pre-wrap`,
    paddingLeft: `2.25em`,
    textIndent: `-1em`,
  },
  responsiveStyle({
    desktop1024: {
      letterSpacing: `0.2em`,
      fontSize: `${24 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const addressStyle = style([
  {
    marginTop: `5vw`,
    fontSize: `${12 / 3.75}vw`,
    lineHeight: `2em`,
    letterSpacing: `0.2em`,
    whiteSpace: `pre-wrap`,
  },
  responsiveStyle({
    desktop1024: { letterSpacing: `0.2em`, fontSize: `${24 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const dateStyle = style([
  {
    textAlign: `right`,
    fontSize: `${12 / 3.75}vw`,
    lineHeight: `2em`,
    letterSpacing: `0.2em`,
  },
  responsiveStyle({
    desktop1024: { letterSpacing: `0.2em`, fontSize: `${24 / 19.2}vw` },
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
