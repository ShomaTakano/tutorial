import { style } from '@vanilla-extract/css';

import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { colors } from 'constants/styles/colors';

export const BblogContainer = style([
  {
    flexDirection: `column`,
    marginBottom: `25px`,
    width: `100%`,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const RakuwebReacttyp = style([
  {
    margin: `0px`,
    width: `${264 / 3.75}vw`,
    position: `relative`,
    lineHeight: `1.8em`,
    display: `flex`,
    alignItems: `center`,
    flexShrink: `0`,
    maxWidth: `100%`,
    wordBreak: `break-word`,
  },
  responsiveStyle({
    desktop1024: {
      width: `${1060 / 19.2}vw`,
      height: `${86 / 19.2}vw`,
      maxHeight: `${86 / 19.2}vw`,
      lineHeight: `${36 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const RakuwebReacttyp2 = style([
  {
    display: `block`,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Span3 = style([
  {
    display: `block`,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const RakuwebReacttyp1 = style([
  {
    lineBreak: `anywhere`,
    width: `100%`,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Service = style([
  {
    flex: 1,
    position: `relative`,
    fontSize: `${70 / 3.75}vw`,
    lineHeight: `${34 / 3.75}vw`,
    whiteSpace: `nowrap`,
    display: `inline-block`,
    fontWeight: `700`,
    fontFamily: `Josefin Sans`,
    textAlign: `center`,
    maxWidth: `100%`,
    flexShrink: `0`,
    zIndex: 2,
  },
  responsiveStyle({
    desktop1024: { fontSize: `${122 / 19.2}vw`, lineHeight: `${134 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const BackgroundParent = style([
  {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `flex-start`,
    maxWidth: `100%`,
    // width: `${722 / 19.2}vw`,
    justifyContent: `flex-start`,
    position: `relative`,
  },
  responsiveStyle({
    desktop1024: { width: `${722 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const FrameDiv = style([
  {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `flex-start`,
    maxWidth: `100%`,
    justifyContent: `center`,
    padding: `0 var(--padding-xl) ${35 / 3.75}vw`,
    boxSizing: `border-box`,
    textAlign: `left`,
    fontSize: `${12 / 3.75}vw`,
    marginTop: `${70 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      padding: `0 var(--padding-xl) ${35 / 19.2}vw`,
      fontSize: `${16 / 19.2}vw`,
      marginTop: `${150 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Background = style([
  {
    margin: `0 !important`,
    position: `absolute`,
    bottom: `${-320 / 3.75}vw`,
    left: `${-50 / 3.75}vw`,
    backgroundColor: `#F7F8F8`,
    display: `flex`,
    flexDirection: `row`,
    alignItems: `flex-start`,
    justifyContent: `flex-start`,
    padding: `${60 / 3.75}vw ${37 / 3.75}vw ${130 / 3.75}vw`,
    boxSizing: `border-box`,
    minHeight: `${266 / 19.2}vw`,
    zIndex: 1,
  },
  responsiveStyle({
    desktop1024: {
      bottom: `${-205 / 19.2}vw`,
      left: `${-225 / 19.2}vw`,
      padding: `${83 / 19.2}vw ${68 / 19.2}vw ${90 / 19.2}vw ${69 / 19.2}vw`,
      minHeight: `${266 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

// リストの部分
export const ListWrapper = style([
  {
    width: `fit-content`,
    margin: `${350 / 3.75}vw  auto ${90 / 3.75}vw`,
    position: `relative`,
    zIndex: `1`,
    fontFamily: `'Noto Sans JP', sans-serif;`,
  },
  responsiveStyle({
    desktop1024: {
      display: `flex`,
      borderTop: `1px solid #E3E3E3`,
      borderBottom: `1px solid #E3E3E3`,
      margin: `${150 / 19.2}vw auto`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Card1 = style([
  {
    margin: `0 auto`,
    position: `relative`,
    width: `${335 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      width: `${375 / 19.2}vw`,
      margin: `0 ${30 / 19.2}vw 0`,
      paddingTop: `${130 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const CardTitle = style([
  {
    fontWeight: `bold`,
    color: `#1A1A1A`,
    width: `fit-content`,
    margin: `0 auto`,
    fontSize: `${27 / 3.75}vw`,
    marginBottom: `${14 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `${22 / 19.2}vw`,
      marginBottom: `${12 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const CardText = style([
  {
    color: `#000000`,
    lineHeight: `2em`,
    fontSize: `${12 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `${12.5 / 19.2}vw`,
      // marginBottom: `${12 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const Card2 = style([
  {
    margin: `${160 / 3.75}vw auto`,
    position: `relative`,
    width: `${335 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      margin: `0 auto`,
      width: `${437 / 19.2}vw`,
      padding: `0 ${30 / 19.2}vw 0`,
      paddingTop: `${130 / 19.2}vw`,
      borderLeft: `1px solid #E3E3E3`,
      borderRight: `1px solid #E3E3E3`,
      paddingBottom: `${75 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const CardImg1 = style([
  {
    position: `absolute`,
    top: `${-130 / 3.75}vw`,
    left: `${110 / 3.75}vw`,
    width: `${100 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      top: `${-30 / 19.2}vw`,
      left: `${122 / 19.2}vw`,
      width: `${116 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);
export const CardImg2 = style([
  {
    position: `absolute`,
    top: `${-130 / 3.75}vw`,
    left: `${100 / 3.75}vw`,
    width: `${120 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      top: `${-40 / 19.2}vw`,
      left: `${132 / 19.2}vw`,
      width: `${162 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const CardImg3 = style([
  {
    position: `absolute`,
    top: `${-140 / 3.75}vw`,
    left: `${120 / 3.75}vw`,
    width: `${90 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      top: `${-30 / 19.2}vw`,
      left: `${135 / 19.2}vw`,
      width: `${101 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const BigImg = style([
  {
    display: `none`,
  },
  responsiveStyle({
    desktop1024: {
      display: `block`,
      width: `${1500 / 19.2}vw`,
      margin: `0 auto ${150 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);
