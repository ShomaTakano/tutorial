import { style } from '@vanilla-extract/css';

import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';

export const CaseWarpper = style([
  {
    position: `relative`,
    backgroundColor: `#F7F8F8`,
    fontFamily: `'Noto Sans JP', sans-serif;`,
    margin: `${40 / 3.75}vw ${20 / 3.75}vw ${90 / 3.75}vw`,
    padding: `${32 / 3.75}vw ${20 / 3.75}vw ${32 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      display: `flex`,
      width: `${1286 / 19.2}vw`,
      margin: `${32 / 19.2}vw auto ${150 / 19.2}vw`,
      padding: `${65 / 19.2}vw ${100 / 19.2}vw ${5 / 19.2}vw`,
      justifyContent: `space-between`,
      flexWrap: `wrap`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Card1 = style([
  {},
  responsiveStyle({
    desktop1024: {
      marginBottom: `${60 / 19.2}vw`,
      width: `${518 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Card2 = style([
  {},
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Img = style([
  {
    width: `100%`,
    marginBottom: `${20 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: { width: `${518 / 19.2}vw`, marginBottom: `${22 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const title = style([
  {
    whiteSpace: `pre-wrap`,
    lineHeight: `1.5em`,
    fontWeight: `bold`,
    marginBottom: `${10 / 3.75}vw`,
    fontSize: `${16 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${26 / 19.2}vw`, marginBottom: `0` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const TextArea = style([
  {
    whiteSpace: `pre-wrap`,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Text = style([
  {
    whiteSpace: `pre-wrap`,
    lineHeight: `1.4em`,
    // fontWeight: `500`,
    fontSize: `${13 / 3.75}vw`,
    marginBottom: `${10 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${20 / 19.2}vw`, marginBottom: `0` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const TagsArea = style([
  {
    display: `flex`,
    marginBottom: `${32 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: { marginBottom: `0` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Tags = style([
  {
    width: `fit-content`,
    borderColor: `rgba(0 95 110 / 20%)`,
    color: `#005F6E`,
    fontWeight: `bold`,
    border: `1px solid`,
    borderRadius: `${23 / 3.75}vw`,
    fontSize: `${11 / 3.75}vw`,
    padding: `0 ${10 / 3.75}vw 0`,
  },
  responsiveStyle({
    desktop1024: {
      padding: `0 ${25 / 19.2}vw 0`,
      borderRadius: `${23 / 19.2}vw`,
      fontSize: `${17 / 19.2}vw`,
      margin: `${15 / 19.2}vw 0`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);
