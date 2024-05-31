import { style } from '@vanilla-extract/css';

import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { colors } from 'constants/styles/colors';

export const StorongWarpper = style([
  {
    position: `relative`,
    backgroundColor: `#F7F8F8`,
    fontFamily: `'Noto Sans JP', sans-serif;`,
    margin: `${40 / 3.75}vw ${20 / 3.75}vw ${90 / 3.75}vw`,
    padding: `${40 / 3.75}vw ${24 / 3.75}vw ${0 / 3.75}vw `,
  },
  responsiveStyle({
    desktop1024: {
      width: `${1286 / 19.2}vw`,
      margin: `${32 / 19.2}vw auto ${150 / 19.2}vw`,
      padding: `${120 / 19.2}vw `,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Card1 = style([
  {
    display: `flex`,
    flexDirection: `column-reverse`,
  },
  responsiveStyle({
    desktop1024: { marginBottom: `${80 / 19.2}vw`, flexDirection: `row` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Card2 = style([
  {
    display: `flex`,
    flexDirection: `column-reverse`,
  },
  responsiveStyle({
    desktop1024: { flexDirection: `row` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Img = style([
  {
    width: `${295 / 3.75}vw`,
    marginTop: `${8 / 3.75}vw`,
    marginBottom: `${40 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      marginTop: `0`,
      marginBottom: `0`,
      width: `${460 / 19.2}vw`,
      marginRight: `${80 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const title = style([
  {
    whiteSpace: `pre-wrap`,
    lineHeight: `1.7em`,
    fontWeight: `bold`,
    fontSize: `${16 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${25 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const TextArea = style([
  {
    whiteSpace: `pre-wrap`,
  },
  responsiveStyle({
    desktop1024: { width: `${486 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Tags = style([
  {
    width: `fit-content`,
    backgroundColor: `rgba(0 16 14 / 6%)`,
    color: `rgba(0 16 14 / 56%)`,
    fontWeight: `bold`,
    borderRadius: `${43 / 3.75}vw`,
    fontSize: `${10 / 3.75}vw`,
    padding: `0 ${8 / 3.75}vw 0`,
    lineHeight: `2.3em`,
    margin: `${8 / 3.75}vw 0 ${15 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      padding: `0 ${10 / 19.2}vw 0`,
      borderRadius: `${43 / 19.2}vw`,
      fontSize: `${12 / 19.2}vw`,
      margin: `${8 / 19.2}vw 0 ${15 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Text = style([
  {
    whiteSpace: `pre-wrap`,
    lineHeight: `1.6em`,
    fontWeight: `500`,
    fontSize: `${14 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${17 / 19.2}vw`, lineHeight: `2em` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Fake = style([
  {
    margin: `${40 / 19.2}vw auto ${150 / 19.2}vw`,
    width: `${1286 / 19.2}vw`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${17 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);
