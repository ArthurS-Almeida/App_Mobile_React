import Perfil from "../components/perfil";
import ConsultaRemota from "../components/cardConsultaRemoto";
import ConsultaPresencial from "../components/cardConsultaPresencial";
import Luciana from '../components/cardConsultaRemoto'
import "../styles/css/home.css";

function Home() {
    return (
      <main id="main">
        <Perfil/>     
        <h1 id="data">Hoje</h1>   
        <section id="consultas">
          <ConsultaRemota/>
          <ConsultaPresencial/>

        </section>
      </main>
    );
  }
  
  export default Home;