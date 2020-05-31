import React, { useState, useEffect } from 'react'
import useWindowSize from '@rehooks/window-size'
import { Link as AnimationLink } from 'react-scroll'
import { throttle } from 'lodash'
import { Container } from '@vitus-labs/coolgrid'
import { element as Element } from 'base/base'
import LinkList from 'base/LinkList'
import Link from 'base/Link'
import Icon from 'base/Icon'
import Logo from 'base/Logo'
import Button from 'base/Button'
import Badge from 'base/Badge'
import Menu from './Menu'
import MobileMenu from './MobileMenu'

const beforeContent = () => (
  <>
    <Logo name="vanilla" />
    <Badge>Experimental</Badge>
  </>
)

const Wrapper = Element.config({ name: 'section/TopMenu/Wrapper' })
  .attrs({
    id: 'home',
    block: true,
  })
  .theme({
    height: 72,
  })

const Inner = Element.config({ name: 'section/TopMenu/Inner' })
  .attrs({
    id: 'home',
    block: true,
  })
  .theme((t) => ({
    boxSizing: 'content-box',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 'inherit',
    width: 'inherit',
    backgroundColor: t.color.black,
    paddingX: 16,
    zIndex: 100,
  }))
  .variants({
    sticked: {
      borderBottom: `1px solid #48484A`,
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
  let windowSize = {}
  if (process.browser) {
    windowSize = useWindowSize()
  }

  const [sticked, setSticked] = useState(false)
  const [isOpenMenu, setOpenMenu] = useState(true)

  const showHamburger = windowSize.innerWidth < 992

  const handleScroll = (e) => {
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
                showHamburger ? (
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
