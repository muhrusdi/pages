import styled from "styled-components"

export const CenterMenus = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  padding: 30px;
  ul {
    padding: 20px;
    background: #000;
    border: 1px solid #333;
    border-radius: .5rem;
    li {
      padding: 8px 0;
      @media (min-width: 640px) {
        position: relative;
        &:not(:first-of-type) {
          padding-left: 1rem;
          &:after {
            content: "/";
            position: absolute;
            left: 0;
            top: 0;
            color: rgba(156, 163, 175, var(--tw-bg-opacity));
            bottom: 0;
          }
        }
        &:last-of-type {
          &:after {
            display: none;
          }
        }
      }
    }
  }
`