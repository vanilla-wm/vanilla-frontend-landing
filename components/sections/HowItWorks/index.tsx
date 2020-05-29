import React from 'react'
import { Container, Row, Col } from '@vitus-labs/coolgrid'
import Section from 'base/Section'
import Heading from 'base/Heading'
import Text from 'base/Text'
import Box from './Box'

export default () => (
  <Section id="how-it-works">
    <Heading level2>How it works</Heading>
    <Container>
      <Row>
        <Col>
          <Box>
            <Heading level2>Content Request</Heading>
            <Text>User requests content on your web or mobile app</Text>
          </Box>
          <Box>
            <Heading level2>Payment Verification</Heading>
            <Text>Your back-end verifies payment stream using our API</Text>
          </Box>
          <Box>
            <Heading level2>Content Delivery</Heading>
            <Text>Content Delivery</Text>
          </Box>
        </Col>
        <Col>
          <Box>content A</Box>
          <Box>content B</Box>
          <Box>content C</Box>
        </Col>
      </Row>
    </Container>
  </Section>
)
