import styled from 'styled-components';

export const Notfound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  width: 100%;
  height: 100vh;

  h1{
    font-size: 46px;
    font-weight: 700;
  }

  p{
    font-size: 18px;
    font-weight: 300;
    color: #DCE2F2
  }

  span{
    color:#0070F3;
    font-size: 54px;
  }

  div{
    display: flex;
    align-items: center;
    gap: 0.5rem;

    text-decoration: none;

    padding: 0.5em;

    border-bottom: 2px solid #0070F3;
  }
`
