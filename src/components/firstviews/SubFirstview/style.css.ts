// import layer
import { style } from '@vanilla-extract/css';
import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { colors } from 'constants/styles/colors';

export const container = style([
  {
    background: colors.backgroundSection,
    height: `${210 / 3.75}vw`,
    position: `relative`,
  },
  responsiveStyle({
    desktop1024: {
      height: `${450 / 19.2}vw`,
      padding: `0 ${25 / 19.2}vw`,
      width: `calc(100% + ${50 / 19.2}vw)`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const breadcrumb = style([
  {
    display: `none`,
    // display: `flex`,
    listStyle: `none`,
    position: `relative`,
    padding: `${80 / 3.75}vw ${24 / 3.75}vw 0`,
    fontSize: `${12 / 3.75}vw`,
    zIndex: `3`,
  },
  responsiveStyle({
    desktop1024: {
      display: `flex`,
      paddingTop: `${100 / 12.8}vw`,
      paddingLeft: `2.70864vw`,
      alignItems: `center`,
      fontSize: `${12 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {
      paddingTop: `${160 / 19.2}vw`,
    },
  }),
]);

export const innerBreadcrumb = style([
  {
    display: `flex`,
    alignItems: `center`,
    position: `relative`,
    color: colors.white,
    selectors: {
      '&:after': {
        content: `'>'`,
        display: `block`,
        margin: `0 ${6 / 3.75}vw 0 ${8 / 3.75}vw`,
      },
    },
  },
  responsiveStyle({
    desktop1024: {
      selectors: {
        '&:after': {
          content: `'>'`,
          display: `block`,
          margin: `0 ${6 / 19.2}vw 0 ${8 / 19.2}vw`,
        },
      },
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const pageNameStyle = style([
  { color: colors.white },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const main = style([
  {
    // borderBottomRightRadius: `${284 / 16}em`,
    display: `flex`,
    whiteSpace: `pre-wrap`,
    width: `${89.75}vw`,
    margin: `1vw auto 0 auto`,
    position: `absolute`,
    top: `60%`,
    transform: `translate(0%, -50%)`,
    left: `10.2489vw`,
    flexDirection: `column`,
    zIndex: `3`,
  },
  responsiveStyle({
    desktop1024: {
      width: `70vw`,
      padding: `0 ${24 / 19.2}vw`,
      boxSizing: `content-box`,
      justifyContent: `space-between`,
      alignItems: `center`,
      flexDirection: `row`,
      top: `50%`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const titleStyle = style([
  {
    whiteSpace: `pre-wrap`,
    lineHeight: `1em`,
    fontSize: `${50 / 3.75}vw`,
    color: colors.white,
  },
  responsiveStyle({
    desktop1024: {
      paddingTop: `${80 / 19.2}vw`,
      fontSize: `${91 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const subTitleStyle = style([
  {
    lineHeight: `1em`,
    fontSize: `${12 / 3.75}vw`,
    marginTop: `${12 / 3.75}vw`,
    letterSpacing: `0.15em`,
    marginLeft: `${6 / 3.75}vw`,
    color: colors.white,
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `${16 / 19.2}vw`,
      marginTop: `${20 / 19.2}vw`,
      marginLeft: `unset`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const logoStyle = style([
  {
    position: `absolute`,
    width: `55vw`,
    top: `-53vw`,
    left: `-10vw`,
    bottom: 0,
    transform: `translate(-25%, 50%)`,
    // mixBlendMode: `difference`,
    willChange: `mixBlendMode`,
    zIndex: 1,
  },
  responsiveStyle({
    desktop1024: {
      width: `${426 / 19.2}vw`,
      top: `5vw`,
      left: `-4vw`,
      transform: `translateX(-25%)`,
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
