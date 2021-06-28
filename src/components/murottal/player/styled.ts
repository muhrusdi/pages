import styled from "styled-components"

export const StyledContent = styled.div`
  border-radius: 3px;
  padding: 20px;
  font-size: 14px;
  color: black;
  input {
    height: 2px;
  }
  position: absolute;
  top: -90px;
  will-change: transform;
`

export const StyledArrow = styled.span`
  fill: rgba(15, 23, 42, var(--tw-bg-opacity));
  position: absolute;
  pointer-events: none;
  width: 10px;
  height: 10px;
  transform: rotate(0deg);
  will-change: transform;
  top: 100%;
  direction: ltr;
  left: 79.5px;
`


export const PlayerStyled = styled.div`
  ul {
    li {
      button {
        vertical-align: middle;
      }
    }
  }
`

export const LeftControl = styled.div`
  flex: none;
  button {
    &:focus {
      outline: none;
    }
  }
  .amplitude-repeat {
    .repeat {
      display: none;
      font-size: 9px;
    }
    &.amplitude-repeat-on {
      .repeat {
        display: block;
      }
    }
  }
  .amplitude-play-pause {
    .play {
      display: block;
    }
    .pause {
      display: none;
    }
    &.amplitude-playing {
      .play {
        display: none;
      }
      .pause {
        display: block;
      }
    }
  }
`

export const RightControl = styled.div`
  flex: none;
`

export const TimeContainer = styled.div`
  flex-basis: 100%;
  input {
    height: 2px;
    cursor: pointer;
  }
  progress {
    height: 1px;
  }
`

export const GridItem = styled.button`
  &:focus {
    outline: none;
  }
  text-align: left;
  .image {
    .play {
      opacity: 0;
    }
    &:hover {
      .play {
        opacity: 1;
      }
    }
  }
`