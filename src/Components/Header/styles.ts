import styled from 'styled-components'
import { Cores } from '../../styles'
import { Link } from 'react-scroll'

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
    color: ${Cores.azul};

    span {
      color: ${Cores.branco};
    }
  }
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 45px;

  li {
    font-size: 18px;
    transition-duration: 0.4s;

    a {
      font-size: 18px;
      transition-duration: 0.4s;
      color: ${Cores.branco};

      &:hover {
        color: ${Cores.azul};
        transition-duration: 0.4s;
      }
    }
  }
`
export const Redes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 16px;

  a {
    img {
      widht: 24px;
      height: 24px;
    }
  }
`
export const LinkScroll = styled(Link)`
  font-size: 18px;
  transition-duration: 0.4s;
  color: ${Cores.branco};

  &:hover {
    color: ${Cores.azul};
    transition-duration: 0.4s;
  }

  &.active {
    color: ${Cores.azul};
  }
`
