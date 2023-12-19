import { Button, ButtonCinza } from '../../styles'
import { Buttons, Card, Tecnologias } from './styles'
import css from '../../assets/images/css.svg'
import html from '../../assets/images/html.svg'
import js from '../../assets/images/javascript.svg'
import react from '../../assets/images/react.svg'
import github from '../../assets/images/github.png'
import link from '../../assets/images/link.png'

const Projeto = () => {
  const foto = 'https://via.placeholder.com/530x200.png'
  return (
    <Card>
      <img src={foto} alt="" />
      <h3>Titulo</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        blandit interdum odio eu varius.
      </p>
      <Tecnologias>
        <img src={css} alt="" />
        <img src={html} alt="" />
        <img src={js} alt="" />
        <img src={react} alt="" />
      </Tecnologias>
      <Buttons>
        <Button>
          <img src={link} alt="" />
          Deploy
        </Button>
        <ButtonCinza>
          <img src={github} alt="" />
          Github
        </ButtonCinza>
      </Buttons>
    </Card>
  )
}

export default Projeto
