import React, { useState, useEffect } from 'react'
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

const afterContent = () => (
  <LinkList>
    <AnimationLink to="home" spy={true} smooth={true} duration={300}>
      <Link active label="About" />
    </AnimationLink>
    <AnimationLink to="how-it-works" spy={true} smooth={true} duration={300}>
      <Link label="How it works" />
    </AnimationLink>
    <AnimationLink to="easy-setup" spy={true} smooth={true} duration={300}>
      <Link label="Easy Setup" />
    </AnimationLink>
    <AnimationLink to="plugins" spy={true} smooth={true} duration={300}>
      <Link label="Plugins" />
    </AnimationLink>
    <Button
      google
      label="Sign in with Google"
      beforeContent={<Icon name="google" />}
    />
  </LinkList>
)

const beforeContent = () => (
  <>
    <Logo />
    <Badge>Experiment</Badge>
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
    beforeContent,
    afterContent,
    beforeContentCss: `
      & > * + * { 
        margin-left: 12px
    }`,
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

export default (props) => {
  const [sticked, setSticked] = useState(false)

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
    <Wrapper>
      <Inner sticked={sticked}>
        <Container>
          <Element {...props} />
        </Container>
      </Inner>
    </Wrapper>
  )
}
