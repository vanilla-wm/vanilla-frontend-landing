import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from '@vitus-labs/coolgrid'
import Section from 'base/Section'
import Heading from 'base/Heading'
import Box from './Box'
import Category from './Category'

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
    if (id !== active) {
      reset()
      setActive(id)
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
      <Container>
        <Row>
          <Heading level1>How it works</Heading>
        </Row>
        <Row gap={32} gutter={0}>
          <Col size={{ xs: 12, md: 4 }}>
            <Category
              index={1}
              title="Content Request"
              text="User requests content on your web or mobile app"
              onClick={() => boxEvent(0)}
              active={active === 0}
            />
            <Category
              index={2}
              title="Payment Verification"
              text="Your back-end verifies payment stream using our API"
              onClick={() => boxEvent(1)}
              active={active === 1}
            />
            <Category
              index={3}
              title="Content Delivery"
              text="You are paid and your user is happy 🎉"
              onClick={() => boxEvent(2)}
              active={active === 2}
            />
          </Col>
          <Col size={{ xs: 12, md: 7 }}>{data[active]}</Col>
        </Row>
      </Container>
    </Section>
  )
}
