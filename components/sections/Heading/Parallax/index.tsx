import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Shape from 'base/Shape'

const Triangle = styled(Shape).attrs({
  name: 'triangle',
})`
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(0);
  transition: 0.1s;
`

const Circle = styled(Shape).attrs({
  name: 'circle',
})`
  position: absolute;
  right: 0;
  top: 35%;
  transform: translateY(0);
  transition: 0.1s;
`

const Rectangle = styled(Shape).attrs({
  name: 'rectangle',
})`
  position: absolute;
  left: 15%;
  bottom: -10%;
  transform: translateY(0);
  transition: 0.1s;
`

const Square = styled(Shape).attrs({
  name: 'square',
})`
  position: absolute;
  left: 48%;
  top: 0;
  transform: translateY(0);
  transition: 0.1s;
`

export default () => {
  const [scroll, setScroll] = useState(0)

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  })

  return (
    <>
      <Triangle style={{ transform: `translateY(${scroll * 0.3}px)` }} />
      <Circle style={{ transform: `translateY(${-scroll * 0.2}px)` }} />
      <Square style={{ transform: `translateY(${scroll * 0.4}px)` }} />
      <Rectangle style={{ transform: `translateY(${-scroll * 0.2}px)` }} />
    </>
  )
}
