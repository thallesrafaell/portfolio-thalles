import styled from 'styled-components'
import { breakPoints } from '../../styles'

export const SectionProjeto = styled.section`
  padding: 40px 0 20px;

  @media screen and (max-width: ${breakPoints.tablet}) {
    padding: 300px 0 20px;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 60px;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 70px;

    @media screen and (max-width: 1023px) {
      grid-template-columns: 1fr;
      row-gap: 30px;
    }

    @media screen and (max-width: ${breakPoints.tablet}) {
      grid-template-columns: 1fr;
      row-gap: 30px;
    }
  }
`
