import { FooterBackground, MinhasRedes } from './styles'
import linkedin from '../../assets/images/linkedin.png'
import github from '../../assets/images/github.png'
import whats from '../../assets/images/whattsapp.png'
import mail from '../../assets/images/mail.png'

const Footer = () => {
  return (
    <FooterBackground>
      <div className="container">
        <p>
          &copy;2023 - Desenvolvido por <span>Thalles Rafael</span>
        </p>
        <MinhasRedes className="minhasredes">
          <a href="https://linkedin.com/in/thallesrafael">
            <img src={linkedin} alt="Linkedin" /> Linkedin
          </a>
          <a href="https://github.com/thallesrafaell">
            <img src={github} alt="" />
            Github
          </a>
          <a href="https://api.whatsapp.com/send?phone=5534997653710">
            <img src={whats} alt="Whatsapp" />
            Whatsapp
          </a>
          <a href="mailto:thallesrafaell@outlook.com">
            <img src={mail} alt="E-mail" />
            E-mail
          </a>
        </MinhasRedes>
      </div>
    </FooterBackground>
  )
}
export default Footer
