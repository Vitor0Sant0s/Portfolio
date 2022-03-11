import styled from 'styled-components';

export const CardStyle = styled.div`

  border: 1px solid rgba(17, 24, 38, 0.89);
  border-radius: 8px ;

  width: 285px;
  min-width: 280px;

  max-height: 400px;

  background-color:#212425;

  overflow: hidden;

  img{
    height: 150px;
    width: 100%;

    object-fit: cover;

    border-radius: 8px 8px 0 0 ;

    -moz-transition: all 0.3s linear;
    -webkit-transition: all 0.3s linear;
    transition: all 0.4s linear;
  }

  img:hover{
    -moz-transform: scale(1.03);
    -webkit-transform: scale(1.03);
    transform: scale(1.03);
  }

  div{
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    text-align: justify;
    
    h3{
      margin-bottom: 0.5rem;
      font-size: 24px;
      color: #DCE2F2;
    }

    p{
      line-height: 1.5;
      margin-bottom: 1rem;
      font-size: 16px;

      color: #DCE2F2;
    }
  }
`