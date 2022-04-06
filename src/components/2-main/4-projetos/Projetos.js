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