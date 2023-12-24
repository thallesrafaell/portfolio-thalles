import {
  HeaderBg,
  HeaderContent,
  Menu,
  Redes,
  LinkScroll,
  MenuMobile,
  ModalMenu
} from './styles'
import linkedin from '../../assets/images/linkedin.png'
import github from '../../assets/images/github.png'
import whats from '../../assets/images/whattsapp.png'
import mail from '../../assets/images/mail.png'
import menuMobile from '../../assets/images/hamburger-menu.svg'
import { useState } from 'react'

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false)
  const [changeMenu, setChangeMenu] = useState(false)

  const toggleMenu = () => {
    if (changeMenu === false) {
      setChangeMenu(true)
      setMenuAberto(true)
    } else {
      setChangeMenu(false)
      setMenuAberto(false)
    }
  }

  return (
    <>
      <HeaderBg>
        <HeaderContent id="menuScroll" className="container">
          <a href="https://thallesrafael.dev">
            <h2>
              &lt;<span>/TR</span>&gt;
            </h2>
          </a>

          <Redes>
            <a
              target="_blank"
              href="https://linkedin.com/in/thallesrafael"
              rel="noreferrer"
              title="Linkedin"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              target="_blank"
              href="https://github.com/thallesrafaell"
              rel="noreferrer"
              title="Github"
            >
              <img src={github} alt="" />
            </a>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5534997653710"
              rel="noreferrer"
              title="Whatsapp"
            >
              <img src={whats} alt="Whatsapp" />
            </a>
            <a
              target="_blank"
              href="mailto:thallesrafaell@outlook.com"
              rel="noreferrer"
              title="E-mail"
            >
              <img src={mail} alt="E-mail" />
            </a>
          </Redes>
          <MenuMobile onClick={toggleMenu}>
            <span className={changeMenu ? 'linha change' : 'linha'}></span>
            <span
              className={changeMenu ? 'segunda-linha change' : 'segunda-linha'}
            ></span>
            <span
              className={
                changeMenu ? 'terceira-linha change' : 'terceira-linha'
              }
            ></span>
          </MenuMobile>
          <nav id="navigate">
            <Menu>
              <li>
                <LinkScroll href="#home" className="home">
                  Início
                </LinkScroll>
              </li>
              <li>
                <LinkScroll href="#sobre">Sobre mim</LinkScroll>
              </li>
              <li>
                <LinkScroll href="#skill">Minhas Skills</LinkScroll>
              </li>
              <li>
                <LinkScroll href="#projetos">Projetos</LinkScroll>
              </li>
            </Menu>
          </nav>
        </HeaderContent>
        <ModalMenu className={menuAberto ? 'is-open' : ''}>
          <img src="" alt="" />
          <ul>
            <li>
              <LinkScroll href="#home" onClick={toggleMenu}>
                Início
              </LinkScroll>
            </li>
            <li>
              <LinkScroll href="#sobre" onClick={toggleMenu}>
                Sobre mim
              </LinkScroll>
            </li>
            <li>
              <LinkScroll href="#skill" onClick={toggleMenu}>
                Minhas Skills
              </LinkScroll>
            </li>
            <li>
              <LinkScroll href="#projetos" onClick={toggleMenu}>
                Projetos
              </LinkScroll>
            </li>
          </ul>
        </ModalMenu>
      </HeaderBg>
    </>
  )
}

export default Header
