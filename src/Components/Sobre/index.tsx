import download from '../../assets/images/download.png'
import mail from '../../assets/images/mail.png'
import { Button, ButtonCinza } from '../../styles'
import { Details, P, SobreContent, Span } from './styles'
import perfil from '../../assets/images/perfil.png'

const Sobre = () => {
  return (
    <SobreContent className="container">
      <img src={perfil} alt="foto Thalles" />
      <Details>
        <h2>Sobre Mim</h2>
        <Span>Santa Viória, Minas Gerais</Span>
        <P>
          Apaixonado por tecnologia desde os 14 anos. Atualmente trilho meu
          caminho como programador Full-stack em Java. Cada linha de código é
          uma jornada, e cada desafio é uma oportunidade para aprender e
          crescer. Comprometido com a excelência, busco constantemente inovar,
          buscando cada vez mais conhecimento.
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
