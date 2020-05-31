import React from 'react'
import useWindowSize from '@rehooks/window-size'
import Root from 'base/Root'
import TopMenu from 'sections/TopMenu'
import Heading from 'sections/Heading'
import HowItWorks from 'sections/HowItWorks'
import EasySetup from 'sections/EasySetup'
import Plugins from 'sections/Plugins'
import Footer from 'sections/Footer'

export default () => {
  let windowSize = { innerWidth: 0 }
  if (process.browser) {
    windowSize = useWindowSize()
  }

  if (windowSize.innerWidth === 0) return null

  return (
    <Root>
      <TopMenu />
      <Heading />
      <HowItWorks />
      <EasySetup />
      <Plugins />
      <Footer />
    </Root>
  )
}
