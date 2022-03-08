import { Notfound } from "../components/0-notFound/notFound-style"
import { ButtonSec } from "../components/4-gerais/botao/botao-secondary/ButtonSec"

import { BsArrowRight } from 'react-icons/bs';

function PageNotFound(){
  return(
    <Notfound>
      <h1>404 <span>.</span></h1>
      <p>Não há lugar como nosso lar...</p>
      <ButtonSec href="https://vitor0sant0s.vercel.app/">Voltar <BsArrowRight/> </ButtonSec>
    </Notfound>
  )
}

export default PageNotFound