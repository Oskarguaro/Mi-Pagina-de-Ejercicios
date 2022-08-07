//Importaciones
//Menú dinámico, menú hamburguesa y su función de desplazamiento
import menuHamburguesa from "./menu_hamburgesa.js";
//Reloj digital y alarma
import { reloj, alarma } from "./reloj_alarma.js";
//Eventos de teclado: desplazamiento de objetos y combinación de teclas especiales para crear atajos
import { moverObjetoConTeclado, atajosAlt} from "./eventos_teclado.js"
//Importando el contador regresivo o temporizador
import { cuentaRegresiva } from "./temporizador.js";
import btnScrollTop from "./scroll_top.js";
//Importando función para el botón de cambio de temas
import cambiarTema from "./temas.js";
//Importando función para almacenar tema seleccionado en Local Storage
import temaLocalStorage from "./local_storage.js";
//Función para cambiar tamaño a modo responsive
import tamañoRenponsive from "./responsive.js";
//Función probar ventana responsive
import testResponsive from "./test_responsive.js";
//Función para obtener datos del User Agent
import infoUserAgent from "./user_agent.js";
//Función para detectar estado de la conexión
import detectorConexion from "./detector_conexion.js";
//Función para detectar cámara y dispositivos
import detectarCam from "./deteccion_cam.js";
//Función para activar la geolocalización
import geoLocalización from "./geolocalizacion.js";
//Función para el filtro de búsqueda
import filtroBusqueda from "./filtro_busqueda.js";
//Función para seleccionar al ganador del sorteo
import sorteo from "./sorteo.js";
//Función para el carrusel de elementos
import responsiveSlider from "./slider.js";
//Función para crear el menu responsivo espía
import menuResponsivoActivo from "./menu_scroll_spy.js";
//Detector del video
import videoInteligente from "./video_inteligente.js";
//Validar campos del formulario contacto
import validarContacto from "./validacion-contacto.js";
//Usar narrador de texto
import narrador from "./narrador.js";

//Variables generales
const d = document,
    w = window,
    n = navigator;
// console.log($secciones[2]);


//Ejecución de las funciones importadas para cada ejercicio
d.addEventListener("DOMContentLoaded", (e) => {
    menuHamburguesa(".btn-menu", ".menu", ".a-link", "h2");
    reloj(".reloj", "iniciar-reloj", "detener-reloj");
    alarma("audio/alarma.mp3", "iniciar-alarma", "detener-alarma");
    moverObjetoConTeclado("seccion3");
    atajosAlt();
    cuentaRegresiva();
    btnScrollTop(".btn_scroll_top", ".btn_scroll_top_spy");
    temaLocalStorage("btn_temas");
    tamañoRenponsive(".contenedor-iframe");
    testResponsive("formulario", "btn_abrir_test", "btn_cerrar_test");
    infoUserAgent("lista-user-agent");
    detectarCam("seccion12", "iniciar-cam", "detener-cam");
    geoLocalización("#seccion13");
    filtroBusqueda("#seccion14", ".card");
    sorteo(".opcion",".btn-sorteo", ".msg-ganador");
    responsiveSlider(".pag", ".btn-av", ".btn-re");
    menuResponsivoActivo(".btn-menu", ".menu", "h2", ".container-secciones");
    videoInteligente(".video-spy", "127.0.0.1");
    validarContacto(".input-dato");
    narrador();
});

//Saco la funcion del evento "DOMContentLoaded" del js principal para poder ejecutar el evento "DOMContentLoaded" que se encuentra dentro de la función cambiarTema()
cambiarTema("btn_temas");

//Se puede dejar por fuera de la carga del DOM
detectorConexion("seccion11");

// const $h1 = d.querySelector("h1");
// console.log($h1.getBoundingClientRect());