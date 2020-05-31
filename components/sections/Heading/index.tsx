import React from 'react'
import useWindowSize from '@rehooks/window-size'
import { Container, Row, Col } from '@vitus-labs/coolgrid'
import Box from 'base/Box'
import Heading from 'base/Heading'
import button from 'base/Button'
import Line from 'base/Line'
import Icon from 'base/Icon'
import Text from 'base/Text'
import Link from 'base/Link'
import Wrapper from './Wrapper'
import InnerBox from './InnerBox'
import Parallax from './Parallax'
import Mouse from './Mouse'

const Button = button.theme({
  marginY: 32,
})

const LineWrapper = Box.theme({ height: 120 })

export default () => {
  let windowSize = {}
  if (process.browser) {
    windowSize = useWindowSize()
  }

  const showParallax = windowSize.innerWidth >= 768

  return (
    <Wrapper>
      {showParallax && <Parallax />}
      <Container>
        <Row>
          <Col>
            <InnerBox>
              <Heading title>Web Monetization Verification</Heading>
              <Heading tag="h2" subheading>
                Verify payment streams before sending content
                <br /> to users via Vanilla API
              </Heading>
              <Button
                google
                label="Sign in with Google"
                beforeContent={<Icon name="google" />}
              />

              <Text centered>
                <Text bold>Don't get what we're talking about?</Text>
                <br />
                <Text secondary>
                  Learn more about{' '}
                  <Link
                    primary
                    href="https://webmonetization.org/"
                    target="_blank"
                  >
                    Web Monetization
                  </Link>
                </Text>
              </Text>
              <LineWrapper>
                <Line vertical />
              </LineWrapper>
              <Mouse />
              <Text secondary>Scroll down</Text>
            </InnerBox>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}
