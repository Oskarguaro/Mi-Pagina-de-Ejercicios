const d = document;

export default function filtroBusqueda(seccion, cards) {
    const $cards = d.querySelectorAll(cards);
    const $input = d.querySelector(`${seccion} input`);
        
    d.addEventListener("keyup", (e) => {
        // console.log($input.value);
        if(e.target === $input){
            
            if(e.target === "Escape") e.target.value = "";

            $cards.forEach(el => {
                (el.innerText.toLowerCase().includes(e.target.value))
                    ? el.removeAttribute("style")
                    : el.style.display = "none";
            });    
        };
    });
};