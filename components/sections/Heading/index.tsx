import React from 'react'
import useWindowSize from '@rehooks/window-size'
import { Container, Row, Col } from '@vitus-labs/coolgrid'
import auth from 'hooks/auth'
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
  let windowSize = { innerWidth: 0 }
  if (process.browser) {
    windowSize = useWindowSize()
  }

  const showParallax = windowSize.innerWidth >= 768

  const { signIn } = auth()

  return (
    <Wrapper>
      {showParallax && <Parallax />}
      <Container>
        <Row>
          <Col>
            <InnerBox>
              <Heading title>Web Monetization Verifier</Heading>
              <Heading tag="h2" subheading>
                Verify payment streams before sharing exclusive content
                <br />
                with users with Vanilla API
              </Heading>
              <Button
                google
                label="Sign in with Google"
                beforeContent={<Icon name="google" />}
                onClick={signIn}
              />

              <Text centered>
                <Text bold>Want to find out more?</Text>
                <br />
                <Text secondary>
                  Learn more about{' '}
                  <Link
                    primary
                    href="https://webmonetization.org/"
                    target="_blank"
                    rel="noopener noreferrer"
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
