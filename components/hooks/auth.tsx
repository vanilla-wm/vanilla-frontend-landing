import { useRef } from 'react'
import Cookies from 'js-cookies'

export default () => {
  const interval = useRef(null)
  const getCookie = () => {
    if (typeof window !== 'undefined') {
      return Cookies.getItem('vanilla')
    }
  }
  const signIn = () => {
    window.open(
      'https://api.vanilla.so/auth/google',
      'popup',
      'width=600,height=600'
    )
    clearInterval(interval.current)
    interval.current = setInterval(() => {
      if (getCookie()) {
        clearInterval(interval.current)
        window.open('https://admin.vanilla.so')
      }
    }, 1000)
  }

  return { signIn }
}
