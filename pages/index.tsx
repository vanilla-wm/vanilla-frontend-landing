import React from 'react'
import Root from 'base/Root'
import TopMenu from 'sections/TopMenu'
import Heading from 'sections/Heading'
import HowItWorks from 'sections/HowItWorks'
import EasySetup from 'sections/EasySetup'
import Plugins from 'sections/Plugins'
import Footer from 'sections/Footer'

export default () => {
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
