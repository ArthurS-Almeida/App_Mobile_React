// IMAGENS
import FotoLuciana from "../styles/img/fotoLuciana.jpg";
import camera from "../styles/img/camera.png";
import chat from "../styles/img/chat.png";

// CSS
import "../styles/css/cardRemoto.css";

// SUBCOMPONENTS
import PerfilNome from "./subcomponents/nome";
import PerfilHorario from "./subcomponents/horario";



function ConsultaRemota(){
    
    return(
        <div id="card-remoto">
            <header id="card-remoto-perfil">
                <div id="card-remoto-texto-container">
                    <picture id="card-remoto-perfil-container">
                        <img src={FotoLuciana} alt="Foto de perfil de consulta da cliente."/>
                    </picture>

                    <div id="card-remoto-texto">
                        <PerfilNome name="Luciana Dias"/>
                            <fieldset id="remoto-texto-observacao">
                                <img src={camera} alt="Icone de camera"/>
                                <p>Consulta remota</p>
                            </fieldset>
                    </div>

                </div>
                
                <picture id="remoto-batepapo">
                    <img src={chat} alt="Icone de Bate-Papo."/>
                </picture>
            </header>
            
            <main id="perfil-horario">
                <PerfilHorario name="14:00 - 15:00 (1 Hora)"/>
            </main>
            <footer id="perfil-conteiner-botoes">
            <button class="perfil-botoes" id="perfil-botao1">
                <span>Ligar por vídeo</span>
            </button>
            <button class="perfil-botoes" id="perfil-botao2">
                <span>Ligar por áudio</span>
            </button>
        </footer>
        </div>
    );
}

export default ConsultaRemota;