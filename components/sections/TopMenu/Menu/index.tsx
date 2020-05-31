import React, { useState } from 'react'
import { Link as AnimationLink } from 'react-scroll'
import LinkList from 'base/LinkList'
import Link from 'base/Link'
import Button from 'base/Button'
import Icon from 'base/Icon'

export default ({ handleClick, vertical }) => {
  const [active, setActive] = useState('home')

  console.log(active)

  return (
    <LinkList vertical={vertical}>
      <AnimationLink
        to="home"
        spy={true}
        smooth={true}
        duration={300}
        offset={-60}
        onSetActive={() => setActive('home')}
      >
        <Link label="About" onClick={handleClick} />
      </AnimationLink>
      <AnimationLink
        to="how-it-works"
        spy={true}
        smooth={true}
        duration={300}
        offset={-60}
        onSetActive={() => setActive('how-it-works')}
      >
        <Link label="How it works" onClick={handleClick} />
      </AnimationLink>
      <AnimationLink
        to="easy-setup"
        spy={true}
        smooth={true}
        duration={300}
        offset={-60}
        onSetActive={() => setActive('easy-setup')}
      >
        <Link label="Easy Setup" onClick={handleClick} />
      </AnimationLink>
      <AnimationLink
        to="plugins"
        spy={true}
        smooth={true}
        duration={300}
        offset={-60}
        onSetActive={() => setActive('plugins')}
      >
        <Link label="Plugins" onClick={handleClick} />
      </AnimationLink>
      <Button
        google
        label="Sign in with Google"
        beforeContent={<Icon name="google" />}
        href="https://api.vanilla.so/auth/google"
      />
    </LinkList>
  )
}
