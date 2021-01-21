import React from 'react'
import useWindowSize from '@rehooks/window-size'
import { Container, Row, Col } from '@vitus-labs/coolgrid'
import styled from 'styled-components'
import box from 'base/Box'
import heading from 'base/Heading'
import Text from 'base/Text'
import list from 'base/List'
import Link from 'base/Link'
import logo from 'base/Logo'
import shape from 'base/Shape'

const dataListA = [
  { label: 'Vanilla Home', link: 'https://vanilla.so' },
  { label: 'Vanilla Admin', link: 'https://admin.vanilla.so' },
  {
    label: 'Terms and Conditions',
    link: 'https://www.iubenda.com/terms-and-conditions/25767064',
  },
  {
    label: 'Privacy Policy',
    link: 'https://www.iubenda.com/privacy-policy/25767064',
  },
  {
    label: 'Cookie Policy',
    link: 'https://www.iubenda.com/privacy-policy/25767064/cookie-policy',
  },
]

const dataListB = [
  { label: 'Grant for the Web', link: 'https://www.grantfortheweb.org/' },
  { label: 'Coil', link: 'https://coil.com/' },
  { label: 'Puma Browser', link: 'https://www.pumabrowser.com/' },
  { label: 'Cinnamon', link: 'https://www.cinnamon.video/' },
]

const dataListC = [
  { label: 'Web Monetization', link: 'https://webmonetization.org/' },
  { label: 'Interledger', link: 'https://interledger.org/' },
  { label: 'GateHub', link: 'https://gatehub.net/' },
  { label: 'Uphold', link: 'https://uphold.com/' },
]

const Box = box.theme((t) => ({
  backgroundColor: t.color.primary,
  color: t.color.black,
  paddingTop: { xs: 64, md: 100 },
  paddingBottom: { xs: 32 },
  overflow: 'hidden',
}))

const List = list.styles(
  (css) => css`
    & * {
      font-weight: 500;
    }
  `
)

const FooterLink = styled.a`
  color: inherit;
  text-decoration: underline;
`

const Heading = heading.theme({ display: 'block' })

const FooterBox = box.theme({
  marginTop: 32,
  display: 'block',
})

const Logo = logo.theme({ height: 16 })

const Shape = styled(shape).attrs({
  name: 'vanilla',
})`
  position: absolute;
  right: 0;
  top: 0;
`

export default () => {
  let windowSize = { innerWidth: 0 }
  if (process.browser) {
    windowSize = useWindowSize()
  }

  const showShape = windowSize.innerWidth >= 768
  const showEmptyHeading = windowSize.innerWidth >= 576
  const showBRInFooter = windowSize.innerWidth <= 800

  const showBRInFooterXS = windowSize.innerWidth <= 400

  return (
    <Box>
      {showShape && <Shape />}
      <Container gutter={0}>
        <Row>
          <Col size={{ xs: 12, lg: 9 }}>
            <Heading reset level1 left>
              Project Vanilla is being developed as part of the{' '}
              <FooterLink
                href="https://dev.to/devteam/announcing-the-grant-for-the-web-hackathon-on-dev-3kd1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Grant for the Web hackathon
              </FooterLink>{' '}
              by{' '}
              <FooterLink
                href="https://www.cinnamon.video/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cinnamon
              </FooterLink>
              .
            </Heading>
          </Col>
        </Row>
        <Row size={{ xs: 12, sm: 4, lg: 3 }} gap={{ xs: 20, sm: 40, md: 80 }}>
          <Col>
            <Heading dark level2>
              Sitemap
            </Heading>
            <List data={dataListA} />
          </Col>
          <Col>
            <Heading dark level2>
              Learn more
            </Heading>
            <List data={dataListB} />
          </Col>
          <Col>
            {showEmptyHeading && (
              <Heading dark level2>
                &nbsp;
              </Heading>
            )}
            <List data={dataListC} />
          </Col>
        </Row>
        <FooterBox contentDirection="inline">
          <Text inline dark sm
                style={{
                  display:'flex',
                }}>
            Created with love over the weekend
            {showBRInFooter ? <br /> : ' '}
            in Prague, Czech Republic
            {showBRInFooterXS ? <br /> : ' '}
            by
            <Link
              style={{
                display:'inline-block',
                marginLeft:'8px',
                height:'100%',
              }}
              href="https://www.cinnamon.video/"
              target="_blank"
              rel="noreferrer"
            >
              <Logo name="cinnamon" />
            </Link>
          </Text>
          &nbsp;
        </FooterBox>
      </Container>
    </Box>
  )
}
