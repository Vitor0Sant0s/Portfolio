import { Rodape } from "./footer-style";
import { CgInstagram } from 'react-icons/cg';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

function Footer(){
  return(
    <Rodape>
      <h3>© 2022 Vitor Oliveira</h3>
      <div>
        <a href="https://www.instagram.com/hugo_mos" target="_blank" rel="noopener noreferrer">
          <CgInstagram />
        </a>
        <a href="https://www.linkedin.com/in/Vitor0Sant0s" target="_blank" rel="noopener noreferrer">
          <AiOutlineLinkedin/>
        </a>
        <a href="https://www.github.com/Vitor0Sant0s" target="_blank" rel="noopener noreferrer">
          <AiFillGithub />
        </a>
      </div>
    </Rodape>
  )
}
export default Footer;