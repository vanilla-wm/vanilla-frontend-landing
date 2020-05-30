import React from 'react'
import { Container, Row, Col } from '@vitus-labs/coolgrid'
import Section from 'base/Section'
import Heading from 'base/Heading'
import Box from 'base/Box'
import Icon from 'base/Icon'
import Text from 'base/Text'
// import Box from './Box'

export default () => (
  <Section id="easy-setup">
    <Container>
      <Row>
        <Heading level1>Easy setup</Heading>
      </Row>
      <Row size={{ xs: 12, sm: 6, md: 3 }}>
        <Col>
          <Box>
            <Box icon>
              <Icon name="account" />
            </Box>
            <Heading level2 label="Vanilla Account" />
            <Text>Create Vanilla account by singing up with Google</Text>
          </Box>
        </Col>
        <Col>
          <Box>
            <Box icon>
              <Icon name="payment-pointer" />
            </Box>
            <Heading level2 label="Payment Pointer" />
            <Text>Add Payment Pointer to Wallet of your choice</Text>
          </Box>
        </Col>
        <Col>
          <Box>
            <Box icon>
              <Icon name="code-snippet" />
            </Box>
            <Heading level2 label="Code Snippet" />
            <Text>Place generate Code Snippet to head of your HTML</Text>
          </Box>
        </Col>
        <Col>
          <Box>
            <Box icon>
              <Icon name="api" />
            </Box>
            <Heading level2 label="API" />
            <Text>Call our API whenever you want to verify payments</Text>
          </Box>
        </Col>
      </Row>
    </Container>
  </Section>
)
