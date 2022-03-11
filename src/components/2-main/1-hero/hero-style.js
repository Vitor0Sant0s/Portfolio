import styled from 'styled-components';

export const Heroarea = styled.section`

  display: flex;
  flex-direction: column;

  gap: 1rem;

  padding: 10rem 0 0 6rem;
  
  height: 100vh;

  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url('https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=1536');  
  background-size: cover;
  background-position: center;

  span:nth-child(1), span:nth-child(3), span:nth-child(4){
    font-size: 20px;
  }

  span:nth-child(2){
    font-size: 58px;
    font-weight: 700;
  }

  span:nth-child(4){
    color: #0070F3;
    font-weight: 700;
  }

  @media screen and (max-width: 800px){
    padding: 9rem 0 0 4rem;
  }

  @media screen and (max-width: 768px){
    
    span:nth-child(1), span:nth-child(3), span:nth-child(4){
      font-size: 18px;
    }

    span:nth-child(2){
      font-size: 46px;
    }
  }

  @media screen and (max-width: 500px) {

    padding: 8rem 3rem;
    height: 100vh;

    span:nth-child(1), span:nth-child(3), span:nth-child(4){
      font-size: 16px;
    }

    span:nth-child(2){
      font-size: 35px;
    }
  }

  @media screen and (min-height: 740px){
    height: 70vh;
  }

`