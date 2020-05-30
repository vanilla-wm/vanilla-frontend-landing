import React from 'react'
import { Container, Row, Col } from '@vitus-labs/coolgrid'
import Heading from 'base/Heading'
import button from 'base/Button'
import Icon from 'base/Icon'
import Text from 'base/Text'
import Link from 'base/Link'
import Wrapper from './Wrapper'
import InnerBox from './InnerBox'

const Button = button.theme({
  marginY: 32,
})

export default () => (
  <Wrapper>
    <Container>
      <Row>
        <Col>
          <InnerBox>
            <Heading title>Web Monetization Content Protection</Heading>
            <Heading tag="h2" subheading>
              Verify payment stream before sending content
              <br /> to the user via Vanilla API
            </Heading>
            <Button
              google
              label="Sign in with Google"
              beforeContent={<Icon name="google" />}
            />

            <Text centered>
              <Text bold>Don't get what we talk about?</Text>
              <br />
              <Text secondary>
                learn more about{' '}
                <Link
                  primary
                  href="https://webmonetization.org/"
                  target="_blank"
                >
                  Web monetization
                </Link>
              </Text>
            </Text>
          </InnerBox>
        </Col>
      </Row>
    </Container>
  </Wrapper>
)
