import { theme as grid } from '@vitus-labs/coolgrid'

export default {
  ...grid,

  // --------------------------------------------------------------------------
  // FONTS
  // --------------------------------------------------------------------------
  fontFamily: {
    base: `'Work Sans', sans-serif`,
    mono: `'Space Mono', monospace`,
  },

  lineHeight: {
    xs: 1.1,
    sm: 1.3,
    base: 1.5,
    xl: 1.75,
    xxl: 2,
  },

  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 20,
    xl: 24,
    xxl: 28,
    xxxl: 32,
    smaller: '87.5%',
    smallest: '75%',
  },

  fontWeight: {
    thin: 200,
    light: 300,
    base: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    lighter: 'lighter',
    bolder: 'bolder',
  },

  // --------------------------------------------------------------------------
  // COLORS
  // --------------------------------------------------------------------------
  color: {
    transparent: 'transparent',
    white: '#fff',
    white400: '#8E8E93',
    black: '#000',
    primary: '#FEB611',
    primaryHover: 'rgba(254, 182, 17, 0.4)',
  },

  // --------------------------------------------------------------------------
  // SPACING, BORDERS, etc.
  // --------------------------------------------------------------------------
  borderRadius: {
    sm: 4,
    base: 14,
    extra: 160,
  },
  spacing: {
    reset: 0,
    xxs: 2,
    xs: 4,
    sm: 8,
    base: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    xxxl: 32,
    xxxxl: 48,
  },
}
