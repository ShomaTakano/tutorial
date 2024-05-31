import { style } from '@vanilla-extract/css';

//aboutページのフォントが違うため作成しました。

export const textStyle = style([
  {
    fontFamily: `'Noto Sans JP', sans-serif;`,
    lineHeight: `1.5em`,
    letterSpacing: `0.1em`,
    fontWeight: 500,
    color: `#fff`,
  },
]);
