import React from 'react'
import { Container, Row, Col } from '@vitus-labs/coolgrid'
import Section from 'base/Section'
import Heading from 'base/Heading'
import Text from 'base/Text'
import Box from './Box'

export default () => (
  <Section id="easy-setup">
    <Heading level2>Easy setup</Heading>
    <Container>
      <Row size={{ xs: 12, sm: 6, md: 3 }}>
        <Col>
          <Box>
            <Heading level2 label="1. Vanilla Account" />
            <Text>Create Vanilla account by singing up with Google</Text>
          </Box>
        </Col>
        <Col>
          <Box>
            <Heading level2 label="2. Payment Pointer" />
            <Text>Add Payment Pointer to Wallet of your choice</Text>
          </Box>
        </Col>
        <Col>
          <Box>
            <Heading level2 label="3. Code Snippet" />
            <Text>Place generate Code Snippet to head of your HTML</Text>
          </Box>
        </Col>
        <Col>
          <Box>
            <Heading level2 label="4. API" />
            <Text>Call our API whenever you want to verify payments</Text>
          </Box>
        </Col>
      </Row>
    </Container>
  </Section>
)
