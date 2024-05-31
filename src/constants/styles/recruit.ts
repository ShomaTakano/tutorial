/// space
export const sectionMarginY = { base: `6.25rem`, md: `7.5rem` };
export const sectionPaddingY = sectionMarginY;
export const titleMarginBottom = { base: `2.25rem`, md: `5rem` };
export const sectionMarginX = { base: `auto`, sm: `auto` };
export const sectionPaddingX = { base: `1rem`, lg: `initial` };
export const cardMarginAroundImage = { base: `1.5rem`, md: `2.625rem` };
export const buttonMarginTop = titleMarginBottom;

export const space = {
  mx: {
    topSection: sectionMarginX,
  },
  my: { topSection: sectionMarginY },
  px: {
    topSection: sectionPaddingX,
  },
  py: {
    topSection: sectionPaddingY,
  },
  mb: {
    topTitle: titleMarginBottom,
  },
  mt: { button: buttonMarginTop },
  m: {
    cardAroundImage: cardMarginAroundImage,
  },
  firstviewTitle: {
    pt: {
      base: `calc(54px + 14vw)`,
      md: `calc(52px + 2.5em)`,
      lg: `calc(54px + 3.5em)`,
      xl: `calc(54px + 5em)`,
      '2xl': `calc(54px + 6em)`,
    },
    pb: { base: `14vw`, md: `2.5em`, lg: `3.5em`, xl: `5em`, '2xl': `6em` },
    pl: {
      base: `5vw`,
      md: `calc(0.5rem + 2.5em)`,
      lg: `calc(0.5rem + 3.5em)`,
      xl: `calc(0.5rem + 5em)`,
      '2xl': `calc(0.5rem + 6em)`,
    },
  },
  button: { mt: { ...buttonMarginTop } },
  firstviewSubTitle: { mt: { base: `4.5vw`, md: `1.45em` } },
  section: {
    pt: { base: `19.75vw`, lg: `10.4085vw`, '2xl': `5.4rem` },
    pb: { base: `21vw`, lg: `14.649vw`, '2xl': `12.5rem` },
  },
  sectionSubTitle: {
    mb: { base: `4.8vw`, md: `1.75em`, lg: `1.75em`, '2xl': `2em` },
  },
  sectionTitle: {
    pb: { base: `7.95vw`, lg: `2.75rem`, '2xl': `2.8rem` },
  },
  list: { mt: { base: `7.75vw`, lg: `4.75rem` } },
  cardMessage: {
    pt: { base: `4.5vw`, md: `0.75rem` },
  },
  cardImage: {
    pb: cardMarginAroundImage,
  },
  sub: {
    firstviewTitle: {
      pt: {
        base: `calc(8px + 10vw)`,
        // md: `calc(52px + 12.8vw)`,
        // md: `calc(52px + 2.5em)`,
        lg: `calc(30px + 0em)`,
        xl: `calc(54px + 0em)`,
        // xl: `calc(54px + 5em)`,
        '2xl': `calc(54px + 2.8em)`,
      },
      pb: {
        base: `12.8vw`,
        // base: `14vw`,
        md: `12.8vw`,
        // md: `2.5em`,
        lg: `3.5em`,
        xl: `5em`,
        '2xl': `6em`,
      },
      pl: {
        base: `calc(0.5rem + 2.5vw)`,
        md: `calc(0.5rem + 5vw)`,
        lg: `calc(0.5rem + 3.5em)`,
        xl: `calc(0.5rem + 5em)`,
        '2xl': `calc(0.5rem + 6em)`,
      },
    },
    firstviewSubTitle: { mt: { base: `5.05vw`, md: `1.45em` } },
    section: {
      pt: {
        base: `14.75vw`,
        // md: `3.25rem`,
        lg: `2rem`,
        // lg: `4.8rem`,
        xl: `3.2rem`,
        '2xl': `5.4rem`,
      },
      pb: {
        base: `22.4vw`,
        md: `27vw`,
        // md: `7.25rem`,
        lg: `11.1rem`,
        '2xl': `12.5rem`,
      },
    },
    sectionSubTitle: {
      mb: {
        base: `4.8vw`,
        // md: `1.75em`,
        lg: `1.75em`,
        '2xl': `2em`,
      },
    },
    sectionSubTitleHalf: {
      my: { base: `2.4vw`, lg: `0.875em`, '2xl': `1em` },
    },
    sectionTitle: {
      pb: { base: `7.95vw`, lg: `2rem`, '2xl': `2.8rem` },
    },
    sectionContent: {
      mt: { base: `9.2vw`, lg: `3rem` },
    },
    subSection: {
      pb: { base: `22.4vw`, lg: `5.5rem` },
    },
    h3: {
      pb: { base: `7.6vw`, lg: `1.75rem` },
    },
    h3SubTitle: {
      pb: { base: `7.6vw`, md: `8.8vw`, lg: `1.75rem` },
    },
    h3Message: {
      pt: { lg: `0.25em` },
      mb: { base: `9.2vw`, lg: `4.7em` },
    },
    card: {
      p: { base: `6.2vw 8vw 7vw`, md: `1.8em 2.25em 2em` },
      py: { base: `7vw`, md: `2em` },
      px: { lg: `2.25em` },
    },
    card2: { p: { base: `3.1vw 4vw 3.5vw`, md: `0.9em 1em 1em` } },
    // card: { p: { base: `6.2vw 8vw 7vw`, lg: `1.8em 2.25em 2em` } },
    cardMessage: {
      pt: { base: `5.3vw`, md: `2.5rem`, xl: `1.725rem` },
      // pt: { base: `5.3vw`, md: `0.75rem`, xl: `1.725rem` },
      // pt: { base: `4.5vw`, lg: `0.8em` },
    },
    cardMessage2: {
      pt: { base: `4vw`, md: `2rem`, lg: `0.875rem`, xl: `1em` },
      // pt: { base: `5.3vw`, md: `0.75rem`, xl: `1.725rem` },
      // pt: { base: `4.5vw`, lg: `0.8em` },
    },
  },
  top: {
    section: {
      mx: sectionMarginX,
      my: sectionMarginY,
      px: sectionPaddingX,
      py: sectionPaddingY,
    },
    cardContentSpacing: {
      base: `1.75rem`,
    },
  },
  header: {
    py: { base: `0.25rem`, md: `0.5rem` },
  },
};

