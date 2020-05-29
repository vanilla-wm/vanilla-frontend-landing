import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from '@vitus-labs/coolgrid'
import Section from 'base/Section'
import Heading from 'base/Heading'
import Text from 'base/Text'
import Box from './Box'

const TIMEOUT = 3000

const data = {
  0: <Box>content A</Box>,
  1: <Box>content B</Box>,
  2: <Box>content C</Box>,
}

export default () => {
  const iterate = () => {
    if (active === 2) {
      setActive(0)
    } else {
      setActive((active) => active + 1)
    }
  }

  const [active, setActive] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [isCounterActive, setCounterActive] = useState(true)

  const reset = () => {
    setSeconds(0)
  }

  const boxEvent = (id) => {
    reset()
    setActive(id)

    if (isCounterActive && id === active) setCounterActive(false)
    else {
      setCounterActive(true)
    }
  }

  useEffect(() => {
    let interval = null
    if (isCounterActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1)
      }, 1000)

      if (seconds !== 0 && seconds % (TIMEOUT / 1000) === 0) {
        iterate()
      }
    } else if (!isCounterActive && seconds !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isCounterActive, seconds])

  return (
    <Section id="how-it-works">
      <Heading level1>How it works</Heading>
      <Container>
        <Row>
          <Col>
            <Box onClick={() => boxEvent(0)}>
              <Heading level2>Content Request</Heading>
              <Text>User requests content on your web or mobile app</Text>
            </Box>
            <Box onClick={() => boxEvent(1)}>
              <Heading level2>Payment Verification</Heading>
              <Text>Your back-end verifies payment stream using our API</Text>
            </Box>
            <Box onClick={() => boxEvent(2)}>
              <Heading level2>Content Delivery</Heading>
              <Text>Content Delivery</Text>
            </Box>
          </Col>
          <Col>{data[active]}</Col>
        </Row>
      </Container>
    </Section>
  )
}
