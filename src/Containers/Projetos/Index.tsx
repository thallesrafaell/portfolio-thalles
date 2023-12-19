import Projeto from '../../Components/Projeto'
import { SectionProjeto } from './style'

const Projetos = () => {
  return (
    <SectionProjeto className="container">
      <h2>Projetos</h2>
      <ul>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
        <li>
          <Projeto />
        </li>
      </ul>
    </SectionProjeto>
  )
}
export default Projetos
