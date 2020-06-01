import { element } from 'base/base'

export default element
  .config({ name: 'Root' })
  .attrs({
    block: true,
    contentDirection: 'rows',
    contentAlignX: 'block',
    contentAlignY: 'top',
  })
  .theme({
    backgroundColor: 'black',
    width: '100vw',
    overflowX: 'hidden',
    minHeight: '110vh',
  })
