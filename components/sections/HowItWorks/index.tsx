import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from '@vitus-labs/coolgrid'
import Section from 'base/Section'
import Heading from 'base/Heading'
import Category from './Category'
import AnimBackground from './AnimBackground'
import Step1 from './animations/Step1'
import Step2 from './animations/Step2'
import Step3 from './animations/Step3'

const TIMEOUT = 9000

const data = {
  0: <Step1 />,
  1: <Step2 />,
  2: <Step3 />,
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
        <Row gap={{ xs: 32, xl: 64 }} gutter={0}>
          <Col size={{ xs: 12, lg: 4 }}>
            <Heading level1>How it works</Heading>
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
          <Col size={{ xs: 12, lg: 8 }}>
            <AnimBackground />
            {data[active]}
          </Col>
        </Row>
      </Container>
    </Section>
  )
}
