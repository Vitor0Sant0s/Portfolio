import { Cabecalho } from "./header-styles"
import { Logo } from "./logo/logo-styles"
import Navigation from "./navegacao/Navigation"

function Header(){
  return(
    <Cabecalho>
      <Logo>Vitor O <span>.</span></Logo>
      <Navigation/>
    </Cabecalho>
  )
}

export default Header