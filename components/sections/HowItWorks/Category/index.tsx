import React from 'react'
import box from '../Box'
import Heading from 'base/Heading'
import Text from 'base/Text'
import Number from '../Number'

const Box = box.styles(
  (css) => css`
    & + & {
      border-top: 1px solid #3a3a3c;
    }
  `
)

const NumberWrapper = box.theme({ height: 30, width: 30, marginRight: 16 })

export default ({ active, onClick, title, text, index }) => (
  <Box
    innerSpaceLg
    onClick={onClick}
    beforeContentAlignY="top"
    beforeContent={
      <NumberWrapper>
        <Number active={active} label={index} />
      </NumberWrapper>
    }
  >
    <Heading primary={active} level2>
      {title}
    </Heading>
    <Text light>{text}</Text>
  </Box>
)
