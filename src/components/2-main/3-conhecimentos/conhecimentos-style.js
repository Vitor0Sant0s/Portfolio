import styled from 'styled-components';

export const Stacks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 4rem;

  padding: 4rem 5rem;

  height: auto;

  /* border-bottom: 1px solid #02337386; */

  @media screen and (max-width: 1160px) {
    text-align: justify;

    width: 100%;

    h3{
      font-size: 20px;
    }
  }

  @media screen and (max-width: 860px){
    padding: 4rem 2rem;
    text-align: justify;
  }

  @media screen and (max-width: 425px){
    
  }
`