import React from 'react'
import { Container, Row, Col } from '@vitus-labs/coolgrid'
import Section from 'base/Section'
import Heading from 'base/Heading'
import Box from 'base/Box'
import Text from 'base/Text'

export default () => (
  <Section id="plugins">
    <Container>
      <Row>
        <Heading level1>Plugins</Heading>
      </Row>
      <Row size={{ xs: 12, sm: 6, md: 3 }}>
        <Col>
          <Box>
            <Heading primary level2 label="Wordpress" />
            <Text>Some text here</Text>
          </Box>
        </Col>
        <Col>
          <Box>
            <Heading primary level2 label="Express.js" />
            <Text>Some text here</Text>
          </Box>
        </Col>
        <Col>
          <Box>
            <Heading primary level2 label="Code Snippet" />
            <Text>Some text here</Text>
          </Box>
        </Col>
        <Col>
          <Box>
            <Heading primary level2 label="API" />
            <Text>Some text here</Text>
          </Box>
        </Col>
      </Row>
    </Container>
  </Section>
)
