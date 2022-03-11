import styled from 'styled-components';

export const Cardstyle = styled.div`

  display: flex;
  flex-direction: column;

  border: 1px solid #dce2f2;
  border-radius: 10px;

  min-width: 275px;
  max-width: 300px;

  padding-top: 1rem;

  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
  url(${props => props.background});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  div{
    
    h3{
      padding: 0.5rem 1rem;
    }
    
    div{
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    height: auto;

    padding: 0 1rem;

    }
  
    p{
      padding: 0 1rem;
    }
  }
`