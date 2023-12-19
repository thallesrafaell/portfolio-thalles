import styled from 'styled-components'
import { Cores } from '../../styles'

export const HeaderBg = styled.div`
  position: sticky;
  top: 0;
  background-color: ${Cores.cinzaEscuro};
`

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 35px 0 20px;

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
