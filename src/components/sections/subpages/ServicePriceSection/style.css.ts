import { style } from '@vanilla-extract/css';

import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';

export const PriceWarpper = style([
  {
    position: `relative`,
    fontFamily: `'Noto Sans JP', sans-serif;`,
    margin: `${40 / 3.75}vw ${20 / 3.75}vw ${60 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      display: `flex`,
      width: `${1286 / 19.2}vw`,
      margin: `${40 / 19.2}vw auto ${150 / 19.2}vw`,
      justifyContent: `space-between`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Card1 = style([
  {
    width: `100%`,
    padding: `${28 / 3.75}vw ${18 / 3.75}vw`,
    border: `1px solid #E5E5E5`,
    marginBottom: `${30 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      padding: `${37 / 19.2}vw ${20 / 19.2}vw`,
      width: `${391 / 19.2}vw`,
      marginBottom: `0`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Img = style([
  {
    width: `${30 / 3.75}vw`,
    marginRight: `${5 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      width: `${30 / 19.2}vw`,
      marginTop: `${5 / 19.2}vw`,
      marginRight: `${15 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const title = style([
  {
    whiteSpace: `pre-wrap`,
    lineHeight: `1.4em`,
    fontWeight: `bold`,
    width: `fit-content`,
    margin: `0 auto`,
    fontSize: `${30 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${46 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const SubTitle = style([
  {
    whiteSpace: `pre-wrap`,
    lineHeight: `1.4em`,
    width: `fit-content`,
    margin: `0 auto`,
    fontSize: `${16 / 3.75}vw`,
    marginTop: `${10 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${24 / 19.2}vw`, marginTop: `${21 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const TextArea = style([
  {
    display: `flex`,
    marginBottom: `${15 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: { marginBottom: `${23 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Text = style([
  {
    whiteSpace: `pre-wrap`,
    lineHeight: `1.8em`,
    fontSize: `${16 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${24 / 19.2}vw`, lineHeight: `1.4em` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const LineText = style([
  {
    width: `fit-content`,
    borderBottom: `1px solid #000000`,
    fontWeight: `bold`,
    marginBottom: `${15 / 3.75}vw`,
    fontSize: `${20 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${31 / 19.2}vw`, marginBottom: `${29 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Price = style([
  {
    width: `fit-content`,
    fontWeight: `500`,
    margin: `${11 / 3.75}vw 0 ${11 / 3.75}vw ${115 / 3.75}vw`,
    fontSize: `${50 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `${80 / 19.2}vw`,
      margin: `${11 / 19.2}vw 0 ${11 / 19.2}vw ${115 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Price2 = style([
  {
    width: `fit-content`,
    fontWeight: `500`,
    fontSize: `${50 / 3.75}vw`,
    margin: `${11 / 3.75}vw 0 ${11 / 3.75}vw ${130 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `${80 / 19.2}vw`,
      margin: `${11 / 19.2}vw 0 ${11 / 19.2}vw ${145 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const MinText = style([
  {
    whiteSpace: `pre-wrap`,
    lineHeight: `1.4em`,
    fontWeight: `400`,
    fontSize: `${16 / 3.75}vw`,
    marginLeft: `${10 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${31 / 19.2}vw`, marginLeft: `${10 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Border = style([
  {
    borderTop: `1px solid #E5E5E5`,
    width: `100%`,
  },
  responsiveStyle({
    desktop1024: { marginTop: `${50 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const ContactSub = style([
  {
    fontWeight: `bold`,
    width: `fit-content`,
    whiteSpace: `pre-wrap`,
    textAlign: `center`,
    margin: `${15 / 3.75}vw auto`,
    fontSize: `${18 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: { margin: `${45 / 19.2}vw auto`, fontSize: `${24 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Contact = style([
  {
    fontWeight: `bold`,
    width: `fit-content`,
    textAlign: `center`,
    margin: `0 auto`,
    backgroundColor: `#272626`,
    color: `#FFFFFF`,
    fontSize: `${16 / 3.75}vw`,
    padding: `${18 / 3.75}vw ${65 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `${28 / 19.2}vw`,
      padding: `${21 / 19.2}vw ${29 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);
