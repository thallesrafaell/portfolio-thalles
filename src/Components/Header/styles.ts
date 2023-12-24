import styled from 'styled-components'
import { Cores, breakPoints } from '../../styles'
import { Link } from 'react-scroll'

export const HeaderBg = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${Cores.cinzaEscuro};
  z-index: 1;
`

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px;
  position: relative;

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

    @media (max-width: ${breakPoints.tablet}) {
      display: none;
    }

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

  @media (max-width: ${breakPoints.tablet}) {
    display: none;
  }

  a {
    img {
      width: 24px;
      height: 24px;
      transition-duration: 0.4s;

      @media (max-width: ${breakPoints.tablet}) {
      }
      &:hover {
        transform: scale(1.2);
        transition-duration: 0.4s;
      }
    }
  }
`
export const LinkScroll = styled.a`
  font-size: 18px;
  transition-duration: 0.4s;
  color: ${Cores.branco};
  cursor: pointer;

  &:hover {
    color: ${Cores.azul};
    transition-duration: 0.4s;
  }

  &.active {
    color: ${Cores.azul};
  }
`

export const MenuMobile = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 35px;
  height: 35px;
  display: none;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 6px;
  transition: 0.5s;

  .linha,
  .segunda-linha {
    width: 28px;
    height: 2px;
    background-color: ${Cores.branco};
    border-radius: 4px;
    transition-duration: 0.5s;
    &.change {
      transform: rotate(130deg) translateY(-5px) translateX(6px);
      transition-duration: 0.5s;
    }
  }

  .segunda-linha {
    margin: 6px 0;
    border-radius: 4px;
    transition-duration: 0.5s;
    &.change {
      transform: rotate(-130deg);
      transition-duration: 0.5s;
    }
  }
  .terceira-linha {
    width: 14px;
    height: 2px;
    border-radius: 4px;
    background-color: ${Cores.branco};
    transition-duration: 0.5s;

    &.change {
      opacity: 0;
      transition-duration: 0.5s;
    }
  }

  @media screen and (max-width: ${breakPoints.tablet}) {
    display: flex;
  }
`
export const ModalMenu = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  padding: 32px;
  display: none;
  justify-content: center;
  align-items: flex-start;
  background-color: ${Cores.cinzaEscuro};
  transition-duration: 0.5s;
  opacity: 0;
  background-color: ${Cores.cinzaEscuro};
  backdrop-filter: blur(2px);

  &.is-open {
    display: flex;
    opacity: 1;
    transition-duration: 0.5s;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`
