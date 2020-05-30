import React from 'react'
import { Container, Row, Col } from '@vitus-labs/coolgrid'
import Section from 'base/Section'
import Heading from 'base/Heading'
import Box from 'base/Box'

export default () => (
  <Section id="plugins">
    <Container>
      <Row>
        <Heading level1>Plugins</Heading>
      </Row>
      <Row>
        <Col size={{ xs: 12, sm: 6, md: 2 }}>
          <Box>
            <Box icon>Coming soon</Box>
            <Heading level2 label="Wordpress" />
          </Box>
        </Col>
        <Col size={{ xs: 12, sm: 6, md: 2 }}>
          <Box>
            <Box icon>Coming soon</Box>
            <Heading level2 label="Express.js" />
          </Box>
        </Col>
        <Col size={{ xs: 12, sm: 6, md: 2 }}>
          <Box>
            <Box icon>Coming soon</Box>
            <Heading level2 label="Apache" />
          </Box>
        </Col>
        <Col size={{ xs: 12, sm: 6, md: 2 }}>
          <Box>
            <Box icon>Coming soon</Box>
            <Heading level2 label="Nginx" />
          </Box>
        </Col>
        <Col size={{ xs: 12, sm: 6, md: 4 }}>
          <Box>
            <Box icon>Want to help us?</Box>
          </Box>
        </Col>
      </Row>
    </Container>
  </Section>
)
