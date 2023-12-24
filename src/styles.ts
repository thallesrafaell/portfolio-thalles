import styled, { createGlobalStyle } from 'styled-components'
import { HeaderBg, ModalMenu } from './Components/Header/styles'
import { SectionProjeto } from './Containers/Projetos/style'

export const Cores = {
  azul: '#2B53E0',
  branco: '#F9F9F9',
  preto: '#171717',
  cinzaEscuro: '#212121',
  cinzaMedio: '#333333',
  cinzaClaro: '#828282'
}

export const breakPoints = {
  desktop: '1024px;',
  tablet: '768px'
}

export const GlobalCSS = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;
    list-style: none;
    text-decoration: none;
  }

  html {
    scroll-behavior: smooth;
    }

  body {
    background-color: ${Cores.cinzaEscuro};
    color: ${Cores.branco};
    overflow-x: hidden;

    .container {
      max-width: 1140px;
      width: 100%;
      margin: 0 auto;

      @media(max-width: ${breakPoints.tablet}){
        max-width: 80%;
      }
    }



  }
`

export const Button = styled.a`
  display: flex;
  align-items: center;
  column-gap: 16px;
  max-width: 158px;
  height: 44px;
  padding: 12px 28px;
  background-color: ${Cores.azul};
  color: ${Cores.branco};
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  transition-duration: 0.5s;

  @media screen and (max-width: ${breakPoints.tablet}) {
    width: 120px;
    column-gap: 10px;
    padding: 12px 15px;

    &:hover {
      background-color: ${Cores.azul};
      color: ${Cores.branco};
      border-color: ${Cores.azul};
      transition-duration: 0.5s;
    }
  }

  &:hover {
    background-color: ${Cores.cinzaEscuro};
    color: ${Cores.branco};
    border-color: ${Cores.azul};
    transition-duration: 0.5s;
  }
`

export const ButtonCinza = styled(Button)`
  background-color: ${Cores.cinzaEscuro};
  border-color: ${Cores.cinzaClaro};

  @media screen and (max-width: ${breakPoints.tablet}) {
    &:hover {
      background-color: ${Cores.azul};
      color: ${Cores.branco};
      border-color: ${Cores.azul};
      transition-duration: 0.5s;
    }
  }

  &:hover {
    background-color: ${Cores.cinzaClaro};
    border-color: ${Cores.cinzaClaro};

    @media screen and (max-width: ${breakPoints.tablet}) {
      background-color: ${Cores.cinzaClaro};
      border-color: ${Cores.cinzaClaro};
    }
  }
`
