import { Notfound } from "../components/0-notFound/notFound-style"
import { BsArrowRight } from 'react-icons/bs';
import { Link } from "react-router-dom";

function PageNotFound(){
  return(
    <Notfound>
      <h1>404 <span>.</span></h1>
      <p>Não há lugar como nosso lar...</p>
      <Link to='/' style={{textDecoration: 'none'}}>
        <div>Voltar <BsArrowRight/></div>
      </Link>
    </Notfound>
  )
}

export default PageNotFound