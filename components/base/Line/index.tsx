import { element } from 'base/base'

export default element
  .config({ name: 'Line' })
  .theme({
    height: 3,
    width: '100%',
  })
  .variants({
    vertical: {
      width: 100,
      transform: 'rotate(90deg)',
    },
  })
  .styles(
    (css) => css`
      background: linear-gradient(
        90deg,
        #3a3a3c 50.84%,
        rgba(58, 58, 60, 0) 96.32%
      );
    `
  )
