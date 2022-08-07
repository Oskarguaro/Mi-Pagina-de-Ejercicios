//Variables generales
const d = document,
    ls = localStorage;

//Variables elementos HTML
const $temporizador = d.querySelector(".temporizador"),
    $formDate = d.getElementById("form-date"),
    $conteoOffBtn = d.querySelector(".conteo-off-btn");

//Creando función de conteo regresivo
export function cuentaRegresiva() {
    let fechaFinal = "",
        mensaje = "";
    
    if(ls.getItem("conteo") !== null) {
        fechaFinal = ls.getItem("conteo");
        mensaje = ls.getItem("mensaje");
        iniciarConteo(fechaFinal, mensaje);
    };
    
    d.addEventListener("click", (e) => {

        const $conteoBtn = d.querySelector("#form-date button");
        const [fecha, hora] = d.querySelectorAll("#form-date input"),
        $mensaje = d.querySelector("#form-date textarea");
        
        if(e.target === $conteoBtn && fecha.value !== "" && hora.value !== "" && $mensaje.value !== ""){
            
            // console.log(fecha.value, hora.value, $mensaje.value);
            
            fechaFinal = `${fecha.value}T${hora.value}`;
            mensaje = $mensaje.value
            
            ls.setItem("conteo", `${fecha.value}T${hora.value}`);
            ls.setItem("mensaje", `${mensaje}`)
            
            iniciarConteo(fechaFinal, mensaje);
        };
    });
};

function iniciarConteo(fechaFinal, mensaje) {

    let conteo = setInterval(() => {

        let diferenciaTiempo = (new Date(fechaFinal)  - new Date()) / 1000;
        let dias = Math.floor(diferenciaTiempo / (60 * 60 * 24)),
            horas = ("0" + Math.floor((diferenciaTiempo % (60 * 60 *24))/(60 * 60))).slice(-2),
            minutos = ("0" + Math.floor((diferenciaTiempo % (60 * 60)) / 60)).slice(-2),
            segundos = ("0" + Math.floor(diferenciaTiempo % 60)).slice(-2);
        
        $temporizador.innerHTML = `Faltan: <b>${dias} Días ${horas} Horas ${minutos} Minutos ${segundos}</b> Segundos para ${mensaje}`;
        $conteoOffBtn.textContent = "Detener";
        $conteoOffBtn.classList.remove("is-off");
        $formDate.classList.add("is-off");

        if(Math.floor(diferenciaTiempo) <= 0){
            clearInterval(conteo);
            $temporizador.classList.remove("temporizador");
            $temporizador.classList.add("mensaje");
            $temporizador.textContent = mensaje; 
            $conteoOffBtn.textContent = "Regresar";  
        };

        d.addEventListener("click", (e) => {
            if(e.target === $conteoOffBtn){
                clearInterval(conteo);
                $temporizador.innerHTML = "";
                $temporizador.classList.remove("mensaje");
                $temporizador.classList.add("temporizador");
                $formDate.classList.remove("is-off");
                $conteoOffBtn.classList.add("is-off");
            };
        });
    }, 1000);     
};