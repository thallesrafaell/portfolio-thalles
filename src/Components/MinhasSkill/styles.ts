import styled from 'styled-components'
import { Cores, breakPoints } from '../../styles'

export const SkillContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 20px 0;

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  @media screen and (max-width: ${breakPoints.tablet}) {
    height: 360px;
    padding-top: 0;
    display: block;
    padding: 20px 0 450px;
  }
`

export const Skills = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  transition-duration: 0.5s;

  @media screen and (max-width: ${breakPoints.desktop}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 10px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background-color: ${Cores.cinzaMedio};
    border-radius: 4px;

    img {
      width: 50px;
      height: 50px;
      border-radius: 4px;
    }

    &:hover {
      box-shadow: 0px 0px 17px 2px rgba(43, 83, 224, 0.69);
      -webkit-box-shadow: 0px 0px 17px 2px rgba(43, 83, 224, 0.69);
      -moz-box-shadow: 0px 0px 17px 2px rgba(43, 83, 224, 0.69);
      transition-duration: 0.5s;
    }
  }

  @media screen and (max-width: ${breakPoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  @media screen and (max-width: 1023px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
  }
`
