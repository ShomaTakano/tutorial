// import layer
import { style } from '@vanilla-extract/css';
import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { colors } from 'constants/styles/colors';

export const containerStyle = style([
  {
    position: `relative`,
    height: `60vw`,
  },
  responsiveStyle({
    desktop1024: { height: `${670 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const imageStyle = style([
  {
    width: `100%`,
    height: `100%`,
    position: `relative`,
    ':after': {
      content: "''",
      position: `absolute`,
      width: `100%`,
      height: `100%`,
      top: 0,
      left: 0,
      background: `#000`,
      opacity: `35%`,
    },
  },
  responsiveStyle({
    desktop1024: {
      // transition: `.3s ease-in-out`,
      // ':hover': {
      //   cursor: `pointer`,
      //   transform: `scale(1.3)`,
      // },
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const innerStyle = style([
  {
    margin: `0 auto`,
    position: `relative`,
    zIndex: 2,
    display: `flex`,
    flexDirection: `column`,
    padding: `${16 / 3.75}vw  ${40 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: { padding: `${130 / 19.2}vw 0 ${36 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const logoWrapperStyle = style([
  {
    position: `absolute`,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: `100%`,
    overflow: `hidden`,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const titleStyle = style([
  {
    fontSize: `${20 / 3.75}vw`,
    fontWeight: 700,
    zIndex: 2,
    whiteSpace: `pre-wrap`,
    lineHeight: `1.25em`,
  },
  responsiveStyle({
    desktop1024: {
      marginTop: `${-50 / 19.2}vw`,
      lineHeight: `1.5em`,
      fontSize: `${60 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const logoImageStyle = style([
  {
    position: `absolute`,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -30%)`,
    width: `${234 / 19.2}vw`,
  },
  responsiveStyle({
    desktop1024: { position: `absolute`, top: `40%`, left: `50%` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const messageStyle = style([
  {
    fontSize: `${14 / 3.75}vw`,
    marginTop: `${120 / 3.75}vw`,
    fontWeight: 700,
    alignSelf: `center`,
    zIndex: 2,
    color: colors.white,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${40 / 19.2}vw`, marginTop: `${220 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const buttonStyle = style([
  {
    alignSelf: `flex-end`,
    marginTop: `${8 / 3.75}vw`,
    fontSize: `${14 / 3.75}vw`,
    display: `none`,
    // display: `none`,
  },
  responsiveStyle({
    desktop1024: {
      display: `block`,
      marginTop: `${24 / 19.2}vw`,
      fontSize: `${22 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

// export const hoverStyle = style([
//   {},
//   responsiveStyle({
//     desktop1024: {
//       ':hover': {
//         cursor: `pointer`,
//       },
//       selectors: {
//         [`${Image}:first-of-type`]: {
//           transform: `scale(1.3)`,
//         },
//       },
//     },
//     desktop1280: {},
//     desktop1536: {},
//   }),
// ]);

export const hoverStyle = style([
  {},
  responsiveStyle({
    desktop1024: {
      transition: `0.3s`,
      backfaceVisibility: `hidden`,
      ':hover': {
        cursor: `pointer`,
        opacity: `0.8`,
      },
    },
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
