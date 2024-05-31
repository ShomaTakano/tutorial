// import layer
import { style } from '@vanilla-extract/css';
import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { colors } from 'constants/styles/colors';

export const BoldStyle = style([
  //一部部分をボールド化するために使う
  {
    fontWeight: 'bold',
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const missionStyle = style([
  {
    whiteSpace: `pre-wrap`,
    margin: `${48 / 3.75}vw auto 0`,
    fontSize: `${24 / 3.75}vw`,
    // width: `65vw`,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${40 / 19.2}vw`, margin: `unset` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const missionDescStyle = style([
  {
    whiteSpace: `pre-wrap`,
    lineHeight: `2em`,
    fontSize: `${14 / 3.75}vw`,
    marginTop: `${32 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: { marginTop: `${104 / 19.2}vw`, fontSize: `${20 / 19.2}vw` },
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
