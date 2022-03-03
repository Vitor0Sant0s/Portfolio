import styled from 'styled-components';

export const ProjcStyle = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4rem;

  padding: 4rem 5rem;

  height: auto;

  div:nth-child(3){
    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 1rem;

    a{
      text-decoration: none;

      font-weight: bold;
  }
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

  div{
    display: flex;
    justify-content: space-between;

    gap: 4rem;

    flex-wrap: wrap;
  }

  @media screen and (max-width: 1190px) {
    div{
      
      justify-content: center;
      align-items: center;
      /* flex-direction: column; */

      gap: 3rem;

      &:nth-child(3){
        margin-right: 22rem;
      }
    }

    .repo{
      width: 100%;
      text-align: center;
    }

  }

  @media screen and (max-width: 860px){
    padding: 4rem 2rem;
  }

  @media screen and (max-width: 768px){
    div{
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;

      gap: 4rem;


      &:nth-child(3){
        margin-right: 0;
      }

    }
  }
`