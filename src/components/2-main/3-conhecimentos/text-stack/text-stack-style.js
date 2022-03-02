import styled from 'styled-components';

export const Textstack = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  div{
    p{
      margin-top: 1rem;

      text-align: justify;
      word-wrap: break-word;

      width: auto;

      @media screen and (max-width:480px) {
        padding-top: 1.3rem;
      }
    }
  }
`