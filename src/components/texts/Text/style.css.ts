import { style } from '@vanilla-extract/css';
import { colors } from 'src/constants/styles/colors';

export const text = style([
  {
    fontFamily: `'Noto Sans JP', sans-serif;`,
    lineHeight: `1.5em`,
    letterSpacing: `0.1em`,
    fontWeight: 500,
    color: colors.bgBlack,
  },
]);
