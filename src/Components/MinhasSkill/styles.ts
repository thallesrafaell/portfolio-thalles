import styled from 'styled-components'
import { Cores } from '../../styles'

export const SkillContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 250px;
  height: 300px;
  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 60px;
  }
`
export const Skills = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  transition-duration: 0.5s;

  div {
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
`
