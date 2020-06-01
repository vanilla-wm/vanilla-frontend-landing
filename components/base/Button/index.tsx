import { element } from 'base/base'

export default element
  .config({ name: 'Button' })
  .attrs(({ href }) => ({ tag: href ? 'a' : 'button', gap: 16 }))
  .theme((t) => ({
    paddingX: 8,
    transition: '0.3s',
    // transition: 'background-color 0.2s',
    fontFamily: t.fontFamily.mono,
    minWidth: 240,
    border: 'none',
  }))
  .states((t) => ({
    google: {
      color: t.color.black,
      borderRadius: t.borderRadius.extra,
      height: 48,
      fontWeight: 'bold',
      base: {
        backgroundColor: t.color.primary,
      },
      hover: {
        backgroundColor: t.color.primaryHover,
      },
    },
  }))
