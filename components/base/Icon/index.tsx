import { element } from 'base/base'

const icons = {
  google: require('assets/google.svg'),
}

export default element.config({ name: 'Logo' }).attrs(({ name }) => ({
  tag: 'img',
  src: icons[name],
}))
