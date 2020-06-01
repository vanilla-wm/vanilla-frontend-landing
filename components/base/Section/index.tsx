import { element } from 'base/base'

export default element
  .config({ name: 'Section' })
  .attrs({
    block: true,
    contentDirection: 'rows',
    // contentAlignX: 'block',
    tag: 'section',
  })
  .theme({
    paddingY: 60,
  })
