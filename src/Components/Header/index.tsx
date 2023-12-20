import { HeaderBg, HeaderContent, Menu, Redes } from './styles'
import linkedin from '../../assets/images/linkedin.png'
import github from '../../assets/images/github.png'
import whats from '../../assets/images/whattsapp.png'
import mail from '../../assets/images/mail.png'

const Header = () => {
  return (
    <HeaderBg>
      <HeaderContent className="container">
        <h2>
          &lt;<span>/TR</span>&gt;
        </h2>

        <Redes>
          <a href="https://linkedin.com/in/thallesrafael">
            <img src={linkedin} alt="Linkedin" />
          </a>
          <a href="https://github.com/thallesrafaell">
            <img src={github} alt="" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5534997653710">
            <img src={whats} alt="Whatsapp" />
          </a>
          <a href="mailto:thallesrafaell@outlook.com">
            <img src={mail} alt="E-mail" />
          </a>
        </Redes>

        <nav id="navigate">
          <Menu>
            <li>
              <a href="#sobre">Sobre mim</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
            <li>
              <a href="#skill">Minhas Skiils</a>
            </li>
          </Menu>
        </nav>
      </HeaderContent>
    </HeaderBg>
  )
}

export default Header
