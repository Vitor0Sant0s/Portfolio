import Hero from "./1-hero/Hero"
import Sobre from "./2-sobre/Sobre"
import Conhecimentos from "./3-conhecimentos/Conhecimentos"
import Projetos from "./4-projetos/Projetos"
import { Conteudo } from "./main-style"

function Main(){
  return(
    <Conteudo>
      <Hero/>
      <Sobre/>
      <Conhecimentos/>
      <Projetos/>
    </Conteudo>
  )
}

export default Main