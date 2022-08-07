const d = document,
    w = window,
    n = navigator;

export default function geoLocalización(seccion) {
    const $p = d.querySelector(`${seccion} p`);

    n.geolocation.getCurrentPosition(
        (posicion) => {
            $p.insertAdjacentHTML("afterend", 
                `
                    <p class="p-centrado"><b>Su ubicación actual es:</b></p>
                    <p class="p-centrado">Latitud: <b>${posicion.coords.latitude}</b></p>
                    <p class="p-centrado">Longitud: <b>${posicion.coords.longitude}</b></p>
                    <p class="p-centrado">Precisión: <b>${Math.round(posicion.coords.accuracy)}</b> metros</p>
                    <br>
                    <br>
                    <a href="https://www.google.com.co/maps/@${posicion.coords.latitude},${posicion.coords.longitude},18z" target="_blank">Ver en GoogleMaps</a>
                `
            );
        },
        (err) => {
            $p.insertAdjacentHTML("afterend", 
                `<p class="p-centrado">Error ${err.code}: <mark>${err.message}</mark></p>`
            );
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        },
    );
};