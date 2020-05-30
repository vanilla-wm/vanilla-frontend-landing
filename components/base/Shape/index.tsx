import { element } from 'base/base'

const shapes = {
  triangle: require('assets/shapes/triangle.svg'),
  square: require('assets/shapes/square.svg'),
  rectangle: require('assets/shapes/rectangle.svg'),
  circle: require('assets/shapes/circle.svg'),
}

export default element.config({ name: 'Shape' }).attrs(({ name }) => ({
  tag: 'img',
  src: shapes[name],
}))
