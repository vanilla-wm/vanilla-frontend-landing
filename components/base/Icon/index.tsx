import { element } from 'base/base'

const icons = {
  google: require('assets/google.svg'),
  'payment-pointer': require('assets/payment-pointer.svg'),
  'code-snippet': require('assets/code-snippet.svg'),
  api: require('assets/api.svg'),
  account: require('assets/account.svg'),
  menu: require('assets/menu.svg'),
  close: require('assets/close.svg'),
}

export default element.config({ name: 'Icon' }).attrs(({ name }) => ({
  tag: 'img',
  src: icons[name],
  alt: '',
}))
