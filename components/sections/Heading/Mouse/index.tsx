import styled, { keyframes } from 'styled-components'

const scroll = keyframes`
  0% { opacity: 0; transform: translateX(-50%);}
  10% { transform: translateX(-50%) translateY(0); opacity: 1; }
  100% { transform: translateX(-50%) translateY(15px); opacity: 0;}
`

export default styled.span`
  position: relative;
  display: block;
  height: 42px;
  width: 24px;
  border-radius: 160px;
  border: 2px solid #48484a;
  margin-bottom: 16px;

  &::after {
    position: absolute;
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    background-color: white;
    border-radius: 160px;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    animation-name: ${scroll};
    animation-duration: 1.8s;
    animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
    animation-iteration-count: infinite;
  }
`
