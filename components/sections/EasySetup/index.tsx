import React from 'react'
import { Container, Row, Col } from '@vitus-labs/coolgrid'
import Section from 'base/Section'
import Heading from 'base/Heading'
import Box from 'base/Box'
import Icon from 'base/Icon'
import Text from 'base/Text'
import line from 'base/Line'

const Line = line.theme({
  position: 'absolute',
  top: 70,
  left: 30,
})

const ItemBox = Box.attrs({
  contentAlignX: { xs: 'center', md: 'left' },
})

export default () => (
  <Section id="easy-setup">
    <Container>
      <Row>
        <Heading level1>Easy setup</Heading>
      </Row>
      <Row gap={64} size={{ xs: 12, sm: 6, lg: 3 }}>
        <Col>
          <ItemBox>
            <Line />
            <Box icon>
              <Icon name="account" />
            </Box>
            <Heading level2 label="Vanilla Account" />
            <Text>Create Vanilla account by singing up with Google</Text>
          </ItemBox>
        </Col>
        <Col>
          <ItemBox>
            <Line />
            <Box icon>
              <Icon name="payment-pointer" />
            </Box>
            <Heading level2 label="Payment Pointer" />
            <Text>Add Payment Pointer to Wallet of your choice</Text>
          </ItemBox>
        </Col>
        <Col>
          <ItemBox>
            <Line />
            <Box icon>
              <Icon name="code-snippet" />
            </Box>
            <Heading level2 label="Code Snippet" />
            <Text>Place generate Code Snippet to head of your HTML</Text>
          </ItemBox>
        </Col>
        <Col>
          <ItemBox>
            <Line />
            <Box icon>
              <Icon name="api" />
            </Box>
            <Heading level2 label="API" />
            <Text>Call our API whenever you want to verify payments</Text>
          </ItemBox>
        </Col>
      </Row>
    </Container>
  </Section>
)
