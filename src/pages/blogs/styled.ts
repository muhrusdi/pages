import styled from "styled-components"

export const BlogItemFooter = styled.div`
  a {
    &:hover {
      color: rgba(156, 163, 175, var(--tw-text-opacity));
      & + span {
        color: white;
      }
    }
  }
`