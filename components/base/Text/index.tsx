import { text } from 'base/base'

export default text
  .config({ name: 'Text' })
  .theme({ fontSize: 16, margin: 0 })
  .states({
    secondary: {
      color: '#8E8E93',
    },
  })
  .multiple({
    bold: {
      fontWeight: 'bold',
    },
    centered: {
      textAlign: 'center',
    },
  })
