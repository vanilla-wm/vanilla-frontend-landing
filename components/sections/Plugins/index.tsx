import React from 'react'
import { Container, Row, Col } from '@vitus-labs/coolgrid'
import { element } from 'base/base'
import Section from 'base/Section'
import Heading, { HeadingWrapper } from 'base/Heading'
import Icon from 'base/Icon'
import link from 'base/Link'
import Box from 'base/Box'

const ItemBox = Box.attrs({
  contentAlignX: { xs: 'center', lg: 'left' },
})

const MailTo = link.styles(
  (css) => css`
    align-self: center;
    @media screen and (min-width: 768px) {
      align-self: flex-start;
    }
  `
)

export default () => (
  <Section id="plugins">
    <Container>
      <Row>
        <Col component={element}>
          <HeadingWrapper>
            <Heading level1>Plugins</Heading>
          </HeadingWrapper>
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
            <Box icon>
              <span>Coming soon</span>
              <Icon name="nodeJs" absolute opacity />
            </Box>
            <Heading level2 centered label="Node.js" />
          </ItemBox>
        </Col>
        <Col>
          <ItemBox>
            <Box icon>
              <span>Coming soon</span>
              <Icon name="dartJs" absolute opacity />
            </Box>
            <Heading level2 centered label="Dart.js" />
          </ItemBox>
        </Col>
        <Col>
          <ItemBox>
            <Box icon>
              <span>Coming soon</span>
              <Icon name="wordpress" absolute />
            </Box>
            <Heading level2 centered label="Wordpress" />
          </ItemBox>
        </Col>
        <Col>
          <ItemBox>
            <Box icon>
              <span>Coming soon</span>
              <Icon name="express" absolute />
            </Box>
            <Heading level2 centered label="Express.js" />
          </ItemBox>
        </Col>
        <Col size={{ xs: 8, sm: 6, md: 4, lg: 3 }}>
          <Box>
            <MailTo
              href="mailto:contact@vanilla.so"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box icon iconBigger>
                <span>Want to help us?</span>
              </Box>
            </MailTo>
          </Box>
        </Col>
      </Row>
    </Container>
  </Section>
)
