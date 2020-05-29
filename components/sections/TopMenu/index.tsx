import React from 'react'
import { Link as AnimationLink } from 'react-scroll'
import { element } from 'base/base'
import LinkList from 'base/LinkList'
import Link from 'base/Link'
import Logo from 'base/Logo'
import Button from 'base/Button'
import Badge from 'base/Badge'

const afterContent = () => (
  <LinkList>
    <AnimationLink to="home" spy={true} smooth={true} duration={300}>
      <Link href="#" label="About" />
    </AnimationLink>
    <AnimationLink to="how-it-works" spy={true} smooth={true} duration={300}>
      <Link href="#" label="Easy Setup" />
    </AnimationLink>
    <AnimationLink to="easy-setup" spy={true} smooth={true} duration={300}>
      <Link href="#" label="Easy Setup" />
    </AnimationLink>
    <AnimationLink to="plugins" spy={true} smooth={true} duration={300}>
      <Link href="#" label="Plugins" />
    </AnimationLink>
    <Button google label="Sign in with Google" beforeContent={'logo'} />
  </LinkList>
)

const beforeContent = () => (
  <>
    <Logo />
    <Badge>Experimental</Badge>
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
    paddingX: 72,
  })
