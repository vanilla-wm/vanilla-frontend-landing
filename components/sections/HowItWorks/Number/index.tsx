import React from 'react'
import styled, { keyframes } from 'styled-components'

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
  width: 100px;
  height: 100px;
  position: absolute;
  clip: rect(0px, 100px, 100px, 50px);
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  animation-duration: 0.01s;
  animation-delay: 1.5s;
  animation-name: ${wrapperAnim};
`

const Left = styled.div`
  width: 80px;
  height: 80px;
  border: 10px solid #feb611;
  border-radius: 50px;
  position: absolute;
  clip: rect(0px, 50px, 100px, 0px);
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  animation-duration: 3s;
  animation-name: ${leftSpin};
`

const Right = styled.div`
  width: 80px;
  height: 80px;
  border: 10px solid #feb611;
  border-radius: 50px;
  position: absolute;
  clip: rect(0px, 50px, 100px, 0px);
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  animation-duration: 1.5s;
  animation-name: ${rightSpin};
`

const Inner = styled.span`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  position: absolute;
  opacity: 0.5;
  border: 10px solid #5cb16e;
`

export default () => (
  <Root>
    <Left>
      <Inner />
    </Left>
    <Right>
      <Inner />
    </Right>
  </Root>
)
