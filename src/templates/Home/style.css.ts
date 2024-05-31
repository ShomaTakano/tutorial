import { style } from '@vanilla-extract/css';

import {
  responsiveStyle,
  responsiveDesktop,
  calculateResponsiveDesktop,
} from 'styles/utils.css';
import { colors } from 'constants/styles/colors';

export const container = style([
  {
    background: colors.background,
    overflow: `hidden`,
    scrollBehavior: `smooth`,
  },
]);

export const grayAreaStyle = style([
  {
    // background: colors.backgroundSectionGray,  名前はgrayですが黒に変更しました。
    background: colors.bgBlack,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const h2Style = style([
  {
    position: `relative`,
    fontFamily: `'Noto Sans JP', sans-serif;`,
    fontWeight: `bold`,
    fontSize: `${32 / 3.75}vw`,
    lineHeight: 1.1,
    color: colors.white,
    zIndex: 1,
    '@media': {
      'screen and (min-width: 768px)': {
        fontSize: `8vw`,
      },
    },
    ':before': {
      content: '',
      display: `block`,
      width: `100%`,
      height: `1px`,
      background: `#fff`,
      position: `absolute`,
      left: `0`,
      bottom: `4px`,
    },
  },
  responsiveStyle({
    desktop1024: { width: `555px`, fontSize: `${64 / 19.2}vw` },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const wrapper = style([
  {
    position: `relative`,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const messageStyle = style([
  //文字のメッセージ
  {
    // marginTop: `8vw`,
  },
  responsiveStyle({
    desktop1024: {},
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const minmessageStyle = style([
  {
    //小さい文字
    textAlign: `center`,
    marginTop: `1.5vw`,
    fontFamily: `'Noto Sans JP', sans-serif;`,
    fontWeight: `bold`,
    fontSize: '2vw',
    color: colors.white,
    zIndex: 3,
    '@media': {
      'screen and (min-width: 768px)': {
        fontSize: `2vw`,
      },
    },
  },
  responsiveStyle({
    desktop1024: {
      fontSize: `${15 / 19.2}vw`,
      marginTop: `1vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);
