import styled, { keyframes } from "styled-components"
import Slider from "react-slick"

export const GithubItem = styled.li``

const anim = keyframes`
  0%{background-position:0% 14%}
  50%{background-position:100% 87%}
  100%{background-position:0% 14%}
`

export const BGAnimated = styled.div`
  background: linear-gradient(45deg, #7e22ce, #4c1d95);
  background-size: 400% 400%;
  animation: ${anim} 10s ease infinite;
`

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

export const SlickStyled = styled(Slider)`
  .slick-list {
    height: 40px !important;
    .slick-track {
      & > div {
        border: none;
        height: 40px;
      }
    }
  }
  .slick-dots {
    top: 0;
    left: -66px;
    li {
      display: block;
      height: 8px;
      width: 8px;
      &.slick-active {
        button {
          &:before {
            color: white;
          }
        }
      }
    }
  }
`

export const SlickItem = styled("div")`
  & > div {
    height: 40px;
    display: flex;
    align-items: center;
  }
`
