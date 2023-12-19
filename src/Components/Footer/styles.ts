import styled from 'styled-components'
import { Cores } from '../../styles'

export const FooterBackground = styled.footer`
  background-color: ${Cores.cinzaMedio};
  padding: 20px 0 20px;

  p {
    font-size: 16px;
    text-align: center;
    color: ${Cores.branco};

    span {
      color: ${Cores.azul};
      font-weight: Bold;
    }
  }
`
