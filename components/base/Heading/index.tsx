import { text } from 'base/base'

export default text
  .config({ name: 'Heading' })
  .attrs({ tag: 'h1' })
  .theme((t) => ({
    textAlign: 'center',
    marginY: t.spacing.reset,
  }))
  .variants((t) => ({
    title: {
      fontSize: 36,
      fontWeight: t.fontWeight.bold,
      marginBottom: 24,
    },
    level1: {
      fontSize: 36,
      fontWeight: t.fontWeight.bold,
      marginBottom: 54,
    },
    level2: {
      fontSize: 24,
      fontWeight: t.fontWeight.semibold,
    },
    level3: {
      marginY: 12,
      fontSize: { xs: 22, md: t.fontSize.xl },
      fontWeight: t.fontWeight.semibold,
    },
    subheading: {
      fontSize: 24,
    },
  }))
