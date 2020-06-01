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
      marginTop: 16,
      transform: 'rotate(90deg)',
    },
  })
  .styles(
    (css) => css`
      background: linear-gradient(90deg, #202020 50%, rgba(32, 32, 32, 0) 100%);
      opacity: 0.7;
    `
  )
