import styled from 'styled-components'
import { Cores } from '../../styles'

export const SobreContent = styled.div`
  display: flex;
  align-items: center;
  padding-top: 250px;
  > img {
    width: 385px;
    height: 385px;
    margin-right: 80px;
    border-left: 4px solid ${Cores.azul};
    border-radius: 4px;
  }
`
export const Details = styled.div`
  width: 100%;
  height: 384px;

  div {
    display: flex;
    align-items: center;
    column-gap: 48px;
  }

  h2 {
    margin-bottom: 40px;
  }
`

export const Span = styled.span`
  font-size: 20px;
  font-weight: 500;
`

export const P = styled.p`
  font-size: 18px;
  margin: 20px 0 60px;
  color: ${Cores.cinzaClaro};
`
