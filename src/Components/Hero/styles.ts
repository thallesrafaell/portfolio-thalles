import styled from 'styled-components'
import { Cores } from '../../styles'

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(100vh - 70px);
  opacity: 0;
  transition-duration: 0.4s;

  > img {
    width: 500px;
    transform: translatex(860px);
    transition-duration: 0.15s;
  }
`
export const Details = styled.div`
  h1 {
    width: 225px;
    height: 94px;
    font-size: 36px;
    font-weight: bold;
    transform: translatex(-700px);
  }

  p {
    font-size: 18px;
    color: ${Cores.cinzaClaro};
    margin: 18px 0 35px;
    transform: translatex(-700px);
    transition-duration: 0.1s;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 16px;
    transition-duration: 0.15s;
    transform: translatex(-700px);
  }
`
