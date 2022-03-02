import styled from 'styled-components';

export const Sobremim = styled.section`
  
  display: flex;
  justify-content: space-around;
  align-items: center;

  gap: 4rem;

  padding: 4rem 5rem;

  height: 80vh;

  div:nth-child(1){
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 3rem;

    /* text-align: justify; */
    line-height: 1.8rem;

    h2{
      font-weight: 700;
      font-size: 30px;
      color: #f2f2f2;
      span{
        font-size: 54px;
        color: #0070F3; 
      }
    }
  }

  div:nth-child(2){
    /* flex-grow: 1; */
    padding-top: 2rem;

    img{
      width: 500px;
      animation: float 5s linear infinite;
    }
  }

  @media screen and (max-width: 1160px) {
    flex-wrap: wrap;
    align-items: flex-start;

    text-align: justify;

    height: auto;

    div:nth-child(2){
      display: none;
    }
  }

  @media screen and (max-width: 860px){
    padding: 4rem 2rem;
    text-align: justify;
  }

  @media screen and (max-width: 425px){
    div:nth-child(1){
      h2{
        font-size: 26px;
      }
    }
  }

  @keyframes float{
    0%,100%{
      transform:translatey(0)
    }
    50%{
      transform:translatey(-15px)
    }
  } 
`