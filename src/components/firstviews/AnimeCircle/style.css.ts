import { style, keyframes } from '@vanilla-extract/css';

import { colors } from 'constants/styles/colors';
import { responsiveDesktop, responsiveStyle } from 'styles/utils.css';
import { li as liOriginal } from 'components/firstviews/AnimeHatching/style.css';

const anim01 = keyframes({
  '0%': {
    transform: 'translate(-50%,-50%) scale(0);',
  },
  '20%': {
    transform: 'translate(-50%,-50%) scale(2);',
  },
  '50%': {
    transform: 'translate(-50%,-50%) scale(1);',
  },
  '90%': {
    transform: 'translate(-50%,-50%) scale(3);',
  },
  '100%': {
    transform: 'translate(-50%,-50%) scale(0);',
  },
});

const move01 = keyframes({
  '0%': {
    transform: 'translate(-50%,-50%) translate(0) scale(0);',
  },
  '20%': {
    transform: `translate(-50%,-50%) translate(${-100 / 19.2}vw, ${
      -100 / 19.2
    }vw) scale(1);`,
  },
  '40%': {
    transform: `translate(-50%,-50%) translate(${-100 / 19.2}vw, ${
      100 / 19.2
    }vw) scale(1);`,
  },
  '60%': {
    transform: `translate(-50%,-50%) translate(${100 / 19.2}vw, ${
      100 / 19.2
    }vw) scale(1);`,
  },
  '80%': {
    transform: `translate(-50%,-50%) translate(${100 / 19.2}vw, ${
      -100 / 19.2
    }vw) scale(1);`,
  },
  '100%': {
    transform: 'translate(-50%,-50%) translate(0) scale(1);',
  },
});

const move02 = keyframes({
  '0%': {
    transform: 'translate(-50%,-50%) translate(0) scale(0);',
  },
  '20%': {
    transform: `translate(-50%,-50%) translate(${-100 / 19.2}vw, ${
      100 / 19.2
    }vw) scale(1);`,
  },
  '40%': {
    transform: `translate(-50%,-50%) translate(${100 / 19.2}vw, ${
      100 / 19.2
    }vw) scale(1);`,
  },
  '60%': {
    transform: `translate(-50%,-50%) translate(${100 / 19.2}vw, ${
      -100 / 19.2
    }vw) scale(1);`,
  },
  '80%': {
    transform: `translate(-50%,-50%) translate(${-100 / 19.2}vw, ${
      -100 / 19.2
    }vw) scale(1);`,
  },
  '100%': {
    transform: `translate(-50%,-50%) translate(0) scale(1);`,
  },
});

const move03 = keyframes({
  '0%': {
    transform: `translate(-50%,-50%) translate(0) scale(0);`,
  },
  '20%': {
    transform: `translate(-50%,-50%) translate(${100 / 19.2}vw, ${
      100 / 19.2
    }vw) scale(1);`,
  },
  '40%': {
    transform: `translate(-50%,-50%) translate(${100 / 19.2}vw, ${
      -100 / 19.2
    }vw) scale(1);`,
  },
  '60%': {
    transform: `translate(-50%,-50%) translate(${-100 / 19.2}vw, ${
      -100 / 19.2
    }vw) scale(1);`,
  },
  '80%': {
    transform: `translate(-50%,-50%) translate(${-100 / 19.2}vw, ${
      100 / 19.2
    }vw) scale(1);`,
  },
  '100%': {
    transform: `translate(-50%,-50%) translate(0) scale(1);`,
  },
});

const move04 = keyframes({
  '0%': {
    transform: `translate(-50%,-50%) translate(0) scale(0);`,
  },
  '20%': {
    transform: `translate(-50%,-50%) translate(${100 / 19.2}vw, ${
      -100 / 19.2
    }vw) scale(1);`,
  },
  '40%': {
    transform: `translate(-50%,-50%) translate(${-100 / 19.2}vw, ${
      -100 / 19.2
    }vw) scale(1);`,
  },
  '60%': {
    transform: `translate(-50%,-50%) translate(${-100 / 19.2}vw, ${
      100 / 19.2
    }vw) scale(1);`,
  },
  '80%': {
    transform: `translate(-50%,-50%) translate(${100 / 19.2}vw, ${
      100 / 19.2
    }vw) scale(1);`,
  },
  '100%': {
    transform: `translate(-50%,-50%) translate(0) scale(1);`,
  },
});

export const li = style([liOriginal, { width: `20vw`, height: `20vw` }]);

export const circle = style([
  {
    listStyle: `none`,
    position: `relative`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },
]);

export const part = style([
  {
    width: `${50 / 3.75}vw`,
    height: `${50 / 3.75}vw`,
    position: 'absolute',
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%,-50%)`,
    background: colors.primary,
    borderRadius: '50%',
    selectors: {
      '&:nth-child(1)': { animation: `${anim01} 4s forwards infinite;` },
      '&:nth-child(2)': { animation: `${move01} 4s 4s infinite;` },
      '&:nth-child(4)': { animation: `${move03} 4s 4s infinite;` },
      '&:nth-child(3)': { animation: `${move02} 4s 4s infinite;` },
      '&:nth-child(5)': { animation: `${move04} 4s 4s infinite;` },
    },
  },
  responsiveStyle({
    desktop1024: {
      width: `${80 / 19.2}vw`,
      height: `${80 / 19.2}vw`,
    },
    desktop1280: {},
    desktop1536: {},
  }),
]);
