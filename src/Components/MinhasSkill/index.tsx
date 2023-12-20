import js from '../../assets/images/javascript.svg'
import html from '../../assets/images/html.svg'
import css from '../../assets/images/css.svg'
import react from '../../assets/images/react.svg'
import { SkillContent, Skills } from './styles'

const Skill = () => {
  return (
    <SkillContent id="skill" className="container">
      <h2>Minhas Skills</h2>
      <Skills>
        <div>
          <img src={js} alt="java Script" title="java Script" />
        </div>
        <div>
          <img src={html} alt="HTML 5" title="HTML 5" />
        </div>
        <div>
          <img src={css} alt="CSS 3" title="CSS 3" />
        </div>
        <div>
          <img src={react} alt="React.js" title="React.js" />
        </div>
      </Skills>
    </SkillContent>
  )
}

export default Skill
