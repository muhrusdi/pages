import styled from "styled-components"

export const Grid = styled.div`
  a {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    height: 120px;
    @media (min-width: 640px) {
      height: 200px;
    }
    &:hover {
      img {
        object-fit: contain;
      }
    }
  }
`

export const IconList = styled.ul({
  svg: {
    height: 20,
    width: 20
  }
})

export const ImageStyled = styled.img`
  height: 200px;
  @media (min-width: 640px) {
    height: 400px;
  }
`
