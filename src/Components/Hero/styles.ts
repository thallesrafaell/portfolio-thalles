import styled from 'styled-components'
import { Cores } from '../../styles'

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(100vh - 70px);

  > img {
    width: 500px;
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
