import React from 'react'
import box from 'base/Box'

const Box = box
  .attrs({
    contentAlignX: 'center',
  })
  .theme((t) => ({
    height: 48,
    backgroundColor: t.color.primary,
    color: t.color.black,
    fontWeight: 'bold',
  }))

export default () => <Box>Created during hackhaton by</Box>
