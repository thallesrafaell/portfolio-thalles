import download from '../../assets/images/download.png'
import mail from '../../assets/images/mail.png'
import { Button, ButtonCinza } from '../../styles'
import { Details, P, SobreContent, Span } from './styles'

const Sobre = () => {
  const foto = 'https://via.placeholder.com/385x385.png'
  return (
    <SobreContent className="container">
      <img src={foto} alt="foto Thalles" />
      <Details>
        <h2>Sobre Mim</h2>
        <Span>Santa Viória, Minas Gerais</Span>
        <P>
          Apaixonado por tecnologia desde os 14 anos, trilho meu caminho como
          programador Full-stack em Java. Cada linha de código é uma jornada, e
          cada desafio é uma oportunidade para aprender e crescer. Comprometido
          com a excelência, busco constantemente inovar e contribuir para o
          avanço da tecnologia.
        </P>
        <div>
          <Button>
            <img src={download} alt="" />
            Curriculo
          </Button>
          <ButtonCinza>
            <img src={mail} alt="" />
            E-mail
          </ButtonCinza>
        </div>
      </Details>
    </SobreContent>
  )
}

export default Sobre
