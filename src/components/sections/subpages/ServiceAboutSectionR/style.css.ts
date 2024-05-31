import { style } from '@vanilla-extract/css';

import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { colors } from 'constants/styles/colors';

export const container1320Style = style([
  {
    margin: `0 auto`,
    padding: `${10 / 3.75}vw ${40 / 3.75}vw ${50 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      margin: `${50 / 19.2}vw auto ${70 / 19.2}vw`,
      padding: `unset`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const blogArea = style([
  //ブログ部分のエリア
  {
    width: `100%`,
    marginTop: `10vw`,
  },
  responsiveStyle({
    desktop1024: {
      display: `Flex`,
      width: `100%`,
      marginTop: `6vw`,
      marginBottom: `6vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const SblogContainer = style([
  {
    flexDirection: `column`,
    marginBottom: `25px`,
    width: `100%`,
    display: `none`,
  },
  responsiveStyle({
    desktop1024: {
      width: `${517 / 13.2}vw`,
      display: `block`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const BblogContainer = style([
  {
    flexDirection: `column`,
    marginBottom: `25px`,
    width: `100%`,
    display: `none`,
  },
  responsiveStyle({
    desktop1024: {
      width: `${773 / 13.2}vw`,
      height: `auto`,
      marginRight: `${67 / 13.2}vw`,
      display: `block`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const SMblogContainer = style([
  {
    flexDirection: `column`,
    marginBottom: `25px`,
    width: `100%`,
  },
  responsiveStyle({
    desktop1024: {
      width: `${517 / 13.2}vw`,
      display: `none`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const BMblogContainer = style([
  {
    flexDirection: `column`,
    marginBottom: `25px`,
    width: `100%`,
  },
  responsiveStyle({
    desktop1024: {
      width: `${773 / 13.2}vw`,
      height: `auto`,
      marginRight: `${67 / 13.2}vw`,
      display: `none`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const imgContainer = style([
  //画像部分の大きさ
  { width: `100vw`, height: `auto` },
  responsiveStyle({
    desktop1024: {
      width: `auto`,
      height: `auto`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);
