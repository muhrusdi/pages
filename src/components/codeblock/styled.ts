import styled from "styled-components"

export const Line = styled.div`
  padding: 0 1.3em;
  position: relative;
`

export const Add = styled.span`
  left: 0;
  padding-left: 13px;
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
  padding-left: 13px;
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