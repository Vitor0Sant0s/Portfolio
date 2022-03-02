import styled from 'styled-components';

export const Cabecalho = styled.header`
  display: none;
  
  /* display: flex; */
  align-items: center;
  justify-content: space-around;

  position: fixed;

  width: 100%;

  padding: 10px;
  z-index: 500;

  /* border-bottom: 0.5px solid #023373; */

  background: rgba( 15, 17, 18, 0.9 );
  backdrop-filter: blur( 13px );
  -webkit-backdrop-filter: blur( 13px );

  @media screen and (max-width: 860px) {
    gap: 3rem;
  }
`