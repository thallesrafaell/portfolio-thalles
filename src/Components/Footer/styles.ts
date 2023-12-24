import styled from 'styled-components'
import { Cores, breakPoints } from '../../styles'

export const FooterBackground = styled.footer`
  background-color: ${Cores.cinzaMedio};
  padding: 20px 0 20px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: ${breakPoints.tablet}) {
      justify-content: center;
      flex-direction: column;
      gap: 10px;
    }
  }

  p {
    font-size: 16px;
    text-align: center;
    color: ${Cores.branco};

    @media screen and (max-width: ${breakPoints.tablet}) {
      font-size: 15px;
    }

    span {
      color: ${Cores.azul};
      font-weight: Bold;
    }
  }
`

export const MinhasRedes = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  a {
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${Cores.branco};
  }

  img {
    width: 24px;
    height: 24px;
  }
`
