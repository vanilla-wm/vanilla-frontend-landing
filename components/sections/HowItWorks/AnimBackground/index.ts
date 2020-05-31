import { element } from 'base/base'

export default element
  .config({ name: 'HowitWorks/Box' })
  .attrs({
    contentDirection: 'rows',
  })
  .theme({
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#101010',
    borderRadiusBottomLeft: { xs: 0, sm: 80, lg: 200 },
  })
