import js from '../../assets/images/javascript.svg'
import { SkillContent, Skills } from './styles'

const Skill = () => {
  return (
    <SkillContent className="container">
      <h2>Minhas Skills</h2>
      <Skills>
        <div>
          <img src={js} alt="java Script" title="java Script" />
        </div>
        <div>
          <img src={js} alt="java Script" title="java Script" />
        </div>
        <div>
          <img src={js} alt="java Script" title="java Script" />
        </div>
        <div>
          <img src={js} alt="java Script" title="java Script" />
        </div>
        <div>
          <img src={js} alt="java Script" title="java Script" />
        </div>
      </Skills>
    </SkillContent>
  )
}

export default Skill
