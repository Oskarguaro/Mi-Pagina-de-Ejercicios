const d = document,
    ls = localStorage;

export default function cambiarTema(btnTemas) {
    
    const $btnTemas = d.getElementById(btnTemas);

    const temaLight = () => {
        $btnTemas.textContent = "🌙";
        $btnTemas.removeAttribute("style");
        d.body.removeAttribute("style");
        ls.setItem("tema", "light");
    };

    const temaDark = () => {
        $btnTemas.textContent = "☀️";
        $btnTemas.style.backgroundColor = "var(--main-color)";
        d.body.style.backgroundColor = "var(--second-color)";
        d.body.style.color = "var(--main-color)";
        ls.setItem("tema", "dark");
    };
    
    d.addEventListener("click", (e) => {
        if(e.target.matches(`#${btnTemas}`)){
            if($btnTemas.textContent === "☀️"){
                // console.log("Funciona el botón día");
                temaLight();                
            } else {
                // console.log("Funciona el botón noche");
                temaDark();
            };
        };
    });

    d.addEventListener("DOMContentLoaded", () => {
        if(ls.getItem("tema") === "light") temaLight();
        if(ls.getItem("tema") === "dark") temaDark();
    });
};
