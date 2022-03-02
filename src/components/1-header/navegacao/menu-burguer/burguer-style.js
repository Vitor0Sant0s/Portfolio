import styled from 'styled-components';

export const MenuBurguer = styled.div`

  display: ${(open) => open ? 'block' : 'none'};

  @media screen and (max-width: 800px){

    width: 2rem;
    height: 2rem;

    position: fixed;

    top: 15px;
    right: 40px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    z-index: 2000;


    div{
      width: 2rem;
      height: 0.15rem;

      background-color: #f2f2f2;

      border-radius: 10px;

      transform-origin: 1px;
      transition: all 0.2s ease-in-out;

      &:nth-child(1){
        transform: ${({open}) => !open ? 'rotate(45deg)' : 'rotate(0)'};
      }
      &:nth-child(2){
        transform: ${({open}) => !open ? 'traslateX(100%)' : 'translate(0)'};
        opacity: ${({open}) => !open ? 0 : 1}
      }
      &:nth-child(3){
        transform: ${({open}) => !open ? 'rotate(-45deg)' : 'rotate(0)'};
      }
    }
  }
`
