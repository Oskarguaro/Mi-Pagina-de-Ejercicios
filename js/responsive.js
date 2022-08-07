//Función para generar un responsive design
const d = document,
    w = window;
    
export default function tamañoRenponsive(contenedorIframe) {
    const $contenedor = d.querySelector(contenedorIframe);

    if(w.matchMedia("(max-width: 600px)").matches){
        if(!($contenedor.firstElementChild.nodeName === "A")){
            $contenedor.innerHTML = `
            <p>Haga click en el link del video para oir la Hallel "Himno Hiné Melej".</p>
            <a href="https://www.youtube.com/watch?v=8pHbeD00iuU&ab_channel=LetrasdeYomSheva", alt="Hallel Gozo y Paz" target="_blank">Ver Video</a>
            <p>Haga click en el link para visualizar el mapa de Bogotá DC (Colombia) en google maps.</p>
            <a href="https://www.google.com.co/maps/place/Bogot%C3%A1/@4.6438352,-74.0927117,11z/data=!4m5!3m4!1s0x8e3f9bfd2da6cb29:0x239d635520a33914!8m2!3d4.7109886!4d-74.072092?hl=es-419" alt="Ubicación Bogotá DC" target="_blank">Ver Mapa</a>
            `        
        };
    };

    w.addEventListener("resize", (e) => {
        
        if(w.matchMedia("(min-width: 600px)").matches){
            // console.log("Tiene mas de 600 pixeles");
            if(!($contenedor.firstElementChild.nodeName === "IFRAME")){
                $contenedor.innerHTML = `
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/8pHbeD00iuU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen SameSite="none"></iframe>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254510.12228125503!2d-74.09271167962457!3d4.643835213435107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses-419!2sco!4v1650057478760!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                `
            };

        } else {
            // console.log("Tiene menos de 600 pixeles");
            if(!($contenedor.firstElementChild.nodeName === "A")){
                $contenedor.innerHTML = `
                <p>Haga click en el link del video para oir la Hallel "Himno Hiné Melej".</p>
                <a href="https://www.youtube.com/watch?v=8pHbeD00iuU&ab_channel=LetrasdeYomSheva", alt="Hallel Gozo y Paz" target="_blank">Ver Video</a>
                <p>Haga click en el link para visualizar el mapa de Bogotá DC (Colombia) en google maps.</p>
                <a href="https://www.google.com.co/maps/place/Bogot%C3%A1/@4.6438352,-74.0927117,11z/data=!4m5!3m4!1s0x8e3f9bfd2da6cb29:0x239d635520a33914!8m2!3d4.7109886!4d-74.072092?hl=es-419" alt="Ubicación Bogotá DC" target="_blank">Ver Mapa</a>
                `            
            };
        };
    });
};

