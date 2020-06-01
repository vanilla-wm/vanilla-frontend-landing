import { element } from 'base/base'

export default element
  .config({ name: 'HowitWorks/Box' })
  .attrs({
    contentDirection: 'rows',
  })
  .multiple({
    innerSpaceLg: {
      paddingY: 32,
    },
  })
