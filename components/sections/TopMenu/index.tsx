import React from 'react'
import { element } from 'base/base'
import Link from 'base/Link'

const afterContent = () => (
  <>
    <Link href="#" label="How It Works" />
    <Link href="#" label="How It Works" />
    <Link href="#" label="How It Works" />
    <Link href="#" label="How It Works" />
  </>
)

const beforeContent = () => 'logo'

export default element
  .config({ name: 'section/TopMenu' })
  .attrs({
    block: true,
    beforeContent,
    afterContent,
  })
  .theme({
    height: 72,
    paddingX: 72,
  })
