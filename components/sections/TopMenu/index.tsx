import React from 'react'
import { Link as AnimationLink } from 'react-scroll'
import { element } from 'base/base'
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

export default element
  .config({ name: 'section/TopMenu' })
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
  .theme({
    height: 72,
    paddingX: 16,
  })
