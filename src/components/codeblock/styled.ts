import styled from "styled-components"

export const Line = styled.div`
  padding: 0 32px;
  position: relative;
`

export const Add = styled.span`
  left: 0;
  padding-left: 10px;
  color: rgba(52, 211, 153, var(--tw-bg-opacity));
  position: absolute;
  &:after {
    position: absolute;
    left: 0;
    width: 2px;
    background: rgba(52, 211, 153, var(--tw-bg-opacity));
    top: 0;
    bottom: 0;
    content: " ";
  }
`
export const Remove = styled.span`
  left: 0;
  padding-left: 10px;
  color: rgba(248, 113, 113, var(--tw-bg-opacity));
  position: absolute;
  &:after {
    position: absolute;
    left: 0;
    width: 2px;
    background: rgba(248, 113, 113, var(--tw-bg-opacity));
    top: 0;
    bottom: 0;
    content: " ";
  }
`

export const Lang = styled.div`
  background-color: rgb(1, 22, 39);
`

export const Pre = styled.pre`
  & > div:last-of-type {
    display: none;
  }
`