import styled from 'styled-components';

export const Botao = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  background-color:#0070F3 ;

  color: ${props => props.color};
  text-decoration: none;
  font-weight: 700;

  border-radius: ${props => props.borderRadius};

  width: 100%/*${props => props.width}*/;
  height: 50px;

  padding-left: 2rem;

  &:hover{
    transition: background-color 0.3s ease-in-out;
    background-color: #0359bb;
  }
`