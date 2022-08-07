const d = document;

export default function narrador() {
    const $formVoz = d.getElementById("form-rec-voz"),
    $cuadroTexto = $formVoz.querySelector("textarea[name='texto']"),
    $btnVoz = $formVoz.querySelector(".btn-rec-voz"),
    $select = $formVoz.querySelector("select[name='select-voz']");

    let voces = speechSynthesis.getVoices();

    setTimeout(() => {
        voces = speechSynthesis.getVoices();
            
        voces.forEach(voz => {
            const $optionVoz = d.createElement("option");
            $optionVoz.textContent = `${voz.name}/(${voz.lang})`;
            $select.appendChild($optionVoz);
        });
    
    }, 500);

    d.addEventListener("click", (e) => {      
        if(e.target === $btnVoz){            
            e.preventDefault();

            voces = speechSynthesis.getVoices();
            
            let texto = new SpeechSynthesisUtterance($cuadroTexto.value);
            
            if($cuadroTexto.value === "") texto = new SpeechSynthesisUtterance($cuadroTexto.title);

            voces.forEach(voz => {
                if(`${voz.name}/(${voz.lang})` == $select.value) return texto.voice = voz;
            });

            const hablar = () => speechSynthesis.speak(texto);
            hablar();      
        };
    });
};
