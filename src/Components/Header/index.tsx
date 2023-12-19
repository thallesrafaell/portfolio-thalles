import { HeaderContent, Menu } from './styles'

const Header = () => {
  return (
    <HeaderContent className="container">
      <h2>Portfólio</h2>
      <nav>
        <Menu>
          <li>Sobre mim</li>
          <li>Projetos</li>
          <li>Minhas skills</li>
          <li>Contato</li>
        </Menu>
      </nav>
    </HeaderContent>
  )
}

export default Header
