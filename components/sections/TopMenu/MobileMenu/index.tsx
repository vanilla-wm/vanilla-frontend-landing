import React from 'react'
import { element } from 'base/base'
import Menu from '../Menu'
import Icon from 'base/Icon'

const Wrapper = element
  .attrs({
    contentAlignY: 'top',
  })
  .theme({
    position: 'fixed',
    bgColor: '#955258',
    paddingX: { xs: 32, sm: 48 },
    paddingY: { xs: 40, sm: 48 },
    zIndex: 1000,
    backgroundColor: 'black',
  })
  .styles(
    (css) => css`
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
    `
  )

export default ({ onClose }) => (
  <Wrapper
    vertical
    beforeContent={<Icon name="close" onClick={onClose} />}
    beforeContentAlignX="right"
  >
    <Menu handleClick={onClose} vertical />
  </Wrapper>
)
