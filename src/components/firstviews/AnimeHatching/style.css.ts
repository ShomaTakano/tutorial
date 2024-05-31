import { style, keyframes } from '@vanilla-extract/css';

import { colors } from 'constants/styles/colors';
import { responsiveDesktop, responsiveStyle } from 'styles/utils.css';

const keyframeMain = keyframes({
  '0%': {
    transform: `rotate(-3deg) scale(1) translate3d(0,0,0)`,
  },
  '20%': {
    transform: `rotate(50deg)  translate3d(0,5px,0)`,
  },
  '40%': {
    transform: `rotate(-15deg) scale(1.1) translate3d(0,8px,-5px)`,
  },
  '60%': {
    transform: `rotate(5deg) translate3d(5px,-8px,-80px)`,
  },
  '90%': {
    transform: `rotate(-1deg) translate3d(0,0,0)`,
  },
  '100%': {
    transform: `rotate(0)`,
  },
});

const keyframeAfter = keyframes({
  '0%': {
    borderRadius: `50%;`,
    transform: `skew(0) translate3d(0, 0px, 0px);`,
  },
  '10%': {
    transform: `translate3d(0, -10px, 0);`,
  },
  '50%': {
    borderRadius: `50%;`,
  },
  '80%': {
    borderRadius: `30%`,
    transform: `translate3d(20, 10px, 20px)`,
  },
  '100%': {
    borderRadius: `50%;`,
    transform: `skew(0) translate3d(0, 0px, 0px);`,
  },
});

const keyframeBefore = keyframes({
  '0%': {
    borderRadius: '50%',
    transform: `translate3d(0, 0px, 0px)`,
  },
  '10%': {
    transform: `translate3d(-10px, 10px, 0);`,
  },
  '70%': {
    borderRadius: `50%`,
  },
  '80%': {
    borderRadius: '30%',
    transform: `translate3d(-20px, -10px, -20px)`,
  },
  '100%': {
    borderRadius: `50%;`,
    transform: `translate3d(0, 0px, 0px)`,
  },
});

export const anime1 = style([
  {
    display: `flex`,
    position: `relative`,
    width: `80%`,
    height: `80%`,
    background: colors.primary,
    borderRadius: `50%`,
    // marginRight: `5rem`,
    listStyle: `none`,
    alignItems: `center`,

    animation: `${keyframeMain} 1s infinite`,
    ':before': {
      content: ``,
      position: `absolute`,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      borderRadius: `50%`,
      background: colors.primary,
      animation: `${keyframeBefore} 1.6s .8s ease-out infinite`,
      zIndex: -1,
    },
    ':after': {
      content: ``,
      position: `absolute`,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      borderRadius: `50%`,
      background: colors.primary,
      animation: `${keyframeAfter} 1.6s ease-out infinite`,
      zIndex: -1,
    },
  },
]);

export const li = style([
  {
    listStyle: 'none',
    flexShrink: 0,
    // width: `28vw`,
    // height: `28vw`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    margin: `0 10vw`,
    width: `${80 / 3.75}vw`,
    height: `${80 / 3.75}vw`,
  },
  responsiveStyle({
    desktop1024: {
      width: `${200 / 19.2}vw`,
      height: `${200 / 19.2}vw`,
      margin: `0 5vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);