/// font
export const fontSize = {
  firstviewMessage: {
    base: `1rem`,
    md: `1.25rem`,
  },
  title: { base: `1rem`, lg: '1.25rem' },
  subTitle: { base: `2rem`, md: `2.22rem`, lg: `3rem` },
  smallTitle: { base: `1.25rem`, md: `1.88rem`, xl: `2rem` },
  largeText: { base: `1.25rem`, md: `3.5rem`, xl: `3.9rem` },
  middleText: { base: `1rem`, md: `1.33rem`, xl: `1.25rem` },
  smallText: { base: `0.875rem`, md: `1.11rem`, xl: `1.2rem` },
  button: { base: `0.875rem`, md: `1rem`, xl: `1.25rem` },
  sectionMessage: {
    base: `3.73vw`,
    md: `1.75rem`,
    lg: `0.85rem`,
  },
  h3: {
    base: `5.33vw`,
    md: `2.27445vw`,
    '2xl': `2.6125rem`,
  },
  cardTitle: {
    base: `5.33vw`,
    md: `1.5rem`,
  },
  cardSubTitle: {
    base: `2.65vw`,
    md: `0.75rem`,
  },
  cardMessage: {
    base: `0.8725rem`,
    md: `0.675rem`,
    lg: `0.7rem`,
  },
  sectionSubTitle: {
    base: `0.8rem`,
    md: `1rem`,
    // md: `0.675rem`,
    lg: `0.88rem`,
    '2xl': `0.95rem`,
  },
  sectionTitle: {
    base: `1.875rem`,
    md: `2.5rem`,
    // md: `2rem`,
    lg: `2.25rem`,
    '2xl': `2.6125rem`,
  },
  top: {
    firstviewMessage1: {
      base: `4vw`,
      md: `1.71vw`,
      xl: `1.25rem`,
    },
    firstviewMessage2: {
      base: `6.66vw`,
      md: `4.4975vw`,
      xl: `3.25rem`,
    },
    sectionSubTitle: {
      base: `2rem`,
      md: `2.5rem`,
      lg: `3rem`,
      // lg: `2.99vw`,
    },
    sectionTitle: {
      base: `1rem`,
      md: `1.25rem`,
      lg: '1.25rem',
      // lg: '1.1vw',
    },
    sectionMessage: {
      base: `3.73vw`,
      xl: `1.25rem`,
    },
    sectionMessag2: {
      base: `1.575rem`,
      md: `2.3rem`,
      lg: `2.875rem`,
      xl: `3.25rem`,
    },
  },
  sub: {
    firstviewTitle: {
      base: `1.75rem`,
      md: `5.86vw`,
      lg: `2rem`,
      xl: `2.5rem`,
      '2xl': `2.75rem`,
    },
    firstviewSubTitle: {
      base: `3.5vw`,
      // base: `3.73vw`,
      // base: `0.75rem`,
      md: `3.45vw`,
      // md: `3.73vw`,
      lg: `0.75rem`,
      xl: `1rem`,
    },
    sectionSubTitle: {
      base: `3.2824vw`,
      // base: `0.8rem`,
      // md: `0.675rem`,
      lg: `0.88rem`,
      '2xl': `0.95rem`,
    },
    sectionTitle: {
      base: `5.86vw`,
      lg: `1.875rem`,
      xl: `2.375rem`,
      '2xl': `2.6125rem`,
    },
    sectionMessage: {
      base: `3.73vw`,
      lg: `0.8125rem`,
      xl: `1rem`,
      '2xl': `1.125rem`,
    },
    section2SubTitle: {
      base: `4.75vw`,
      // base: `3.73vw`,
      // md: `0.675rem`,
      lg: `0.95rem`,
      xl: `1rem`,
      '2xl': `1.125rem`,
      // '2xl': `0.95rem`,
    },
    h3: {
      base: `5.33vw`,
      lg: `1.5rem`,
      xl: `1.875rem`,
      '2xl': `2rem`,
      // '2xl': `2.6125rem`,
    },
    cardTitle: {
      base: `4.26vw`,
      // md: `2rem`,
      // md: `1.5rem`,
      lg: `0.8125rem`,
      xl: `1.25rem`,
    },
    cardMessage: {
      base: `3.72vw`,
      // base: `0.8725rem`,
      // md: `1.75rem`,
      // md: `0.675rem`,
      lg: `0.7rem`,
      xl: `0.925rem`,
      // xl: `0.875rem`,
    },
  },
};

