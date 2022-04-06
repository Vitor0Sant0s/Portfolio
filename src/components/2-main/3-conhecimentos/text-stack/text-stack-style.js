import styled from 'styled-components';

export const Textstack = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  div{
    max-width: 750px;

    p{
      
      margin-top: 1rem;

      text-align: justify;
      word-wrap: break-word;

      width: auto;

      @media screen and (min-width:1160px){
        min-width: 750px;
      }

      @media screen and (max-width:480px) {
        padding-top: 1.3rem;
      }
    }
  }
`