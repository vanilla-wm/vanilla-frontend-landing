import React from 'react'
import { Container, Row, Col } from '@vitus-labs/coolgrid'
import Section from 'base/Section'
import Heading from 'base/Heading'

export default () => (
  <Section>
    <Heading level2>how it works</Heading>
    <Container>
      <Row>
        <Col>leftBox</Col>
        <Col>leftBox</Col>
      </Row>
    </Container>
  </Section>
)
