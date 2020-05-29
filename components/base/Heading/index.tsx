import { text } from 'base/base'

export default text
  .config({ name: 'Heading' })
  .attrs({ tag: 'h1' })
  .theme((t) => ({
    textAlign: 'center',
    marginY: t.spacing.reset,
  }))
  .variants((t) => ({
    level1: {
      fontSize: 36,
      fontWeight: t.fontWeight.bold,
    },
    level2: {
      fontSize: 24,
      fontWeight: t.fontWeight.semibold,
      marginBottom: 54,
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
