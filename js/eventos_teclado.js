
//Variables generales
const d = document,
    w = window;
    
//Declarando variables "x" y "y" para mover el círculo

export function moverObjetoConTeclado(classEtiqueta) {
    let x = 0,
        y = 0;
    
    //Creando etiquetas HTML dinamicas
    const $seccion3 = d.getElementById(classEtiqueta);
    
    //Creando el div contenedor del objeto a mover
    const $divPlano = d.createElement("div");
    $divPlano.classList.add("plano");
    
    //Creando etiqueta figure y dándole forma de círculo
    const $circulo = d.createElement("figure");
    $divPlano.appendChild($circulo);
    $seccion3.children[2].before($divPlano);
    // console.log($seccion3.children[2]);

    //Creando scroll spy para desactivar comportamiento por default de las teclas
    d.addEventListener("keydown", (e) => {
        //Creando espía para el plano
        let options = {
            root: null,
            rootMargin: "0px",
            threshold: 1,
        };
    
        let observer = new IntersectionObserver(callback, options);
    
        observer.observe($divPlano);
    
        function callback(entrada){
            if(entrada[0].isIntersecting === true) {
                teclasMovimiento();
            };
        };
    
        //Delegando eventos a las teclas de desplazamiento para mover el objeto
        function teclasMovimiento(){
            //Declarando variables para detectar colisiones
            const limCirculo = $circulo.getBoundingClientRect(),
                    limPlano = $divPlano.getBoundingClientRect()
           
        
            if(e.key === "ArrowLeft" && limCirculo.left > limPlano.left){
                // console.log("Movimiento a la izquierda");
                e.preventDefault();
                x -= 6;
                $circulo.style.transform = `translate(${x}px, ${y}px)`;
            };
        
            if(e.key === "ArrowRight" && limCirculo.right < limPlano.right){
                // console.log("Movimiento a la derecha");
                e.preventDefault();
                x += 6;
                $circulo.style.transform = `translate(${x}px, ${y}px)`;
            };
            
            if(e.key === "ArrowUp" && limCirculo.top > limPlano.top){
                // console.log(limCirculo.top, limPlano.top);
                // console.log("Movimiento arriba");
                e.preventDefault();
                y -= 6;
                $circulo.style.transform = `translate(${x}px, ${y}px)`;
            };
        
            if(e.key === "ArrowDown" && limCirculo.bottom < limPlano.bottom){
                // console.log(limCirculo.bottom, limPlano.bottom);
                // console.log("Movimiento abajo");
                e.preventDefault();
                y += 6;
                $circulo.style.transform = `translate(${x}px, ${y}px)`;
            };      
        };
    });    
};

//Creando atajos Alt + a/A, Alt + p/P y Alt + c/C
export function atajosAlt() {
    const d = document;

    //Delegando eventos para cada combinación de teclas Alt
    d.addEventListener("keydown", (e) => {
        if(e.altKey && (e.key === "a" || e.key === "A")){
                alert("Has lanzado una alerta");
        };
        
        if(e.altKey && (e.key === "p" || e.key === "P")){
                prompt("Has lanzado un aviso");
        };
        
        if(e.altKey && (e.key === "c" || e.key === "C")){
                prompt("Has lanzado una confirmación");
        };
    });
};

