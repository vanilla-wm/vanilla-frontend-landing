import { element } from 'base/base'

export default element.config({ name: 'Badge' }).theme((t) => ({
  borderColor: '#FEB611',
  borderWidth: 1,
  borderStyle: 'solid',
  color: '#FEB611',
  borderRadius: 4,
  paddingX: 8,
  paddingY: 2,
  fontWeight: t.fontWeight.bold,
  fontSize: 12,
}))
