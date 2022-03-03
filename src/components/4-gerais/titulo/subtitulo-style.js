import styled from 'styled-components';

export const Subtitulo = styled.h3`
  color: ${props => props.color};
  &::before{
    content: "";
    color: transparent;
    border: 3px solid ;
    border-color: ${props => props.borderColor};

    margin-right: 10px;
  }
`