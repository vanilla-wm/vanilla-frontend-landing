import React from 'react'
import { Container, Row, Col } from '@vitus-labs/coolgrid'
import Heading from 'base/Heading'
import Button from 'base/Button'
import Wrapper from './Wrapper'
import InnerBox from './InnerBox'

export default () => (
  <Wrapper>
    <Container>
      <Row>
        <Col>
          <InnerBox>
            <Heading level1>
              Protect your Web Monetized content with Vanilla
            </Heading>
            <Heading tag="h2" subheading>
              Plug ‘n’ play firewall that verifies Web Monetization payments for
              every byte of your content.
            </Heading>
            <Button google label="Sign in with Google" />
          </InnerBox>
        </Col>
      </Row>
    </Container>
  </Wrapper>
)