import styled from "styled-components"

export const EditorStyled = styled.div`
  position: relative;
  &:after {
    background-color: rgba(16, 185, 129, var(--tw-bg-opacity));
    transform: rotate(-3deg);
    content: " ";
    position: absolute;
    left: -10px;
    right: -10px;
    bottom: 40px;
    top: 40px;
    z-index: 1;
    border-radius: 16px;
    @media (min-width: 640px) {
      left: -30px;
      right: -10px;
    }
  }
  /* &:before {
    background-color: rgba(75, 85, 99, var(--tw-bg-opacity));
    content: " ";
    position: absolute;
    left: -20px;
    right: -20px;
    bottom: -20px;
    top: 40px;
    z-index: 0;
    border-radius: 16px;
  } */
`