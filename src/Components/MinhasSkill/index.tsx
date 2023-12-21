import js from '../../assets/images/javascript.svg'
import html from '../../assets/images/html.svg'
import css from '../../assets/images/css.svg'
import react from '../../assets/images/react.svg'
import bootstrap from '../../assets/images/bootstrap.svg'
import redux from '../../assets/images/redux.svg'
import cypress from '../../assets/images/cypress.svg'
import { SkillContent, Skills } from './styles'
import typescript from '../../assets/images/typescript.svg'
import sass from '../../assets/images/sass.svg'
import gulp from '../../assets/images/gulp.svg'
import { Element } from 'react-scroll'

const Skill = () => {
  const tecnologias = [
    { nome: 'JavaScript', image: js },
    { nome: 'HTML', image: html },
    { nome: 'CSS', image: css },
    { nome: 'Bootstrap', image: bootstrap },
    { nome: 'React.js', image: react },
    { nome: 'Redux', image: redux },
    { nome: 'Cypress', image: cypress },
    { nome: 'Gulp', image: gulp },
    { nome: 'TypeSript', image: typescript },
    { nome: 'SASS', image: sass }
  ]
  return (
    <Element name="skill" className="skill">
      <SkillContent className="container">
        <h2>Minhas Skills</h2>
        <Skills>
          {tecnologias.map((tec) => (
            <div key={tec.nome} title={tec.nome}>
              <img src={tec.image} alt={tec.nome} />
            </div>
          ))}
        </Skills>
      </SkillContent>
    </Element>
  )
}

export default Skill
