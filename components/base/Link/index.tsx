import { element } from 'base/base'

export default element
  .config({ name: 'Link' })
  // .attrs({
  //   tag: 'a',
  // })
  .theme((t) => ({
    fontWeight: 500,
    base: {
      color: 'white',
    },
    active: {
      color: t.color.primary,
      borderBottom: `1px solid ${t.color.primary}`,
    },
  }))
  .states((t) => ({
    primary: {
      color: t.color.primary,
    },
  }))
  .multiple({
    active: true,
  })
