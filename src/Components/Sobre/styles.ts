import styled from 'styled-components'
import { Button, Cores, breakPoints } from '../../styles'

export const SobreContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  > img {
    width: 385px;
    height: 385px;
    margin-right: 80px;
    border-left: 4px solid ${Cores.azul};
    border-radius: 4px;
  }

  @media screen and (max-width: ${breakPoints.tablet}) {
    > img {
      display: none;
    }
    display: block;
    height: 250px;
    padding-top: 60px;
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

  @media screen and (max-width: ${breakPoints.tablet}) {
    height: 250px;
    div {
      column-gap: 10px;
      ${Button} {
        white-space: nowrap;
      }
    }
  }
  @media screen and (min-width: 769px) {
    height: 250px;
    div {
      column-gap: 10px;
      ${Button} {
        white-space: nowrap;
      }
    }
  }
`

export const Span = styled.span`
  font-size: 20px;
  font-weight: 500;
`

export const P = styled.p`
  font-size: 18px;
  margin: 20px 0 40px;
  color: ${Cores.cinzaClaro};
`
