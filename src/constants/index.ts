import { parse2xlToLgrem, calculatePcSizesBy2xl } from 'lib/theme/utils';
import colors from 'lib/theme/foundations/colors';

const textStyles = {
  header: {
    leftText: {
      fontSize: {
        base: `4.26vw`,
        lg: parse2xlToLgrem(1),
        '2xl': `1rem`,
      },
      fontWeight: 700,
    },
    nav: {
      fontSize: {
        base: `4.26vw`,
        lg: parse2xlToLgrem(0.9875),
        '2xl': `0.9875rem`,
      },
      fontWeight: 700,
    },
  },
  firstview: {
    copy: {
      fontSize: {
        base: `8.52vw`,
        lg: parse2xlToLgrem(1),
        '2xl': `1rem`,
      },
      fontWeight: 700,
    },
  },
  section: {
    title: {
      fontSize: {
        base: `8.52vw`,
        ...calculatePcSizesBy2xl(3.9375),
      },
      fontWeight: 700,
    },
    bgTitle: {
      fontSize: {
        base: `17.04vw`,
        ...calculatePcSizesBy2xl(13.125),
      },
      letterSpacing: `0.01em`,
    },
  },
  cards: {
    ourJob: {
      title: {
        fontSize: {
          base: `5.1vw`,
          // base: `5.5vw`,
          // lg: parse2xlToLgrem(2.5),
          // '2xl': `2.5rem`,
          ...calculatePcSizesBy2xl(2.3),
          // ...calculatePcSizesBy2xl(2.5),
        },
        lineHeight: `1.25em`,
        color: `#fff`,
      },
      message: {
        fontSize: {
          base: `3.2vw`,
          // lg: parse2xlToLgrem(1.125),
          // xl: `1.125rem`,
          // '2xl': `1.125rem`,
          ...calculatePcSizesBy2xl(1.125),
        },
      },
    },
    news: {
      title: {
        fontSize: { base: `4.26vw`, ...calculatePcSizesBy2xl(1.5) },
        fontWeight: 700,
        lineHeight: `1em`,
      },
    },
    social: {
      title: {
        fontSize: {
          base: `4.26vw`,
          ...calculatePcSizesBy2xl(1.325),
        },
      },
      message: {
        fontSize: { base: `2.13vw`, ...calculatePcSizesBy2xl(0.9375) },
      },
    },
    recruitment: {
      subTitle: {
        fontSize: {
          base: `4.26vw`,
          ...calculatePcSizesBy2xl(1.625),
        },
        fontWeight: 400,
        // color: colors.titleGray,
      },
      message: {
        fontSize: { base: `3.2vw`, ...calculatePcSizesBy2xl(1.125) },
        fontWeight: 400,
        // color: colors.messageBlock,
        lineHeight: `1.75em`,
        letterSpacing: `0.08em`,
      },
    },
  },
};

export default textStyles;
