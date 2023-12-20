import { Button, ButtonCinza } from '../../styles'
import { Buttons, Card, Tecnologias } from './styles'

import githubIcon from '../../assets/images/github.png'
import link from '../../assets/images/link.png'

type Props = {
  image: string
  titulo: string
  descricao: string
  tecnologias: string[]
  deploy: string
  github: string
}

const Projeto = ({
  image,
  deploy,
  descricao,
  github,
  tecnologias,
  titulo
}: Props) => {
  return (
    <Card>
      <img src={image} alt="" />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <Tecnologias>
        {tecnologias.map((tec) => (
          <img key={tec} src={tec} alt={tec} />
        ))}
      </Tecnologias>
      <Buttons>
        <Button href={deploy} target="_blank">
          <img src={link} alt="" />
          Deploy
        </Button>
        <ButtonCinza href={github} target="_blank">
          <img src={githubIcon} alt="" />
          Github
        </ButtonCinza>
      </Buttons>
    </Card>
  )
}

export default Projeto
