import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import useWindowSize from '@rehooks/window-size'
import Root from 'base/Root'
import TopMenu from 'sections/TopMenu'
import Heading from 'sections/Heading'
import HowItWorks from 'sections/HowItWorks'

const EasySetup = dynamic(() => import('sections/EasySetup'))
const Plugins = dynamic(() => import('sections/Plugins'))
const Footer = dynamic(() => import('sections/Footer'))

export default () => {
  let windowSize = { innerWidth: 0 }
  if (process.browser) {
    windowSize = useWindowSize()
  }

  if (windowSize.innerWidth === 0) return null

  // < script type = "text/javascript" >
  //         var _iub = _iub || []; _iub.csConfiguration = { "consentOnContinuedBrowsing": false, "whitelabel": false, "lang": "en", "siteId": 1913070, "cookiePolicyId": 25767064, "banner": { "acceptButtonDisplay": true, "customizeButtonDisplay": true, "acceptButtonColor": "#feb611", "acceptButtonCaptionColor": "#010101", "customizeButtonColor": "#332403", "customizeButtonCaptionColor": "#feb611", "rejectButtonColor": "#feb611", "rejectButtonCaptionColor": "white", "position": "float-bottom-left", "textColor": "#ffffff", "backgroundColor": "#000001" } };</script >
  // <script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js"  async></script>

  useEffect(() => {
    if (typeof window !== undefined) {
      const script = document.createElement('script')

      //@ts-ignore
      window._iub = window._iub || []
      //@ts-ignore
      _iub.csConfiguration = {
        consentOnContinuedBrowsing: false,
        whitelabel: false,
        lang: 'en',
        siteId: 1913070,
        cookiePolicyId: 25767064,
        banner: {
          acceptButtonDisplay: true,
          customizeButtonDisplay: true,
          acceptButtonColor: '#feb611',
          acceptButtonCaptionColor: '#010101',
          customizeButtonColor: '#332403',
          customizeButtonCaptionColor: '#feb611',
          rejectButtonColor: '#feb611',
          rejectButtonCaptionColor: 'white',
          position: 'float-bottom-left',
          textColor: '#ffffff',
          backgroundColor: '#000001',
        },
      }

      script.type = 'text/javascript'
      script.src = '//cdn.iubenda.com/cs/iubenda_cs.js'
      script.async = true
      script.charset = 'UTF-8'

      document.head.appendChild(script)

      return () => {
        document.head.removeChild(script)
      }
    }
  }, [])

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

{
  /* <script type="text/javascript">
  var _iub = _iub || [];
_iub.csConfiguration = {"consentOnContinuedBrowsing":false,"whitelabel":false,"lang":"en","siteId":1913070,"cookiePolicyId":25767064, "banner":{"acceptButtonDisplay":true,"customizeButtonDisplay":true,"acceptButtonColor":"#feb611","acceptButtonCaptionColor":"#010101","customizeButtonColor":"#332403","customizeButtonCaptionColor":"#feb611","rejectButtonColor":"#feb611","rejectButtonCaptionColor":"white","position":"float-bottom-left","textColor":"#ffffff","backgroundColor":"#000001" }};
</script>
  <script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></script> */
}
