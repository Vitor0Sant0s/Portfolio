import Header from '../components/1-header/Header';
import Main from '../components/2-main/Main';
import Footer from '../components/3-footer/Footer';

import { Container } from '../components/container-styles'



function Home() {
  return (
    <Container>
      <Header/>
      <Main/>
      <Footer/>
    </Container>
  );
}

export default Home;
