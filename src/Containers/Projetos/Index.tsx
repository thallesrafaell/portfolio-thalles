import Projeto from '../../Components/Projeto'
import { Project } from '../../Models'
import { SectionProjeto } from './style'
import gamesShop from '../../assets/images/games-shop.png'
import calcMedia from '../../assets/images/calcMedia.png'
import restaurante from '../../assets/images/restaurante.png'
import todo from '../../assets/images/todo.png'
import disney from '../../assets/images/disney.png'
import eplay from '../../assets/images/eplay.png'
import css from '../../assets/images/css.svg'
import html from '../../assets/images/html.svg'
import react from '../../assets/images/react.svg'
import js from '../../assets/images/javascript.svg'

const Projetos = () => {
  const ProjetosList: Project[] = [
    {
      id: 1,
      image: gamesShop,
      titulo: 'Games Shop',
      descricao:
        'Durante o projeto, criei uma página com HTML e CSS, destacando-me na construção e design da loja online. Minha dedicação refletiu-se na meticulosa estruturação e estilização da plataforma, evidenciando minha proficiência.',
      tecnologia: [html, css],
      deploy: 'https://games-shop-jet.vercel.app',
      github: 'https://github.com/thallesrafaell/games-shop'
    },
    {
      id: 2,
      image: calcMedia,
      titulo: 'Calculadora de Médias',
      descricao:
        'Elaborei uma Calculadora de Médias com HTML, CSS e JavaScript, criando uma interface interativa e descomplicada. Destaco-me na implementação de funcionalidades dinâmicas para facilitar o cálculo preciso, proporcionando uma experiência intuitiva e eficiente aos usuários.',
      tecnologia: [html, css, js],
      deploy: 'https://thalles-calc-media.vercel.app/',
      github: 'https://github.com/thallesrafaell/CalcMedia'
    },
    {
      id: 3,
      image: restaurante,
      titulo: 'Restaurante',
      descricao:
        'No projeto Restaurante, destaquei-me na construção da interface com HTML, CSS e Bootstrap para uma experiência responsiva. Aprimorei a lógica dinâmica com JavaScript, evidenciando competência em criar interfaces atrativas e eficazes.',
      tecnologia: [html, css, 'BootStrap'],
      deploy: 'https://projeto-restaurante-pink.vercel.app/',
      github: 'https://github.com/thallesrafaell/projetoRestaurante'
    },
    {
      id: 4,
      image: disney,
      titulo: 'Clone do Disney+',
      descricao:
        'No projeto Disney+, criei um Clone da página web com HTML, JavaScript, Sass (BEM para estilização) e Gulp para automações. Destaco-me na reprodução fiel da interface, consolidando habilidades em design responsivo e organização de código eficaz com a metodologia BEM.',
      tecnologia: [html, css, js, 'sass', 'gulp'],
      deploy: 'https://thalles-clone-disneyplus.vercel.app/',
      github: 'https://github.com/thallesrafaell/clone-disneyplus'
    },
    {
      id: 5,
      image: todo,
      titulo: 'Todo List',
      descricao:
        'No desenvolvimento do Todo List. Utilizando React, TypeScript, Styled Components e Redux, fiz implementação de componentes, estilos e lógica de gerenciamento de estado. Este projeto reflete minha habilidade na construção de aplicações dinâmicas e eficientes com as tecnologias mencionadas.',
      tecnologia: [
        html,
        css,
        react,
        'typeScript',
        'Styled Components',
        'Redux'
      ],
      deploy: 'https://thalles-todo-list-react-redux.vercel.app/',
      github: 'https://github.com/thallesrafaell/todo-list-react-redux'
    },
    {
      id: 6,
      image: eplay,
      titulo: 'E-play',
      descricao:
        'NAo criar o E-Play, usei React e TypeScript para desenvolver uma aplicação com design responsivo. Destaquei-me ao implementar componentes estilizados com Styled Components. Gerenciei o estado com Redux, garantindo eficiência e escalabilidade. Adicionalmente, implementei testes automatizados com Cypress.',
      tecnologia: [
        html,
        css,
        react,
        'typeScript',
        'Styled Components',
        'Redux',
        'Cypress'
      ],
      deploy: 'https://eplay-xi.vercel.app/',
      github: 'https://github.com/thallesrafaell/eplay'
    }
  ]
  return (
    <SectionProjeto id="projetos" className="container">
      <h2>Projetos</h2>
      <ul>
        {ProjetosList.map((project) => (
          <li key={project.id}>
            <Projeto
              image={project.image}
              titulo={project.titulo}
              descricao={project.descricao}
              tecnologias={project.tecnologia}
              deploy={project.deploy}
              github={project.github}
            />
          </li>
        ))}
      </ul>
    </SectionProjeto>
  )
}
export default Projetos
