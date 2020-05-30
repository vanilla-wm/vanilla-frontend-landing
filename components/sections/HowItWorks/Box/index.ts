import { element } from 'base/base'

export default element
  .config({ name: 'HowitWorks/Box' })
  .attrs({
    contentDirection: 'rows',
  })
  .multiple((t) => ({
    innerSpaceLg: {
      paddingY: 32,
    },
  }))
