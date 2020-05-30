import React from 'react'
import styled, { keyframes } from 'styled-components'
import { element } from 'base/base'

const rightSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`

const leftSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const wrapperAnim = keyframes`
  to {
    clip: rect(auto, auto, auto, auto);
  }

`

const Root = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  clip: rect(0px, 30px, 30px, 15px);
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  animation-duration: 0.01s;
  animation-delay: 1.5s;
  animation-name: ${wrapperAnim};
`

const Left = styled.div`
  width: 24px;
  height: 24px;
  border: 3px solid #feb611;
  border-radius: 15px;
  position: absolute;
  clip: rect(0px, 15px, 30px, 0px);
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  animation-duration: 3s;
  animation-name: ${leftSpin};
`

const Right = styled.div`
  width: 24px;
  height: 24px;
  border: 3px solid #feb611;
  border-radius: 15px;
  position: absolute;
  clip: rect(0px, 15px, 30px, 0px);
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  animation-duration: 1.5s;
  animation-name: ${rightSpin};
`

const Wrapper = styled.div`
  position: relative;
  height: 30px;
  width: 30px;
  color: #feb611;
`

const Label = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translateX(-50%) translateY(-50%);
`

const StaticNumber = element
  .attrs({ contentAlignX: 'center' })
  .theme((t) => ({
    height: 30,
    width: 30,
    border: `3px solid white`,
    borderRadius: 160,
    marginRight: 16,
    active: {
      borderColor: t.color.primary,
      color: t.color.primary,
    },
  }))
  .multiple({ active: true })

export default ({ label, active }) =>
  active ? (
    <Wrapper>
      <Label>{label}</Label>
      <Root>
        <Left />
        <Right />
      </Root>
    </Wrapper>
  ) : (
    <StaticNumber label={label} />
  )
