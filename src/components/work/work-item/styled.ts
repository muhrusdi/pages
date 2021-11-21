import styled from "styled-components"
import { Content, Arrow } from "@radix-ui/react-tooltip"

export const TechIcon = styled.div`
  margin: 0 -4px;
  & > div {
    padding: 0 4px;
  }
`

export const TooltipContentStyled = styled(Content)``
export const TooltipArrowStyled = styled(Arrow)`
  fill: rgba(17, 24, 39, var(--tw-bg-opacity));
`
