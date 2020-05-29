import React from 'react'
import { Container, Row, Col } from '@vitus-labs/coolgrid'
import Heading from 'base/Heading'
import Button from 'base/Button'
import Icon from 'base/Icon'
import Wrapper from './Wrapper'
import InnerBox from './InnerBox'

export default () => (
  <Wrapper>
    <Container>
      <Row>
        <Col>
          <InnerBox>
            <Heading title>
              Protect your Web Monetized content with Vanilla
            </Heading>
            <Heading tag="h2" subheading>
              Plug ‘n’ play firewall that verifies Web Monetization payments for
              every byte of your content.
            </Heading>
            <Button
              google
              label="Sign in with Google"
              beforeContent={<Icon name="google" />}
            />
          </InnerBox>
        </Col>
      </Row>
    </Container>
  </Wrapper>
)
