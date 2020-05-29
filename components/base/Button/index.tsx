import { element } from 'base/base'

export default element
  .config({ name: 'Button' })
  .attrs({ gap: 8 })
  .theme({
    paddingX: 16,
  })
  .states({
    google: {
      backgroundColor: 'rgba(254, 182, 17, 0.2)',
      borderRadius: 7,
      height: 48,
      fontWeight: 'bold',
    },
  })
