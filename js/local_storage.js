const d = document;

export default function temaLocalStorage(btnTemas) {
    if(localStorage.getItem("icono")){
        const $btnTemas = d.getElementById(btnTemas);

        $btnTemas.textContent = localStorage.getItem("icono");
        $btnTemas.style.backgroundColor = localStorage.getItem("colorBtn");
        d.body.style.backgroundColor = localStorage.getItem("colorBody");
        d.body.style.color = localStorage.getItem("colorTexto");
    };
};