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
          <p>
            <img src={linkedin} alt="" /> Linkedin
          </p>
          <p>
            <img src={github} alt="" />
            Github
          </p>
          <p>
            <img src={whats} alt="" />
            Whatsapp
          </p>
          <p>
            <img src={mail} alt="" />
            E-mail
          </p>
        </MinhasRedes>
      </div>
    </FooterBackground>
  )
}
export default Footer
