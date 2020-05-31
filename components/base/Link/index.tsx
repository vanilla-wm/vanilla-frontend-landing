import { element } from 'base/base'

export default element
  .config({ name: 'Link' })
  .attrs(({ href }) => ({
    tag: href ? 'a' : 'span',
  }))
  .theme((t) => ({
    cursor: 'pointer',
    fontWeight: 500,
    transition: '0.3s',
    base: {
      color: 'white',
    },
    hover: {
      color: t.color.primaryHover,
    },
    active: {
      color: t.color.primary,
      borderBottom: `1px solid ${t.color.primary}`,
    },
  }))
  .states((t) => ({
    primary: {
      base: {
        color: t.color.primary,
      },
      hover: {
        color: t.color.primaryHover,
      },
      active: {
        color: t.color.primary,
        borderBottom: `1px solid ${t.color.primary}`,
      },
    },
  }))
  .multiple({
    active: true,
  })
