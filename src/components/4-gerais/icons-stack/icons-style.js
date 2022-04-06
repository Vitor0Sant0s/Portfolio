import styled from 'styled-components';

export const Icon = styled.div`
  
  font-size: 64px;
  padding-top: 24px;
  padding-left: 3rem;
  margin: 0 auto;
  color: ${props => props.color};
  
  @media screen and (max-width:1160px){
    display: none;
  }
`