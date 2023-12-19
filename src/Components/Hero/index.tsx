import banner from '../../assets/Hero.svg'
import { Button, ButtonContato, Details, Section } from './styles'

const Hero = () => {
  return (
    <Section className="container">
      <Details>
        <h1>Olá sou Thalles Rafael</h1>
        <p>Desenvolvedor Full-Stack Java</p>
        <div>
          <Button>Download CV</Button>
          <ButtonContato>Entrar em Contato</ButtonContato>
        </div>
      </Details>
      <img src={banner} alt="Hero" />
    </Section>
  )
}
export default Hero
