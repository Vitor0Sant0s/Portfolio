// import Card from "../../4-gerais/card/Card";
import CardS from "../../4-gerais/CardSeconday/CardS";
import { Titulo } from "../../4-gerais/titulo/titulo-style";
import github from '../../../assets/image/github.jpg'
import instagram from '../../../assets/image/instagram.jpg'
import twitter from '../../../assets/image/twitter.jpg'
import { ProjetosStyle } from "./projetos-style";




function Projetos(){
  return(
    <ProjetosStyle>
      <Titulo>Projetos <span>.</span></Titulo>
      <div className="projet">
        {/* <Card 
          href='https://github.com/Vitor0Sant0s'
          background = 'https://images.unsplash.com/photo-1630514969818-94aefc42ec47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2l0aHVifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'/>
        <Card 
          href='https://twitter.com/hug0_m0s'
          background='https://images.unsplash.com/photo-1622920157882-35cf1304beb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dHdpdHRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'/>
        <Card  
          href='https://instagram.com/hugo_mos'
          background='https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'/> */}

        <CardS
          src={github}
          to='/projetos'
          title='Em breve'
          description='Pegue um energetico e espere um pouco, estou trabalhando nisso'
        />
        <CardS
          src={instagram}
          to='/projetos'
          title='Em breve'
          description='Pegue um energetico e espere um pouco, estou trabalhando nisso'
        />
        <CardS
          src={twitter}
          to='/projetos'
          title='Em breve'
          description='Pegue um energetico e espere um pouco, estou trabalhando nisso'
        />
      </div>

      <div className="repo">
        <a href="https://github.com/Vitor0Sant0s?tab=repositories">Repositorios no GitHub</a>
      </div>
      
    </ProjetosStyle>
  )
}

export default Projetos;