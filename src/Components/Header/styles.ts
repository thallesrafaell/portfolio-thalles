import styled from 'styled-components'
import { Cores } from '../../styles'

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 35px;

  h2 {
    font-size: 26px;
    font-weight: bold;
  }
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 45px;

  li {
    font-size: 18px;
    transition-duration: 0.4s;

    &:hover {
      color: ${Cores.cinzaClaro};
      transition-duration: 0.4s;
    }
  }
`