export const aboutusCardText = {
  fontSize: {
    base: fontSize.smallTitle.base,
    md: `1.25rem`,
    lg: `1.5rem`,
  },
  description: { base: `0.75rem` },
};

export const sectionText = {
  fontSize: {
    base: fontSize.smallText.base,
    md: fontSize.smallText.md,
    xl: `1.25rem`,
  },
};

export const firstviewMessage2 = {
  fontSize: { base: `1.5rem`, md: `3.25rem` },
};

/// width
export const width = {
  section: { base: `89.33vw`, md: `84.28%`, '2xl': `73.75rem` },
  sectionMessage: {
    base: `89.33vw`,
    md: `84.28%`,
    lg: `62.27%`,
    '2xl': `73.75rem`,
  },
  sub: {
    section: { base: `89.33vw`, lg: `84.28%`, '2xl': `73.75rem` },
    sectionMessage: {
      container: { lg: `73.89%` },
      content: { lg: `90%` },
      // content: { md: `90%`, lg: `60%` },
    },
  },
  button: {
    form: { base: ``, lg: ``, xl: `` },
  },
};
export const maxWidthSection = { base: `375px`, md: `48rem`, lg: `initial` };
// export const maxWidthSection = { base: `375px`, md: `48rem`, lg: `initial` };
export const maxWidth = {
  section: maxWidthSection,
  top: {
    content: { lg: `848px` },
    // content: { lg: `848px`, xl: `1280px` },
    // content: { base: `375px`, md: `40rem`, lg: `initial`, xl: `1280px` },
  },
};

/// color
export const color = {
  bgColor: {
    bg1: `#f8f7f8`,
    // bg1: `#2e394a`,
    bg2: `#1d2a3a`,
  },
  bg: {
    gradation: `linear-gradient(to right, #328cfc, #b8ffaf)`,
    // gradation: `linear-gradient(to right, #24a8f6, #b8ffaf)`,
    gradationWithOpacity: `linear-gradient(to right, rgba(36,168,246,0.75), rgba(184,255,175,0.75))`,
    gradationToB: `linear-gradient(to bottom, 328cfc, #b8ffaf)`,
    gradation1: `linear-gradient(to bottom, 328cfc, #5fbce5)`,
    background2: `linear-gradient(to bottom,#68c2df, #8bddc9)`,
    background3: `linear-gradient(to bottom,#93e3c5, #b8ffaf)`,
  },
  card: {
    bgColor: `#050505`,
  },
  blue: `#328cfc`,
};

// z-index
export const zIndex = {
  bgNet: 10,
  topComponent: 11,
};
