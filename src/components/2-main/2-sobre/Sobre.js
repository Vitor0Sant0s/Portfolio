import {Sobremim} from './sobre-style';
import { Titulo } from '../../4-gerais/titulo/titulo-style';
import Sobreimage from '../../../assets/Sobreimage.svg'

function Sobre(){
  return(
    <Sobremim>
      <div>
        <Titulo>Sobre mim <span>.</span></Titulo>
        <p>
          Prazer, sou Vitor Oliveira. Sou
          freelancer como Web developer e UI Designer. Desenvolvo interfaces
          modernas e de alta qualidade, concentrado em performance, responsividade 
          e SEO.
        </p>
      </div>

      <div>
        <img src={Sobreimage} alt="Homem sentando ao lado de um computador" />
      </div>
    </Sobremim>
  )
}

export default Sobre