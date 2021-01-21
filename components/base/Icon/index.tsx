import { element } from 'base/base'

const icons = {
  google: require('assets/google.svg'),
  'payment-pointer': require('assets/payment-pointer.svg'),
  'code-snippet': require('assets/code-snippet.svg'),
  api: require('assets/api.svg'),
  account: require('assets/account.svg'),
  menu: require('assets/menu.svg'),
  close: require('assets/close.svg'),
  express: require('assets/express.svg'),
  apache: require('assets/apache.svg'),
  nginx: require('assets/nginx.svg'),
  wordpress: require('assets/wordpress.svg'),
  person: require('assets/person.svg'),
  dartJs: require('assets/dartJs.png'),
  nodeJs: require('assets/nodeJs.png'),
}

export default element
  .config({ name: 'Icon' })
  .attrs(({ name }) => ({
    tag: 'img',
    src: icons[name],
    alt: '',
  }))
  .variants({
    absolute: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
    },
  })
  .multiple({
    opacity: {
      opacity: '20%',
    },
  })
