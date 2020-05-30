import React from 'react'
import box from '../Box'
import Heading from 'base/Heading'
import Text from 'base/Text'

const Box = box.styles(
  (css) => css`
    & + & {
      border-top: 1px solid #3a3a3c;
    }
  `
)

export default ({ active, onClick, title, text }) => (
  <Box innerSpaceLg onClick={onClick}>
    <Heading primary={active} level2>
      {title}
    </Heading>
    <Text>{text}</Text>
  </Box>
)
