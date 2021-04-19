import styled from "styled-components"

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