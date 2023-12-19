import styled from 'styled-components'
import { Cores } from '../../styles'

export const Card = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${Cores.cinzaMedio};
  border-radius: 4px;
  transition-duration: 0.4s;

  > img {
    widht: 100%;
    border-left: 4px solid ${Cores.azul};
  }

  h3 {
    font-size: 24px;
    font-weight: 500;
    margin: 25px 0 25px;
  }

  p {
    color: ${Cores.cinzaClaro};
  }

  &:hover {
    box-shadow: 10px 12px 13px -8px rgba(43, 83, 224, 0.69);
    transition-duration: 0.4s;
  }
`
export const Tecnologias = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > img {
    width: 24px;
    margin: 32px 0;
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
`
