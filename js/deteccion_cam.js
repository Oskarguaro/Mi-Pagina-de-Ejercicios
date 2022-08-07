const d = document,
    w = window,
    n = navigator;

export default function detectarCam(seccion, idBtnIniciar, idBtnDetener) {
    const $btnIniciar = d.getElementById(idBtnIniciar);
    const $btnDetener = d.getElementById(idBtnDetener);
    const $seccion12 = d.getElementById(seccion);
    
    d.addEventListener("click", (e) => {
        if(e.target === $btnIniciar){
            const $video = d.createElement("video");
            $video.classList.add("video-cam");
            $video.setAttribute("autoplay", "");
            $seccion12.children[2].insertAdjacentElement("afterend", $video);
            $btnIniciar.setAttribute("disabled", "");
            $btnDetener.removeAttribute("disabled");
            
            (async () => {
                
                const mediaStream = await n.mediaDevices.getUserMedia(
                    {
                        video: {
                            width: 1280,
                            height: 800,
                        }, 
                        audio: true,
                    }
                    );
                    
                    $video.srcObject = mediaStream;
                })();
                
            };
            
            if(e.target === $btnDetener){
                const $video = d.querySelector(".video-cam");
                $video.srcObject = null;
                $seccion12.removeChild($video)
                $btnIniciar.removeAttribute("disabled");
                $btnDetener.setAttribute("disabled", "");
            };
        });

};