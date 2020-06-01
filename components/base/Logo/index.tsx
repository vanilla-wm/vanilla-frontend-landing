import { element } from 'base/base'

const logos = {
  vanilla: require('assets/Vanilla.svg'),
  cinnamon: require('assets/cinnamon.svg'),
}

export default element.config({ name: 'Logo' }).attrs(({ name }) => ({
  tag: 'img',
  src: logos[name],
  alt: `logo ${name}`,
}))
