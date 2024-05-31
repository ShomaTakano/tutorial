import { StyleRule } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

type ResponsiveStyleProps = {
  desktop1024: StyleRule;
  desktop1280: StyleRule;
  desktop1536: StyleRule;
};
export const responsiveStyle = ({
  desktop1024,
  desktop1280,
  desktop1536,
}: ResponsiveStyleProps) => ({
  '@media': {
    'screen and (min-width: 1024px)': desktop1024,
    'screen and (min-width: 1280px)': desktop1280,
    'screen and (min-width: 1536px)': desktop1536,
  },
});

export const responsiveDesktop = (
  property: keyof StyleRule,
  { mobile = null, desktop1024 = null, desktop1280 = null, desktop1536 = null }
) => {
  const _desktop1024 = desktop1024 ?? mobile ?? `initial`;
  const _desktop1280 = desktop1280 ?? _desktop1024;
  const _desktop1536 = desktop1536 ?? _desktop1280;

  const result = {
    '@media': {
      'screen and (min-width: 1024px)': {
        [property]: _desktop1024,
      },
      'screen and (min-width: 1280px)': {
        [property]: _desktop1280,
      },
      'screen and (min-width: 1536px)': {
        [property]: _desktop1536,
      },
    },
  };

  return result;
};

export const calculateResponsiveDesktop = (
  property: keyof StyleRule,
  { desktop1024 = null, desktop1280 = null, desktop1536 = null }
) => {
  const _desktop1536 = desktop1536 ?? undefined;
  const _desktop1536Rem = _desktop1536 ? `${_desktop1536}rem` : undefined;
  const _desktop1280 =
    desktop1280 ?? desktop1536 ? (desktop1536 * 1280) / 1920 : undefined;
  const _desktop1280Rem = _desktop1280 ? `${_desktop1280}rem` : undefined;
  const _desktop1024 =
    desktop1024 ?? _desktop1280 ? (_desktop1280 * 1024) / 1280 : undefined;
  const _desktop1024Rem = _desktop1024 ? `${_desktop1024}rem` : undefined;

  const _result1024 = _desktop1024Rem ?? `initial`;
  const _result1280 = _desktop1280Rem ?? _result1024;
  const _result1536 = _desktop1536Rem ?? _result1280;

  const result = {
    '@media': {
      'screen and (min-width: 1024px)': { [property]: _result1024 },
      'screen and (min-width: 1280px)': { [property]: _result1280 },
      'screen and (min-width: 1536px)': { [property]: _result1536 },
    },
  };

  return result;
};

type CalcStyleUnit = number | string;
const calcStyle = ({
  mobile,
  desktop1024,
  desktop1280,
  desktop1536,
}: {
  mobile: CalcStyleUnit;
  desktop1024?: number;
  desktop1280?: number;
  desktop1536?: number;
}): {
  mobile: CalcStyleUnit;
  desktop1024: string;
  desktop1280: string;
  desktop1536: string;
} => {
  const _desktop1536 = desktop1536 ?? undefined;
  const _desktop1536Rem = _desktop1536 ? `${_desktop1536}rem` : undefined;
  const _desktop1280 =
    desktop1280 ?? desktop1536
      ? calc.multiply(desktop1536, 1280 / 1920)
      : undefined;
  const _desktop1280Rem = _desktop1280 ? `${_desktop1280}rem` : undefined;
  const _desktop1024 =
    desktop1024 ?? _desktop1280
      ? `calc.multiply(_desktop1280, 1024 / 1280)`
      : undefined;
  const _desktop1024Rem = _desktop1024 ? `${_desktop1024}rem` : undefined;
  const result = {
    mobile,
    desktop1024: _desktop1024Rem,
    desktop1280: _desktop1280Rem,
    desktop1536: _desktop1536Rem,
  };

  return result;
};
