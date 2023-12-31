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
import bootstrap from '../../assets/images/bootstrap.svg'
import redux from '../../assets/images/redux.svg'
import cypress from '../../assets/images/cypress.svg'
import styled from '../../assets/images/styled-components.svg'
import typescript from '../../assets/images/typescript.svg'
import sass from '../../assets/images/sass.svg'
import gulp from '../../assets/images/gulp.svg'
import { Element } from 'react-scroll'

const Projetos = () => {
  const ProjetosList: Project[] = [
    {
      id: 1,
      image: eplay,
      titulo: 'E-play',
      descricao:
        'Ao criar o E-Play, usei React e TypeScript para desenvolver uma aplicação com design responsivo. Destaquei-me ao implementar componentes estilizados com Styled Components. Gerenciei o estado com Redux, garantindo eficiência e escalabilidade. Adicionalmente, implementei testes automatizados com Cypress.',
      tecnologia: [html, css, react, typescript, styled, redux, cypress],
      deploy: 'https://eplay-xi.vercel.app/',
      github: 'https://github.com/thallesrafaell/eplay'
    },
    {
      id: 2,
      image: todo,
      titulo: 'Todo List',
      descricao:
        'No desenvolvimento do Todo List. Utilizando React, TypeScript, Styled Components e Redux, fiz implementação de componentes, estilos e lógica de gerenciamento de estado. Este projeto reflete minha habilidade na construção de aplicações dinâmicas e eficientes com as tecnologias mencionadas.',
      tecnologia: [html, css, react, typescript, styled, redux],
      deploy: 'https://thalles-todo-list-react-redux.vercel.app/',
      github: 'https://github.com/thallesrafaell/todo-list-react-redux'
    },
    {
      id: 3,
      image: disney,
      titulo: 'Clone do Disney+',
      descricao:
        'No projeto Disney+, criei um Clone da página web com HTML, JavaScript, Sass (BEM para estilização) e Gulp para automações. Destaco-me na reprodução fiel da interface, consolidando habilidades em design responsivo e organização de código eficaz com a metodologia BEM.',
      tecnologia: [html, css, js, sass, gulp],
      deploy: 'https://thalles-clone-disneyplus.vercel.app/',
      github: 'https://github.com/thallesrafaell/clone-disneyplus'
    },
    {
      id: 4,
      image: restaurante,
      titulo: 'Restaurante',
      descricao:
        'No projeto Restaurante, destaquei-me na construção da interface com HTML, CSS e Bootstrap para uma experiência responsiva. Aprimorei a lógica dinâmica com JavaScript, evidenciando competência em criar interfaces atrativas e eficazes.',
      tecnologia: [html, css, bootstrap],
      deploy: 'https://projeto-restaurante-pink.vercel.app/',
      github: 'https://github.com/thallesrafaell/projetoRestaurante'
    },
    {
      id: 5,
      image: calcMedia,
      titulo: 'Calculadora de Médias',
      descricao:
        'Elaborei uma Calculadora de Médias com HTML, CSS e JavaScript, criando uma interface interativa e descomplicada. Destaco-me na implementação de funcionalidades dinâmicas para facilitar o cálculo preciso, proporcionando uma experiência intuitiva e eficiente aos usuários.',
      tecnologia: [html, css, js],
      deploy: 'https://thalles-calc-media.vercel.app/',
      github: 'https://github.com/thallesrafaell/CalcMedia'
    },
    {
      id: 6,
      image: gamesShop,
      titulo: 'Games Shop',
      descricao:
        'Durante o projeto, criei uma página com HTML e CSS, destacando-me na construção e design da loja online. Minha dedicação refletiu-se na meticulosa estruturação e estilização da plataforma, evidenciando minha proficiência.',
      tecnologia: [html, css],
      deploy: 'https://games-shop-jet.vercel.app',
      github: 'https://github.com/thallesrafaell/games-shop'
    }
  ]
  return (
    <>
      <Element name="projetos" className="projetos">
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
      </Element>
    </>
  )
}
export default Projetos
