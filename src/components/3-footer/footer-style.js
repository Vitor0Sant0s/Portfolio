import styled from 'styled-components';

export const Rodape = styled.footer`
  border-top: 1px solid #0070F3;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem;

  font-size: 14px;
  font-weight: 300;

  div{
    display: flex;
    justify-content: space-between;
    color: white;

    font-size: 32px;

    width: 200px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 3rem;
    font-size: 12px
  }

`