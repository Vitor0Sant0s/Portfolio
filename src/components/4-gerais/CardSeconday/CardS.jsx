import {Link} from 'react-router-dom'
import Button from '../Button/Button'
import { CardStyle } from './CardStyle'

function CardS(props){
  return(
    <CardStyle>
      <img src={props.src} alt="Cartão de projeto" />
      <div>
        <h3>{props.title}</h3>
        <p>
          {props.description}
        </p>
        <Link to={props.to}>
          <Button>Ver mais</Button>
        </Link>
      </div>
    </CardStyle>
  )
}

export default CardS