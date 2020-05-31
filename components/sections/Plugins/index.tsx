import React from 'react'
import { Container, Row, Col } from '@vitus-labs/coolgrid'
import { element } from 'base/base'
import Section from 'base/Section'
import Heading from 'base/Heading'
import Box from 'base/Box'

const ItemBox = Box.attrs({
  contentAlignX: { xs: 'center', lg: 'left' },
})

export default () => (
  <Section id="plugins">
    <Container>
      <Row>
        <Col component={element} contentAlignX={{ xs: 'center', md: 'left' }}>
          <Heading level1>Plugins</Heading>
        </Col>
      </Row>
      <Row
        component={element}
        contentAlignX={{ xs: 'center', lg: 'left' }}
        contentAlignY="top"
        size={{ xs: 8, sm: 4, md: 3, lg: 2 }}
        gap={{ xs: 16, sm: 40 }}
        gutter={{ xs: 24, md: 0 }}
      >
        <Col>
          <ItemBox>
            <Box icon>Coming soon</Box>
            <Heading level2 centered label="Wordpress" />
          </ItemBox>
        </Col>
        <Col>
          <ItemBox>
            <Box icon>Coming soon</Box>
            <Heading level2 centered label="Express.js" />
          </ItemBox>
        </Col>
        <Col>
          <ItemBox>
            <Box icon>Coming soon</Box>
            <Heading level2 centered label="Apache" />
          </ItemBox>
        </Col>
        <Col>
          <ItemBox>
            <Box icon>Coming soon</Box>
            <Heading level2 centered label="Nginx" />
          </ItemBox>
        </Col>
        <Col size={{ xs: 8, sm: 6, md: 4, lg: 3 }}>
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
