import { Botao } from "../botao/botao-style";
import { Cardstyle } from "./card-style";

function Card(props){
  return(
    <Cardstyle background ={props.background}>
      <div>
        <div>
          <h3>Em breve</h3>
          <p>Pegue um energetico e espere um pouco, estou trabalhando nisso.</p>  
        </div>
        <Botao 
          href= {props.href}
          target="_blank"
          borderRadius={'0px 0px 10px 10px '}>
          Ver mais
        </Botao>
      </div>
    </Cardstyle>
  )
}

export default Card