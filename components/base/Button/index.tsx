import { element } from 'base/base'

export default element
  .config({ name: 'Button' })
  .attrs({ gap: 16 })
  .theme((t) => ({
    paddingX: 8,
    transition: 0.3,
    fontFamily: t.fontFamily.mono,
    minWidth: 240,
  }))
  .states((t) => ({
    google: {
      backgroundColor: t.color.primary,
      color: t.color.black,
      borderRadius: t.borderRadius.extra,
      height: 48,
      fontWeight: 'bold',
      hover: {
        backgroundColor: t.color.primaryHover,
      },
    },
  }))
