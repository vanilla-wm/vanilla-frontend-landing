import React from 'react'
import { element, list } from 'base/base'

const Link = element
  .attrs({
    tag: 'a',
  })
  .theme({
    color: 'inherit',
    hover: {
      textDecoration: 'underline',
    },
  })

const ItemWrapper = element.theme((t) => ({
  paddingY: 8,
  color: t.color.black,
}))

const Item = ({ label, link }) => (
  <ItemWrapper>
    <Link href={link} target="_blank" rel="noopener noreferrer">
      → {label}
    </Link>
  </ItemWrapper>
)

export default list
  .attrs({
    contentDirection: 'rows',
    component: Item,
  })
  .theme((t) => ({
    color: t.color.black,
  }))
