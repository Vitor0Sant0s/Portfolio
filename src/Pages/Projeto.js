import { Link } from 'react-router-dom'
import { Container } from '../components/container-styles'

import styled from 'styled-components';

function Projeto() {
  return(
    <Container>
      <ProjetoPage>
        <h2>Estou trabalhando nisso, pegue um energetico e espere um pouco.</h2>
        <div>
          <Link to='/' style={{textDecoration: 'none', color: '#0070F3'}}>
            <p>Voltar</p>
          </Link>
        </div>
      </ProjetoPage>
    </Container>
  )
}

const ProjetoPage = styled.section`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  gap: 3rem;

  padding: 4rem 2rem;

  text-align: justify;

`
export default Projeto