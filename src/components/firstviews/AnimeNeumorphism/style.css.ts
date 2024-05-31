import { style, keyframes } from '@vanilla-extract/css';

import { colors } from 'constants/styles/colors';
import { responsiveDesktop, responsiveStyle } from 'styles/utils.css';
import { li as liOriginal } from 'components/firstviews/AnimeHatching/style.css';

const keyframe = keyframes({
  '0%': {
    width: `${60 / 19.2}vw`,
    height: `${60 / 19.2}vw`,
    background: colors.primary,
    boxShadow: `0 0 0 #cccccc,
                     0 0 0 #ffffff,
                      10px 10px 10px #cccccc inset,
                      -10px -10px 10px #ffffff inset;`,
  },
  '25%': {
    width: `${60 / 19.2}vw`,
    height: `${60 / 19.2}vw`,

    background: colors.primary,
    boxShadow: `10px 10px 10px #cccccc,
                     10px 10px 10px #ffffff,
                     0 0 0 #cccccc inset,
                     0 0 0 #ffffff inset;`,
  },
  '50%': {
    width: `${60 / 19.2}vw`,
    height: `${240 / 19.2}vw`,
    background: colors.primary,
    boxShadow: `10px 10px 10px #cccccc,
                     10px 10px 10px #ffffff,
                     0 0 0 #cccccc inset,
                     0 0 0 #ffffff inset;`,
  },
  '100%': {
    width: `${480 / 19.2}vw`,
    height: `${240 / 19.2}vw`,
    background: colors.primary,
    boxShadow: `${40 / 19.2}vw ${40 / 19.2}vw ${40 / 19.2}vw #cccccc,
                     0 0 0 #ffffff,
                     0 0 0 #cccccc inset,
                     ${2 / 19.2}vw ${2 / 19.2}vw ${19.2}vw #ffffff inset;`,
  },
});

export const li = style([liOriginal]);

export const container = style([
  {
    display: `flex`,
    boxSizing: 'border-box',
    justifyContent: `center`,
    alignItems: `center`,
  },
  responsiveStyle({
    desktop1024: {
      width: `${200 / 19.2}vw`,
      height: `${200 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);

export const box = style([
  {
    borderRadius: `50%`,
    width: `${60 / 19.2}vw`,
    height: `${60 / 19.2}vw`,
    background: colors.primary,
    boxShadow: `0 0 0 #cccccc,
                   0 0 0 #ffffff,
                    10px 10px 10px #cccccc inset,
                    -10px -10px 10px #ffffff inset`,
    animation: `${keyframe} 3s cubic-bezier(0.16, 1, 0.3, 1) 1s infinite alternate`,
  },
]);
