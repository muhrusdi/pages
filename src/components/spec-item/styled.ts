import styled from "styled-components"

export const EntityCompanyGroup = styled.ul`
  & > li {
    &:not(:first-of-type) {
      margin-top: 40px;
    }
  }
`

export const SpecsGroup = styled.div`
  .icon-wrapper {
    padding-right: 1rem;
    svg {
      width: 60px;
      height: 60px;
    }
    @media (min-width: 640px) {
      padding-right: 2rem;
      svg {
        width: 135px;
        height: 135px;
      }
    }
  }
  .content {
    @media (min-width: 640px) {
      padding-left: 165px;
    }
  }
  .close {
    right: 0;
    top: 50px;
    svg {
      width: 34px;
      height: 34px;
    }
    @media (min-width: 640px) {
      top: 95px;
      svg {
        width: 54px;
        height: 54px;
      }
    }
  }
`

export const EntityPositionGroup = styled.ul`
  margin-top: 14px;
  padding-left: 20px;
  & > li {
    position: relative;
    padding-left: 60px;
    padding-bottom: 20px;
    p {
      color: rgba(100, 116, 139, var(--tw-text-opacity));
    }
    &:after {
      content: " ";
      margin: 13px 0;
      left: 0;
      height: 10px;
      width: 10px;
      background: rgba(99, 102, 241, var(--tw-bg-opacity));
      position: absolute;
      top: 0;
      border-radius: 50%;
    }
    &:not(:last-of-type) {
      &:before {
        content: " ";
        left: 5px;
        width: 1px;
        background: #fff;
        position: absolute;
        bottom: 5px;
        border-radius: 1px;
        background: rgba(100, 116, 139, .5);
        top: 38px;
      }
    }
  }
`

export const CompanyLogo = styled.div`
  width: 54px;
  flex: none;
`