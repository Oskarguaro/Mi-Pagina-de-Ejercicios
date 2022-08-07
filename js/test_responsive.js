//Variables generales
const d = document;

//Variables Específicas
let url,
    alto,
    ancho,
    ventana;

export default function testResponsive(idForm, btnAbrir, btnCerrar) {
    const $btnAbrir = d.getElementById(btnAbrir);
    const $btnCerrar = d.getElementById(btnCerrar);
    const $formulario = d.getElementById(idForm);
    
    $btnCerrar.setAttribute("disabled", "");
    
    d.addEventListener("submit", (e) => {
        if(e.target === $formulario){
            e.preventDefault();
    
            url = $formulario.url.value,
            alto = $formulario.alto.value,
            ancho = $formulario.ancho.value;
            
            abrirVentanaTest($btnAbrir, $btnCerrar);
        };
    });

    d.addEventListener("click", (e) => {        
        if(e.target.matches(`#${btnCerrar}`)){
            ventana.close();
            $btnCerrar.setAttribute("disabled", "");
            $btnAbrir.removeAttribute("disabled");
        };        
    });
};

function abrirVentanaTest($btnAbrir, $btnCerrar) {
    
    let dimensiones = `innerHeight=${alto}, innerWidth=${ancho}`;
    ventana = window.open(url, "ventana1", `${dimensiones}`);
    
    $btnCerrar.removeAttribute("disabled");
    $btnAbrir.setAttribute("disabled", "");  
};
