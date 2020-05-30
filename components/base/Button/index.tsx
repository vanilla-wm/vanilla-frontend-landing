import { element } from 'base/base'

export default element
  .config({ name: 'Button' })
  .attrs({ gap: 8 })
  .theme({
    paddingX: 16,
    transition: 0.3,
  })
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
