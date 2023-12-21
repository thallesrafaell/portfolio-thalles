import banner from '../../assets/images/Hero.svg'
import { Details, Section } from './styles'
import linkedin from '../../assets/images/linkedin.png'
import github from '../../assets/images/github.png'
import { Button, ButtonCinza } from '../../styles'
import { Element } from 'react-scroll'
import { gsap } from 'gsap'
import { useLayoutEffect } from 'react'

const Hero = () => {
  useLayoutEffect(() => {
    gsap.to('.anime', {
      opacity: 1
    })

    gsap.to('.titulo', {
      x: 0
    })
    gsap.to('.profissao', {
      x: 0
    })
    gsap.to('.buttons', {
      x: 0
    })
    gsap.to('.banner', {
      x: 0
    })
  }, [])

  return (
    <Element name="home" className="home">
      <Section className="container anime">
        <Details className="details">
          <h1 className="titulo">Olá, sou Thalles Rafael</h1>
          <p className="profissao">Desenvolvedor Full-Stack Java</p>
          <div className="buttons">
            <Button
              href="https://linkedin.com/in/thallesrafael"
              title="Meu linkedin"
              target="_blank"
            >
              <img src={linkedin} alt="incone linkedin" />
              Linkedin
            </Button>
            <ButtonCinza
              href="https://github.com/thallesrafaell"
              title="Meu Github"
              target="_blank"
            >
              <img src={github} alt="incone github" />
              GitHub
            </ButtonCinza>
          </div>
        </Details>
        <img className="banner" src={banner} alt="Hero" />
      </Section>
    </Element>
  )
}
export default Hero
