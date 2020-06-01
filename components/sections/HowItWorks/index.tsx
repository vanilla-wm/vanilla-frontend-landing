import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from '@vitus-labs/coolgrid'
import Section from 'base/Section'
import heading from 'base/Heading'
import Category from './Category'
import AnimBackground from './AnimBackground'
import step1 from './animations/step1/animation.json'
import step2 from './animations/step2/animation.json'
import step3 from './animations/step3/animation.json'
import Lottie from 'lottie-react-web'
const TIMEOUT = 8000

const data = {
  0: step1,
  1: step2 ,
  2: step3,
}

const Heading = heading.styles(
  (css) => css`
    align-self: center;
    @media screen and (min-width: 768px) {
      align-self: flex-start;
    }
  `
)

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
  const [isCounterActive] = useState(true)

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
              text="When users visit your site, they request content and initialize Web Monetization"
              onClick={() => boxEvent(0)}
              active={active === 0}
            />
            <Category
              index={2}
              title="Payment Verification"
              text="Use Vanilla API to verify payment streams from users before enabling exclusive content"
              onClick={() => boxEvent(1)}
              active={active === 1}
            />
            <Category
              index={3}
              title="Content Delivery"
              text="The users get requested content and you are paid 🎉"
              onClick={() => boxEvent(2)}
              active={active === 2}
            />
          </Col>
          <Col size={{ xs: 12, lg: 8 }}>
            <AnimBackground />
            <Lottie
              options={{
              loop: active === 2,
              animationData: data[active],
              }}
            />
          </Col>
        </Row>
      </Container>
    </Section>
  )
}
