import React from 'react'
import useWindowSize from '@rehooks/window-size'
import { Container, Row, Col } from '@vitus-labs/coolgrid'
import { element } from 'base/base'
import section from 'base/Section'
import Heading from 'base/Heading'
import Box from 'base/Box'
import Icon from 'base/Icon'
import Text from 'base/Text'
import Link from 'base/Link'
import line from 'base/Line'

const Section = section.theme({
  backgroundColor: '#101010',
})

const Line = line.theme({
  position: 'absolute',
  top: 70,
  left: 30,
})

const ItemBox = Box.attrs({
  contentAlignX: { xs: 'center', md: 'left' },
})

export default () => {
  let windowSize = {}
  if (process.browser) {
    windowSize = useWindowSize()
  }

  const showLine = windowSize.innerWidth >= 768
  const centeredText = windowSize.innerWidth < 768

  return (
    <Section id="easy-setup">
      <Container>
        <Row>
          <Col component={element} contentAlignX={{ xs: 'center', md: 'left' }}>
            <Heading level1>Easy setup</Heading>
          </Col>
        </Row>
        {windowSize.innerWidth && (
          <Row
            component={element}
            contentAlignX="center"
            gap={64}
            size={{ xs: 8, sm: 6, lg: 3 }}
            gutter={0}
          >
            <Col>
              <ItemBox>
                {showLine && <Line />}
                <Box icon>
                  <Icon name="account" />
                </Box>
                <Heading level2 label="Vanilla Account" />
                <Text light centered={centeredText}>
                  Create Vanilla account by{' '}
                  <Link primary href="">
                    singing up with Google
                  </Link>
                </Text>
              </ItemBox>
            </Col>
            <Col>
              <ItemBox>
                {showLine && <Line />}
                <Box icon>
                  <Icon name="payment-pointer" />
                </Box>
                <Heading level2 label="Payment Pointer" />
                <Text light centered={centeredText}>
                  Add Payment Pointer to{' '}
                  <Link primary href="">
                    Wallet
                  </Link>{' '}
                  of your choice
                </Text>
              </ItemBox>
            </Col>
            <Col>
              <ItemBox>
                {showLine && <Line />}
                <Box icon>
                  <Icon name="code-snippet" />
                </Box>
                <Heading level2 label="Code Snippet" />
                <Text light centered={centeredText}>
                  Place generate Code Snippet to head of your HTML
                </Text>
              </ItemBox>
            </Col>
            <Col>
              <ItemBox>
                <Box icon>
                  <Icon name="api" />
                </Box>
                <Heading level2 label="API" />
                <Text light centered={centeredText}>
                  Call our API whenever you want to verify payments
                </Text>
              </ItemBox>
            </Col>
          </Row>
        )}
      </Container>
    </Section>
  )
}
