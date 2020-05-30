import React from 'react'
import { Container, Row, Col } from '@vitus-labs/coolgrid'
import styled from 'styled-components'
import box from 'base/Box'
import Heading from 'base/Heading'
import Text from 'base/Text'
import List from 'base/List'
import Logo from 'base/Logo'
import shape from 'base/Shape'

const dataListA = [
  { label: 'Vanilla Home', link: 'https://vanilla.so' },
  { label: 'Vanilla Admin', link: 'https://vanilla.so' },
  { label: 'Terms of Services', link: 'https://vanilla.so' },
  { label: 'Privacy Policy', link: 'https://vanilla.so' },
]

const dataListB = [
  { label: 'Grant for the web', link: 'https://vanilla.so' },
  { label: 'Coil', link: 'https://vanilla.so' },
  { label: 'Cinnamon', link: 'https://vanilla.so' },
  { label: 'Puma Browser', link: 'https://vanilla.so' },
]

const dataListC = [
  { label: 'Web Monetization', link: 'https://vanilla.so' },
  { label: 'Interledger', link: 'https://vanilla.so' },
  { label: 'GateHub', link: 'https://vanilla.so' },
  { label: 'Uphold', link: 'https://vanilla.so' },
]

const Box = box.theme((t) => ({
  backgroundColor: t.color.primary,
  color: t.color.black,
  paddingY: { xs: 64, md: 100 },
  overflow: 'hidden',
}))

const FooterBox = box.theme({
  marginTop: 32,
})

const Shape = styled(shape).attrs({
  name: 'vanilla',
})`
  position: absolute;
  right: 0;
  top: 0;
`

export default () => (
  <Box>
    <Container size={{ xs: 12, md: 3 }} gap={{ xs: 20, md: 80 }} gutter={0}>
      <Row>
        <Heading level1 left>
          Project Vanilla is developed as a part of Grant for the Web hackathon
          by Cinnamon.
        </Heading>
      </Row>
      <Row>
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
          <List data={dataListC} />
        </Col>
        <Col></Col>
      </Row>
      <FooterBox contentDirection="inline">
        <Text dark sm>
          Created with love over the weekend in Prague, Czech republic by{' '}
        </Text>
        &nbsp;
        <Logo name="cinnamon" />
      </FooterBox>
    </Container>
    <Shape />
  </Box>
)
