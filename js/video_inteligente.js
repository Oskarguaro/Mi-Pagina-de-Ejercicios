const d = document,
    w = window;

export default function videoInteligente(selector, dominio) {
    const $video = d.querySelectorAll(selector);

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
    };

    let observer = new IntersectionObserver(callback, options);
    $video.forEach(el => observer.observe(el));

    function callback(entradas) {
        entradas.forEach(video => {
            // console.log(video);
            
            if(video.isIntersecting){
                video.target.play();
            } else {
                video.target.pause();
            };
        });

        d.addEventListener("visibilitychange", (e) => {
            // console.log(e.target.visibilityState);
            entradas.forEach(video => {
                if(e.target.visibilityState === "visible"){
                    return callback(entradas);
                } else if(e.target.visibilityState === "hidden"){
                    video.target.pause();
                };
            });
        });
    };
};

