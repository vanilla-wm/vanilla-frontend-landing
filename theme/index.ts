import { theme as grid } from '@vitus-labs/coolgrid'

export default {
  ...grid,

  // --------------------------------------------------------------------------
  // FONTS
  // --------------------------------------------------------------------------
  fontFamily: {
    base: 'Open Sans, sans-serif',
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
    gray100: '#f8f9fa',
    gray200: '#e9ecef',
    gray300: '#dee2e6',
    gray400: '#ced4da',
    gray500: '#adb5bd',
    gray600: '#6c757d',
    gray700: '#495057',
    gray800: '#343a40',
    gray900: '#212529',
    black: '#000',
    overlay: 'rgba(0, 0, 0, 0.7)',
    overlayContent: 'rgba(0, 0, 0, 0.8)',

    primary: '#A450B3',
    secondary: '#50B398', // 6c757d
    success: '#28a745',
    info: '#17a2b8',
    warning: '#ffc107',
    danger: '#EB5757',
    light: '#f8f9fa',
    dark: '#343a40',
    google: '#EB5757',
    facebook: '#2D9CDB',
  },

  // --------------------------------------------------------------------------
  // SPACING, BORDERS, etc.
  // --------------------------------------------------------------------------
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
