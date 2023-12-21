import { HeaderBg, HeaderContent, Menu, Redes, LinkScroll } from './styles'
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
              <LinkScroll
                to="home"
                activeClass="active"
                className="home"
                spy={true}
                smooth={true}
                duration={100}
              >
                Início
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                to="sobre"
                activeClass="active"
                className="sobre"
                spy={true}
                smooth={true}
                duration={500}
              >
                Sobre mim
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                to="skill"
                activeClass="active"
                className="skill"
                spy={true}
                smooth={true}
                duration={500}
              >
                Minhas Skiils
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                to="projetos"
                activeClass="active"
                className="projetos"
                spy={true}
                smooth={true}
                duration={100}
              >
                Projetos
              </LinkScroll>
            </li>
          </Menu>
        </nav>
      </HeaderContent>
    </HeaderBg>
  )
}

export default Header
