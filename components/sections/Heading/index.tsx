import React from 'react'
import { Container, Row, Col } from '@vitus-labs/coolgrid'
import Heading from 'base/Heading'

export default () => (
  <Container>
    <Row>
      <Col>
        <Heading level1>
          Protect your Web Monetized content with Vanilla
        </Heading>
        <Heading tag="h2" subheading>
          Plug ‘n’ play firewall that verifies Web Monetization payments for
          every byte of your content.
        </Heading>
      </Col>
    </Row>
  </Container>
)
