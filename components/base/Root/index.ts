import { element } from 'base/base'

export default element
  .config({ name: 'Root' })
  .attrs({
    block: true,
    contentDirection: 'rows',
    contentAlignX: 'block',
  })
  .theme({
    backgroundColor: 'black',
  })
