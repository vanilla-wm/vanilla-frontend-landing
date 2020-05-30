import React from 'react'
import { Container, Row, Col } from '@vitus-labs/coolgrid'
import { element } from 'base/base'
import Section from 'base/Section'
import Heading from 'base/Heading'
import Box from 'base/Box'
import Icon from 'base/Icon'
import Text from 'base/Text'
// import Box from './Box'

const Line = element
  .theme({
    position: 'absolute',
    top: 70,
    left: 30,
    height: 3,
    width: '100%',
  })
  .styles(
    (css) => css`
      background: linear-gradient(
        90deg,
        #3a3a3c 50.84%,
        rgba(58, 58, 60, 0) 96.32%
      );
    `
  )

export default () => (
  <Section id="easy-setup">
    <Container>
      <Row>
        <Heading level1>Easy setup</Heading>
      </Row>
      <Row gap={16} size={{ xs: 12, sm: 6, md: 3 }}>
        <Col>
          <Box>
            <Line />
            <Box icon>
              <Icon name="account" />
            </Box>
            <Heading level2 label="Vanilla Account" />
            <Text>Create Vanilla account by singing up with Google</Text>
          </Box>
        </Col>
        <Col>
          <Box>
            <Line />
            <Box icon>
              <Icon name="payment-pointer" />
            </Box>
            <Heading level2 label="Payment Pointer" />
            <Text>Add Payment Pointer to Wallet of your choice</Text>
          </Box>
        </Col>
        <Col>
          <Box>
            <Line />
            <Box icon>
              <Icon name="code-snippet" />
            </Box>
            <Heading level2 label="Code Snippet" />
            <Text>Place generate Code Snippet to head of your HTML</Text>
          </Box>
        </Col>
        <Col>
          <Box>
            <Line />
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
