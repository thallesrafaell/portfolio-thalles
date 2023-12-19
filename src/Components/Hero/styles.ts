import styled from 'styled-components'
import { Cores } from '../../styles'

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5.6vw 0;
  height: calc(100vh - 70px - 60px);

  > img {
    width: 300px;
    height: 256px;
  }
`
export const Details = styled.div`
  h1 {
    width: 225px;
    height: 94px;
    font-size: 36px;
    font-weight: bold;
  }

  p {
    font-size: 18px;
    color: ${Cores.cinzaClaro};
    margin: 18px 0 35px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 16px;
  }
`

export const Button = styled.button`
  max-widht: 158px;
  height: 44px;
  padding: 12px 28px;
  background-color: ${Cores.azul};
  color: ${Cores.cinzaEscuro};
  border: 1px solid transparent;
  font-size: 14px;
  font-weight: 500;
  transition-duration: 0.5s;

  &:hover {
    background-color: ${Cores.cinzaEscuro};
    color: ${Cores.branco};
    border-color: ${Cores.azul};
    transition-duration: 0.5s;
  }
`

export const ButtonContato = styled(Button)`
  background-color: ${Cores.cinzaEscuro};
  color: ${Cores.branco};
  border-color: ${Cores.cinzaClaro};

  &:hover {
    background-color: ${Cores.cinzaClaro};
    color: ${Cores.cinzaEscuro};
    border-color: ${Cores.cinzaClaro};
  }
`
