import { HeaderContent, Menu } from './styles'

const Header = () => {
  return (
    <HeaderContent className="container">
      <h2>Portifolio</h2>
      <nav>
        <Menu>
          <li>Sobre mim</li>
          <li>Projetos</li>
          <li>Minhas skills</li>
        </Menu>
      </nav>
    </HeaderContent>
  )
}

export default Header
