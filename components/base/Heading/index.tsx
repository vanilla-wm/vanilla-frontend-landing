import { element } from 'base/base'

export default element
  .config({ name: 'Heading' })
  .attrs({ tag: 'h1', contentAlignX: 'left' })
  .theme((t) => ({
    textAlign: 'center',
    marginTop: t.spacing.reset,
    marginBottom: t.spacing.reset,
    fontFamily: t.fontFamily.mono,
  }))
  .states((t) => ({
    primary: {
      color: t.color.primary,
    },
  }))
  .variants((t) => ({
    title: {
      fontSize: 36,
      fontWeight: t.fontWeight.bold,
      marginBottom: 24,
      color: t.color.primary,
    },
    level1: {
      fontSize: { xs: 24, md: 32 },
      fontWeight: t.fontWeight.bold,
      marginBottom: { xs: 24, md: 48 },
      backgroundColor: t.color.primary,
      color: t.color.black,
      borderRadius: 60,
      borderRadiusBottomLeft: 0,
      paddingY: 12,
      paddingX: 32,
    },
    level2: {
      fontSize: { xs: 20, md: 24 },
      fontWeight: t.fontWeight.semibold,
      marginY: 16,
    },
    level3: {
      marginY: 12,
      fontSize: { xs: 22, md: t.fontSize.xl },
      fontWeight: t.fontWeight.semibold,
    },
    subheading: {
      fontFamily: t.fontFamily.base,
      fontSize: 24,
      color: '#8E8E93',
    },
  }))
