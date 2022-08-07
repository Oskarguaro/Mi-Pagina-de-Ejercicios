const d = document;

export default function responsiveSlider(selector, btnAv, btnRe) {
    const $pag = d.querySelectorAll(selector),
        $btnAv = d.querySelector(btnAv),
        $btnRe = d.querySelector(btnRe);

    let i = 0;

    let autoPlay = setInterval(() => {
        $pag[i].classList.remove("z-slider");
        ++i
        if(i >= $pag.length) i = 0;
        $pag[i].classList.add("z-slider");    
    }, 5000);    
    
    d.addEventListener("click", (e) => {
         
        if(e.target === $btnAv){
            $pag[i].classList.remove("z-slider");
            ++i;
            if(i >= $pag.length) i = 0;          
            $pag[i].classList.add("z-slider");
            detenerInterval();
            reiniciarInterval();
        };
        
        if(e.target === $btnRe){
            $pag[i].classList.remove("z-slider");
            --i;
            if(i < 0) i = $pag.length - 1;
            $pag[i].classList.add("z-slider");
            detenerInterval();
            reiniciarInterval();   
        };
    });
    
    function reiniciarInterval() {
        autoPlay = setInterval(() => {
                $pag[i].classList.remove("z-slider");
                ++i
                if(i >= $pag.length) i = 0;
                $pag[i].classList.add("z-slider");    
            }, 5000);     
    };

    function detenerInterval() {
        clearInterval(autoPlay);
    }
};
