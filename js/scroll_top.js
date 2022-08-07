const d = document;

export default function btnScrollTop(btnScrollTop, btnScrollSpy) {
    const $btnScroll = d.querySelector(btnScrollTop) || d.querySelector(btnScrollSpy);    

    d.addEventListener("scroll", () => {
        if(d.documentElement.scrollTop > 862){
            if($btnScroll.matches(".ocultar")){
                $btnScroll.classList.remove("ocultar");
            };
        } else if(!$btnScroll.matches(".ocultar")) {
            $btnScroll.classList.add("ocultar");
        };
    });

    d.addEventListener("click", (e) => {
        if(e.target.matches(btnScrollTop) || e.target.matches(btnScrollSpy)){
            scroll({
                top: 0,
                behavior: "smooth",
            });        
        };
    });
};
