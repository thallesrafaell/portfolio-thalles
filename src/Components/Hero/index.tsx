import banner from '../../assets/images/Hero.svg'
import { Details, Section } from './styles'
import linkedin from '../../assets/images/linkedin.png'
import github from '../../assets/images/github.png'
import { Button, ButtonCinza } from '../../styles'

const Hero = () => {
  return (
    <Section className="container">
      <Details>
        <h1>Olá, sou Thalles Rafael</h1>
        <p>Desenvolvedor Full-Stack Java</p>
        <div>
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
      <img src={banner} alt="Hero" />
    </Section>
  )
}
export default Hero
