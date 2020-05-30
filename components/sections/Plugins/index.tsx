import React from 'react'
import { Container, Row, Col } from '@vitus-labs/coolgrid'
import { element } from 'base/base'
import Section from 'base/Section'
import Heading from 'base/Heading'
import Box from 'base/Box'

export default () => (
  <Section id="plugins">
    <Container>
      <Row>
        <Col css="align-items: flex-start;">
          <Heading level1>Plugins</Heading>
        </Col>
      </Row>
      <Row
        component={element}
        contentAlignX={{ xs: 'center', md: 'left' }}
        contentAlignY="top"
        size={{ xs: 12, sm: 4, md: 3, lg: 2 }}
        gap={{ xs: 16, sm: 32 }}
      >
        <Col>
          <Box>
            <Box icon>Coming soon</Box>
            <Heading level2 centered label="Wordpress" />
          </Box>
        </Col>
        <Col>
          <Box>
            <Box icon>Coming soon</Box>
            <Heading level2 centered label="Express.js" />
          </Box>
        </Col>
        <Col>
          <Box>
            <Box icon>Coming soon</Box>
            <Heading level2 centered label="Apache" />
          </Box>
        </Col>
        <Col>
          <Box>
            <Box icon>Coming soon</Box>
            <Heading level2 centered label="Nginx" />
          </Box>
        </Col>
        <Col size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Box>
            <Box icon iconBigger>
              Want to help us?
            </Box>
          </Box>
        </Col>
      </Row>
    </Container>
  </Section>
)
