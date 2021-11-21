import styled from "styled-components"

export const GithubItem = styled.li``

export const CenterMenus = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 38px;
  padding: 18px 20px;
  @media (min-width: 640px) {
    position: relative;
    top: 0;
  }
  ul {
    padding: 64px 14px 14px 14px;
    @media (min-width: 640px) {
      padding: 0;
      ${GithubItem} {
        padding-left: 1rem !important;
      }
    }
    li {
      padding: 8px 0;
      @media (min-width: 640px) {
        position: relative;
        &:not(:first-of-type) {
          padding-left: 1.5rem;
          /* &:after {
            content: "/";
            position: absolute;
            left: 9px;
            top: 8px;
            color: rgba(100, 116, 139, var(--tw-bg-opacity));
            bottom: 0;
          } */
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
