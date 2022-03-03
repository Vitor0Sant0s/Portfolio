import Card from "../../4-gerais/card/Card";
import { Titulo } from "../../4-gerais/titulo/titulo-style";
import { ProjcStyle } from "./projetos-style";




function Projetos(){
  return(
    <ProjcStyle>
      <Titulo>Projetos <span>.</span></Titulo>
      <div>
        <Card 
          href='https://github.com/Vitor0Sant0s'
          background = 'https://images.unsplash.com/photo-1630514969818-94aefc42ec47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2l0aHVifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'/>
        <Card 
          href='https://twitter.com/hug0_m0s'
          background='https://images.unsplash.com/photo-1622920157882-35cf1304beb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dHdpdHRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
        <Card  
          href='https://instagram.com/hugo_mos'
          background='https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'/>
      </div>

      <div>
        <a href="https://github.com/Vitor0Sant0s?tab=repositories">Repositorios no GitHub</a>
      </div>
      
    </ProjcStyle>
  )
}

export default Projetos;