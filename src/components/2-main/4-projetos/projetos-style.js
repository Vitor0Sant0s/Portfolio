import styled from 'styled-components';

export const ProjetosStyle = styled.section`

  display: flex;
  flex-direction: column;

  gap: 4rem;

  padding: 4rem 5rem 3rem;

  height: auto;

  .projet{
    display: flex;
    align-items: center;
    justify-content: space-around;

    flex-wrap: wrap;
  }

  .repo{
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    a{
      text-decoration: none;
    }

    a::after{
      content: "";
      display: block;
      border-bottom: solid 1px #0070F3;

      transform: scaleX(0);
      transition: transform 300ms ease-in-out;
    }
  
    a:hover:after{ 
      transform: scaleX(1); 
      transform-origin: 100% 0%; 
    }
  }

  @media (max-width: 1220px){
    .projet{
      div:nth-child(3){
        margin-right: 21rem;
      }
    }
  }

  @media screen and (max-width: 1190px) {
    .projet{ 
      justify-content: center;
      align-items: center;
      gap: 3rem;

    }
  }

  @media screen and (max-width: 860px){
    padding: 0rem 2rem 3rem;
  }

  @media screen and (max-width: 768px){
    .projet{
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;

      gap: 3rem;

      div:nth-child(3){
        margin-right: 0;
      }
    }
  }
`