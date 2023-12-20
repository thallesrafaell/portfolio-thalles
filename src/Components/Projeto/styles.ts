import styled from 'styled-components'
import { Cores } from '../../styles'

export const Card = styled.div`
  width: 100%;
  height: 600px;
  padding: 20px;
  background-color: ${Cores.cinzaMedio};
  border-radius: 4px;
  transition-duration: 0.4s;

  > img {
    width: 100%;
    border-left: 4px solid ${Cores.azul};
  }

  h3 {
    font-size: 24px;
    font-weight: 500;
    margin: 25px 0 25px;
  }

  p {
    width: 496px;
    height: 108px;
    color: ${Cores.cinzaClaro};
  }

  &:hover {
    box-shadow: 0px 0px 17px 2px rgba(43, 83, 224, 0.69);
    transition-duration: 0.4s;
  }
`
export const Tecnologias = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 30px 0;

  > img {
    width: 24px;
    height: 24px;
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
`
