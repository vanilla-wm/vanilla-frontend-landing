import { element } from 'base/base'

const icons = {
  google: require('assets/google.svg'),
  'payment-pointer': require('assets/payment-pointer.svg'),
  'code-snippet': require('assets/code-snippet.svg'),
  api: require('assets/api.svg'),
  account: require('assets/account.svg'),
}

export default element.config({ name: 'Logo' }).attrs(({ name }) => ({
  tag: 'img',
  src: icons[name],
}))
