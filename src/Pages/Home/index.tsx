import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Hero from '../../Components/Hero'
import Skill from '../../Components/MinhasSkill'
import Sobre from '../../Components/Sobre'
import Projetos from '../../Containers/Projetos/Index'

const Home = () => {
  return (
    <div data-bs-spy="scroll" data-bs-target="navigate">
      <Header />
      <Hero />
      <Sobre />
      <Projetos />
      <Skill />
      <Footer />
    </div>
  )
}
export default Home
