import { BrowserRouter } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Hero from '../../Components/Hero'
import Skill from '../../Components/MinhasSkill'
import Sobre from '../../Components/Sobre'
import Projetos from '../../Containers/Projetos/Index'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Sobre />
      <Skill />
      <Projetos />
      <Footer />
    </>
  )
}
export default Home
