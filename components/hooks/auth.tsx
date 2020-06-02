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
    const redirect = ()=>{
      if (getCookie()) {
        clearInterval(interval.current)
        window.location.replace('https://admin.vanilla.so')
      }
    }

    if (!getCookie()) {
      window.open(
        'https://wm.vanilla.so/auth/google',
        'popup',
        'width=600,height=600'
      )
      clearInterval(interval.current)
      interval.current = setInterval(redirect, 1000)
    }else{
      redirect()
    }
  }

  return { signIn }
}
