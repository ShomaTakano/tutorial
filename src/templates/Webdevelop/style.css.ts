import { style, keyframes } from '@vanilla-extract/css';

import { colors } from 'constants/styles/colors';
import { height } from '../../constants/styles/sizesAd';
import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';

export const container1420Style = style([
  {
    margin: `0 auto`,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const h2Wrapper = style([
  {
    marginTop: `8vw`,
    backgroundColor: colors.backgroundSectionGray,
    fontWeight: `bold`,
    color: colors.white,
    width: `${200 / 3.75}vw`,
    height: `${30 / 3.75}vw`,
    fontSize: `${15 / 3.75}vw`,
    lineHeight: `${30 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      width: `${567 / 19.2}vw`,
      height: `${66 / 19.2}vw`,
      lineHeight: `${66 / 19.2}vw`,
      fontSize: `${33 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const h2 = style([
  {
    fontFamily: `Noto Sans JP`,
    textAlign: `center`,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const planStyle = style([
  {
    margin: `0 auto`,
    width: `${350 / 3.75}vw`,
    fontFamily: `Noto Sans JP`,
    fontSize: `${10 / 3.75}vw`,
    whiteSpace: `pre-wrap`,
  },
  responsiveStyle({
    desktop1024: { width: `${1217 / 19.2}vw`, fontSize: `${25 / 19.2}vw` },
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
