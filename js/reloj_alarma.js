//Reloj digital para mostrar la hora en los sitios web
const d = document;

export function reloj(claseEtiquetaReloj, btnIdMostrarReloj, btnIdOcultarReloj){
    
    const $reloj = d.querySelector(claseEtiquetaReloj);
    const $btnMostrar = d.getElementById(btnIdMostrarReloj);
    const $btnOcultar = d.getElementById(btnIdOcultarReloj);
    
    let reloj;
    
    d.addEventListener("click", (e) => {
        if(e.target.matches(`#${btnIdMostrarReloj}`)){
            $reloj.textContent = new Date().toLocaleTimeString();
            reloj = setInterval(() => {
               $reloj.textContent = (new Date().toLocaleTimeString());
            //    console.log((new Date().toLocaleTimeString()));
            }, 1000)
            $btnMostrar.setAttribute("disabled", "");
            $btnOcultar.removeAttribute("disabled");
        };
        
        if(e.target.matches(`#${btnIdOcultarReloj}`)){
            clearInterval(reloj);
            $reloj.textContent = "";
            $btnMostrar.removeAttribute("disabled");
            $btnOcultar.setAttribute("disabled", "");
        };  
    });
};

export function alarma(linkAudio, btnIdPlayAlarma, btnIdStopAlarma) {
    // const $alarma = d.querySelector(claseEtiquetaAlarma);
    const $btnPlay = d.getElementById(btnIdPlayAlarma);
    const $btnStop = d.getElementById(btnIdStopAlarma);

    const $etiquetaAudio = d.createElement("audio");
    $etiquetaAudio.src = linkAudio;
    
    d.addEventListener("click", (e) => {
        if(e.target.matches(`#${btnIdPlayAlarma}`)){
            $etiquetaAudio.play();
            $etiquetaAudio.setAttribute("loop", "");
            $btnStop.removeAttribute("disabled");
            $btnPlay.setAttribute("disabled", "");
        };
    
        if(e.target.matches(`#${btnIdStopAlarma}`)){
            $etiquetaAudio.pause();
            $etiquetaAudio.currentTime = 0;
            $etiquetaAudio.removeAttribute("loop", "");
            $btnStop.setAttribute("disabled", "");
            $btnPlay.removeAttribute("disabled");
        };
    
    });
};