const d = document,
    w = window,
    $main = d.getElementById("main");

function crearMenuScroll(selector){
    const $titulos = d.querySelectorAll(selector),
        $nav = d.createElement("nav"),
        $a = d.createElement("a"),
        $fragment = d.createDocumentFragment();
    
    $nav.id = "menu-scroll-spy";

    $titulos.forEach(titulo => {
        $a.href = `#${titulo.parentElement.id}`;

        const $clone = $a.cloneNode(true);
        $clone.textContent = titulo.textContent;
        $fragment.appendChild($clone);
    });
    
    $nav.appendChild($fragment);
    $main.appendChild($nav);

};

function ordenandoElementos(btnMenu, panelMenu) {    
    d.querySelector(btnMenu).classList.add("is-off");
    if(d.querySelector(panelMenu)) d.body.removeChild(d.querySelector(".menu"));
    d.querySelector(".btn_scroll_top").classList.replace("btn_scroll_top", "btn_scroll_top_spy");    
};

export default function menuResponsivoActivo(btnMenu, panelMenu, selectorTitulos, selectorSecciones){
    if(w.matchMedia("(min-width: 1024px)").matches) {
        crearMenuScroll(selectorTitulos);
        ordenandoElementos(btnMenu, panelMenu);
        scrollEspia(selectorSecciones);
    };
    
    w.addEventListener("resize", () => {
        if(w.matchMedia("(min-width: 1024px)").matches) {
            if(!d.getElementById("menu-scroll-spy")){
                crearMenuScroll(selectorTitulos);
                ordenandoElementos(btnMenu, panelMenu);
                scrollEspia(selectorSecciones);
            };
        };
    });
};

function scrollEspia(selector) {
    const $secciones = d.querySelectorAll(`${selector} section`),
        $a = d.querySelectorAll("#menu-scroll-spy a");
    
    // $secciones.forEach(seccion => console.log(seccion.getBoundingClientRect()))

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };
  
    let observer = new IntersectionObserver(callback, options);
    
    $secciones.forEach(seccion => observer.observe(seccion));

    function callback(entradas){
        entradas.forEach(entrada => {
            // console.log(entrada);
            
            if(entrada.isIntersecting === true){
                $a.forEach(ancla => {
                    if(ancla.textContent === entrada.target.firstElementChild.textContent){
                        ancla.style.color = "var(--second-color)";
                        ancla.style.backgroundColor = "var(--main-color)";
                    } else if(ancla.textContent !== entrada.target.firstElementChild.textContent){
                        ancla.removeAttribute("style");
                    };
                });
            };
        });
    };    
};
