import React from 'react'
import dynamic from 'next/dynamic'
import useWindowSize from '@rehooks/window-size'
import Root from 'base/Root'
import TopMenu from 'sections/TopMenu'
import Heading from 'sections/Heading'

const HowItWorks = dynamic(() => import('sections/HowItWorks'))
const EasySetup = dynamic(() => import('sections/EasySetup'))
const Plugins = dynamic(() => import('sections/Plugins'))
const Footer = dynamic(() => import('sections/Footer'))

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
