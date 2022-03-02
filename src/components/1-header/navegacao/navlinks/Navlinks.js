import { Ul } from "./navlinks-style"

function Navlinks({open}){
  return(
    <nav>
      <Ul open={open}>
        <li><a href="sobremim">Sobre mim</a></li>
        <li><a href="conhecimentos">Conhecimentos</a></li>
        <li><a href="projetos">Projetos</a></li>
      </Ul>
    </nav>
  )
}

export default Navlinks