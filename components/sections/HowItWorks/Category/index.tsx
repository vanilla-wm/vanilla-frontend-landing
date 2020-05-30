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

// const Number = element
//   .attrs({ contentAlignX: 'center' })
//   .theme((t) => ({
//     height: 30,
//     width: 30,
//     border: `3px solid white`,
//     borderRadius: 160,
//     marginRight: 16,
//     active: {
//       borderColor: t.color.primary,
//       color: t.color.primary,
//     },
//   }))
//   .multiple({ active: true })

export default ({ active, onClick, title, text, index }) => (
  <Box innerSpaceLg onClick={onClick}>
    <Heading
      primary={active}
      level2
      beforeContent={
        <NumberWrapper>
          <Number active={active} label={index} />
        </NumberWrapper>
      }
    >
      {title}
    </Heading>
    <Text>{text}</Text>
  </Box>
)
