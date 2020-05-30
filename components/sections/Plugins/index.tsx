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
      <Row>
        <Col size={{ xs: 12, sm: 6, md: 2 }}>
          <Box>
            <Box icon>hello</Box>
            <Heading level2 label="Wordpress" />
            <Text>Some text here</Text>
          </Box>
        </Col>
        <Col size={{ xs: 12, sm: 6, md: 2 }}>
          <Box>
            <Box icon>hello</Box>
            <Heading level2 label="Express.js" />
            <Text>Some text here</Text>
          </Box>
        </Col>
        <Col size={{ xs: 12, sm: 6, md: 2 }}>
          <Box>
            <Box icon>hello</Box>
            <Heading level2 label="Code Snippet" />
            <Text>Some text here</Text>
          </Box>
        </Col>
        <Col size={{ xs: 12, sm: 6, md: 2 }}>
          <Box>
            <Box icon>hello</Box>
            <Heading level2 label="API" />
            <Text>Some text here</Text>
          </Box>
        </Col>
        <Col size={{ xs: 12, sm: 6, md: 4 }}>
          <Box>
            <Box icon>hello</Box>
            <Heading level2 label="API" />
            <Text>Some text here</Text>
          </Box>
        </Col>
      </Row>
    </Container>
  </Section>
)
