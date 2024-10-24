import fotoPerfil from '../styles/img/fotoPerfil.jpg'
import "../styles/css/perfil.css"

function Perfil(){
    const nomeCliente = 'Sônia';
    return(
        <div className="Perfil">
            <header id="cabecalho-perfil">
                <picture id="container-foto-perfil">
                    <img src={fotoPerfil} alt="Imagem de perfil"/>
                </picture>
                <fieldset id="container-texto">
                    <h1 id="container-texto-nome">Olá, {nomeCliente}</h1>
                    <p id="container-texto-observacao">Mais 4 consultas hoje</p>
                </fieldset>
            </header>
        </div>
    );
}

export default Perfil;
