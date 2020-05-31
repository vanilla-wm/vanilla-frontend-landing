import React from 'react'
import useWindowSize from '@rehooks/window-size'
import { Container, Row, Col } from '@vitus-labs/coolgrid'
import styled from 'styled-components'
import box from 'base/Box'
import Heading from 'base/Heading'
import Text from 'base/Text'
import List from 'base/List'
import logo from 'base/Logo'
import shape from 'base/Shape'

const dataListA = [
  { label: 'Vanilla Home', link: 'https://vanilla.so' },
  { label: 'Vanilla Admin', link: 'https://admin.vanilla.so' },
  { label: 'Terms of Services', link: 'https://vanilla.so' },
  { label: 'Privacy Policy', link: 'https://vanilla.so' },
]

const dataListB = [
  { label: 'Grant for the web', link: 'https://www.grantfortheweb.org/' },
  { label: 'Coil', link: 'https://coil.com/' },
  { label: 'Cinnamon', link: 'https://www.cinnamon.video/' },
  { label: 'Puma Browser', link: 'https://www.pumabrowser.com/' },
]

const dataListC = [
  { label: 'Web Monetization', link: 'https://webmonetization.org/' },
  { label: 'Interledger', link: 'https://interledger.org/' },
  { label: 'GateHub', link: 'https://gatehub.net/' },
  { label: 'Uphold', link: 'https://uphold.com/en-us/' },
]

const Box = box.theme((t) => ({
  backgroundColor: t.color.primary,
  color: t.color.black,
  paddingTop: { xs: 64, md: 100 },
  paddingBottom: { xs: 32 },
  overflow: 'hidden',
}))

const FooterBox = box.theme({
  marginTop: 32,
  display: 'block',
})

const Logo = logo.theme({ height: 20, top: 5 })

const Shape = styled(shape).attrs({
  name: 'vanilla',
})`
  position: absolute;
  right: 0;
  top: 0;
`

export default () => {
  let windowSize = {}
  if (process.browser) {
    windowSize = useWindowSize()
  }

  const showShape = windowSize.innerWidth >= 768
  const showEmptyHeading = windowSize.innerWidth >= 576
  const showBRInFooter =
    windowSize.innerWidth >= 400 && windowSize.innerWidth <= 800

  return (
    <Box>
      {showShape && <Shape />}
      <Container gutter={0}>
        <Row>
          <Col size={{ xs: 12, lg: 9 }}>
            <Heading reset level1 left>
              Project Vanilla is developed as a part of Grant for the Web
              hackathon by Cinnamon.
            </Heading>
          </Col>
        </Row>
        <Row size={{ xs: 12, sm: 4, lg: 3 }} gap={{ xs: 20, sm: 40, md: 80 }}>
          <Col>
            <Heading dark level2>
              Sitemap
            </Heading>
            <List data={dataListA} />
          </Col>
          <Col>
            <Heading dark level2>
              Learn more
            </Heading>
            <List data={dataListB} />
          </Col>
          <Col>
            {showEmptyHeading && (
              <Heading dark level2>
                &nbsp;
              </Heading>
            )}
            <List data={dataListC} />
          </Col>
        </Row>
        <FooterBox contentDirection="inline">
          <Text inline dark sm>
            Created with love over the weekend in Prague,
            {showBRInFooter && <br />}
            Czech republic by <Logo name="cinnamon" />
          </Text>
          &nbsp;
        </FooterBox>
      </Container>
    </Box>
  )
}
