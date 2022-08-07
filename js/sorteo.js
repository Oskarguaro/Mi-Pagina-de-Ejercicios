const d = document;

export default function sorteo(opcionesSorteo, btnSorteo, mensajeGanador) {
    const $btnSorteo = d.querySelector(btnSorteo);
    const $mensajeGanador = d.querySelector(mensajeGanador);
    
    d.addEventListener("click", (e) => {
        const $opciones = d.querySelectorAll(opcionesSorteo);
        
        if(e.target === $btnSorteo && $opciones.length > 0){
            let numSorteo = Math.round(Math.random()*($opciones.length - 1));
        
            $opciones.forEach((opcion, index) => {
                if(numSorteo === index){
                    // console.log(`El ganador es ${opcion.innerText}`);
                    $mensajeGanador.innerHTML = 
                    `
                        <p class="anuncio"><b>¡El ganador es!</b></p>
                        <p class="ganador">${opcion.innerText}</p>
                    `;
                    opcion.classList.remove("opcion");
                };
            });
        };
    });
};