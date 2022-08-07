function crearMenuDinamico(selectorTitulos) {
    const d = document;
    const $titulosH2 = d.querySelectorAll(selectorTitulos);

    //Creando las etiquetas HTML
    const $a = d.createElement("a");
    const $divLink = d.createElement("div");
    const $divContenedor = d.createElement("div");
    const $navMenu = d.createElement("nav");
    
    function crearMenuDesplegable() { 
        const $fragment = d.createDocumentFragment();
    
        // $navMenu.classList.add("menu", "mostrar-ocultar", "ocultar");
        $navMenu.classList.add("menu");
    
        $divContenedor.classList.add("container-menu");
    
        $titulosH2.forEach(titulo => {
    
            $divLink.classList.add("link-menu");
            
            $a.textContent = titulo.innerText;
            $a.classList.add("a-link");
            $a.style.setProperty("cursor", "pointer");
            
            const $cloneA = $a.cloneNode(true);
            const $cloneDivLink = $divLink.cloneNode(true); 
            $cloneDivLink.appendChild($cloneA);
            $fragment.appendChild($cloneDivLink);
        });
    
        $divContenedor.appendChild($fragment);
    };
    
    $navMenu.appendChild($divContenedor);
    d.body.appendChild($navMenu);
    crearMenuDesplegable();
};

//Delegación eventos Menú Hamburguesa
export default function menuHamburguesa (btnMenu, panelMenu, linkMenu, selectorTitulos) {
    crearMenuDinamico(selectorTitulos);
    
    const d = document,
    w = window;
    
    const $main = d.getElementById("main");
    
    d.addEventListener("click", (e) => {
                
        if(e.target.matches(btnMenu) || e.target.matches(`${btnMenu} *`)){
            // console.log("Evento Mostrar");
            d.querySelector(btnMenu).classList.toggle("is-active");
            d.querySelector(panelMenu).classList.toggle("is-active");
        };
        
        if(e.target.matches(linkMenu)){
            d.querySelectorAll(selectorTitulos).forEach(titulo => {
                if(titulo.innerText === e.target.innerText){
                    // console.log(titulo.offsetWidth);
                    // console.log(titulo.offsetTop);
                    // console.log("Evento Ocultar del link");
                    d.querySelector(btnMenu).classList.remove("is-active");
                    d.querySelector(panelMenu).classList.remove("is-active");
                    moverVentana(titulo.offsetWidth, titulo.offsetTop);
                };
            });
        };
    });
    
    w.addEventListener("resize", () => {
        if(w.matchMedia("(max-width: 1024px)").matches) {
            if(!d.querySelector(panelMenu)){
                crearMenuDinamico(selectorTitulos);
                $main.removeChild(d.getElementById("menu-scroll-spy"));
                d.querySelector(btnMenu).classList.remove("is-off");
                d.querySelector(".btn_scroll_top_spy").classList.replace("btn_scroll_top_spy", "btn_scroll_top");
            };
        };
    });
};

//Creando la búsqueda y desplazamiento de la ventana de navegación (Menú Hamburguesa)
function moverVentana(x, y){
    scroll({
        left: x,
        top: y,
        behavior: "smooth"
    });
};
