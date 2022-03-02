import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 4rem;

  list-style: none;

  z-index: 1000;
  
  li::after{
    content: "";
    display: block;
    border-bottom: solid 1px #0070F3;

    transform: scaleX(0);
    transition: transform 300ms ease-in-out;
  }
  
  li:hover:after{ 
    transform: scaleX(1); 
    transform-origin: 100% 0%; 
  }

  a{
    text-decoration: none;
    font-weight: 700;
    color: #DCE2F2;
  }
    
  @media screen and (max-width: 860px) {
    justify-content:space-around;
    /* display: none; */
  }

  @media screen and (max-width: 800px){

    flex-direction: column;
    justify-content: space-evenly;

    background-color: #0f1112;

    transform: ${({open})=> open ? 'translateX(100%)' : 'translateX(0)'};
    transition: transform 0.3s linear;
    position: fixed;
    top: 0;
    right: 0;

    width: 100%;
    height: 100vh;

    padding: 3.5rem 0;
  }
`

export const LinkNav = styled.a`
  
`