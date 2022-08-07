//Variables generales
const n = navigator,
    d = document;

export default function infoUserAgent(id) {
    const $listaUserAgent = d.getElementById(id);
    
    const datosNavegador = {
        agenteDeUsuario: n.userAgent,
        plataforma: (n.userAgentData) ? n.userAgentData.platform : n.oscpu,
        navegador: (!n.userAgentData) 
            ? n.userAgent.match(/firefox/i).toString() 
            : n.userAgentData.brands[2].brand
    }
    
    $listaUserAgent.innerHTML = `
    <ul>
        <li>Agente de Usuario: <b>${datosNavegador.agenteDeUsuario}</b></li>
        <li>Plataforma: <b>${datosNavegador.plataforma}</b></li>
        <li>Navegador: <b>${datosNavegador.navegador}</b></li>
    </ul>
    `;


    if(datosNavegador.navegador === "Google Chrome"){
        $listaUserAgent.innerHTML += `<p><mark>Este contenido sólo se ve en Chrome</mark></p>`
    };

    if(datosNavegador.navegador === "Firefox"){
        $listaUserAgent.innerHTML += `<p><mark>Este contenido sólo se ve en Firefox</mark></p>`
    };

    if(datosNavegador.plataforma.match(/windows/i)){
        $listaUserAgent.innerHTML += `<p><mark>Este contenido sólo se ve en plataformas de escritorio</mark></p>`
    };

    if(datosNavegador.plataforma.match(/iphone|ipod|ipad|android|windows phone/i)){
        $listaUserAgent.innerHTML += `<p><mark>Este contenido sólo se ve en dispositivos móviles</mark></p>`
    };
};
