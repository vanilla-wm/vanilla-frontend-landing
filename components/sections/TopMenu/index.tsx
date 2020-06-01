import React, { useState, useEffect } from 'react'
import useWindowSize from '@rehooks/window-size'
import { Link as AnimationLink } from 'react-scroll'
import { throttle } from 'lodash'
import { Container } from '@vitus-labs/coolgrid'
import { element as Element } from 'base/base'
import Icon from 'base/Icon'
import Link from 'base/Link'
import Logo from 'base/Logo'
import Badge from 'base/Badge'
import Menu from './Menu'
import MobileMenu from './MobileMenu'

const beforeContent = () => (
  <>
    <AnimationLink
      to="home"
      spy={true}
      smooth={true}
      duration={300}
      offset={-60}
    >
      <Link plain>
        <Logo name="vanilla" />
      </Link>
    </AnimationLink>
    <AnimationLink
      to="home"
      spy={true}
      smooth={true}
      duration={300}
      offset={-60}
    >
      <Link plain>
        <Badge>Experimental</Badge>
      </Link>
    </AnimationLink>
  </>
)

const Wrapper = Element.config({ name: 'section/TopMenu/Wrapper' })
  .attrs({
    id: 'home',
    block: true,
  })
  .theme({
    height: 72,
    overflow: 'hidden',
  })

const Inner = Element.config({ name: 'section/TopMenu/Inner' })
  .attrs({
    block: true,
  })
  .theme((t) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 'inherit',
    backgroundColor: t.color.black,
    paddingX: 16,
    zIndex: 100,
    transition: '0.3s',
    borderBottom: `1px solid black`,
  }))
  .variants({
    sticked: {
      borderColor: '#48484A',
    },
  })

const Content = Element.attrs({
  block: true,
  beforeContentCss: `
      & > * + * { 
        margin-left: 12px
    }`,
})

export default (props) => {
  let windowSize = { innerWidth: 0 }
  if (process.browser) {
    windowSize = useWindowSize()
  }

  const [sticked, setSticked] = useState(false)
  const [isOpenMenu, setOpenMenu] = useState(false)

  const showHamburger = windowSize.innerWidth < 992

  const handleScroll = () => {
    window.scrollY === 0 ? setSticked(false) : setSticked(true)
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('scroll', throttle(handleScroll, 100))

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  })

  return (
    <>
      <Wrapper>
        <Inner sticked={sticked}>
          <Container data-test="container">
            <Content
              {...props}
              beforeContent={beforeContent}
              afterContent={
                windowSize.innerWidth !== 0 && showHamburger ? (
                  <Icon name="menu" onClick={() => setOpenMenu(true)} />
                ) : (
                  Menu
                )
              }
            />
          </Container>
        </Inner>
      </Wrapper>
      {isOpenMenu && <MobileMenu onClose={() => setOpenMenu(false)} />}
    </>
  )
}
