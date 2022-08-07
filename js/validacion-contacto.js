const d = document,
    w = window;

export default function validarContacto(inputDato) {
    const $inputs = d.querySelectorAll(inputDato);

    $inputs.forEach(input => {
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("mensaje-incorrecto", "is-off");
        input.after($span);
    });

    d.addEventListener("keyup", (e) => {

        if(e.target.matches(".input-dato")){
            let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern;
    
            if(pattern && $input.value !== ""){
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                    ? d.getElementById($input.name).classList.add("mostrar-mensaje")
                    : d.getElementById($input.name).classList.remove("mostrar-mensaje");
            };
    
            if(!pattern){
                return $input.value === ""
                    ? d.getElementById($input.name).classList.add("mostrar-mensaje")
                    : d.getElementById($input.name).classList.remove("mostrar-mensaje");
            };
        };
    });

    d.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const $loaderBlack = d.querySelector(".form-loader-black"),
            $loaderLight = d.querySelector(".form-loader-light"),
            $response = d.querySelector(".form-response");
    
        if(localStorage.getItem("tema") === "light") $loaderBlack.classList.remove("is-off");
        if(localStorage.getItem("tema") === "dark") $loaderLight.classList.remove("is-off");
        
        setTimeout(() => {
            if(localStorage.getItem("tema") === "light"){
                $loaderBlack.classList.add("is-off");
            } else {
                $loaderLight.classList.add("is-off");
            };
            $response.classList.remove("is-off");
            d.getElementById("form-contacto").reset();

            setTimeout(() => $response.classList.add("is-off"), 3000)
        }, 3000);
    });


    /* const $formContacto = d.getElementById("form-contacto");
    const [nombre, email, asunto, comentario] = d.querySelectorAll(datos);
    const $div = d.createElement("div");
    const $btnContacto = d.querySelector(".contacto-btn");
    
    let validarNombre = () => {
        let expReg = /[0-9°}{~^!"#$%&/()=?¡+,*_:;@<>¿-]|[\\\]\[]/ig;
        
        if(expReg.test(nombre.value)){           
            $div.textContent = "Has ingresado caracteres no válidos en el campo nombre";
            nombre.className = "input-dato input-incorrecto";
            $div.classList.add("mensaje-incorrecto");
            nombre.after($div);
            setTimeout(() => {
                $div.classList.add("mostrar-mensaje");
            }, 50);
            // console.log("funciona la validacion");
        } else {           
            $div.classList.remove("mostrar-mensaje");
            if($formContacto.querySelector(".mensaje-incorrecto")) $formContacto.removeChild($div);      
            if(nombre.value === ""){
                nombre.className = "input-dato";
            } else if(nombre.value.length > 40){
                $div.classList.add("mensaje-incorrecto");
                $div.textContent = "Has ingresado un nombre muy largo";
                nombre.className = "input-dato input-incorrecto";
                nombre.after($div);
                $div.classList.add("mostrar-mensaje");
            } else {
                nombre.className = "input-dato input-correcto";  
                $div.classList.remove("mostrar-mensaje");
                if($formContacto.querySelector(".mensaje-incorrecto")) $formContacto.removeChild($div);
                nombre.className = "input-dato input-correcto";
            };
        };
    };

    let validarEmail = () => {
        let expReg = /[áéíóúäëïöü\s]|[-|°!"#$%&/()=?¡*:;,{}+´¨¿'¬~^`]|[\\\]\[]/ig,
            expRegEmail = /\b(\w+@\w+)(\.\w{2,3})\b/ig
        
        if(expReg.test(email.value)){            
            $div.classList.add("mensaje-incorrecto");
            $div.textContent = "Ingresa carácteres válidos";
            email.className = "input-dato input-incorrecto";
            email.after($div);
            setTimeout(() => {
                $div.classList.add("mostrar-mensaje");
            }, 50);
            return           
        } else {           
            $div.classList.remove("mostrar-mensaje");
            if($formContacto.querySelector(".mensaje-incorrecto")) $formContacto.removeChild($div);      
            if(email.value === ""){
                email.className = "input-dato"
                return
            };
        };

        if(email.value.length > 60){
            $div.classList.add("mensaje-incorrecto");
            $div.textContent = "Has ingresado un e-mail demasiado largo";
            email.className = "input-dato input-incorrecto";
            email.after($div);
            setTimeout(() => {
                $div.classList.add("mostrar-mensaje");
            }, 50);   
            return
        };

        if(expRegEmail.test(email.value)){
            $div.classList.remove("mostrar-mensaje");
            if($formContacto.querySelector(".mensaje-incorrecto")) $formContacto.removeChild($div);        
            email.className = "input-dato input-correcto";
        } else {
            $div.classList.add("mensaje-incorrecto");
            $div.textContent = "Ingresa e-mail válido. Ejem: ejemplo@ejemplo.com";
            email.className = "input-dato input-incorrecto";
            email.after($div);
            setTimeout(() => {
                $div.classList.add("mostrar-mensaje");
            }, 50);           
        };        
    };

    let validarAsunto = () => {
        if(asunto.value.length > 80){
            $div.classList.add("mensaje-incorrecto");
            $div.textContent = "Asunto demasiado largo";
            asunto.className = "input-dato input-incorrecto";
            asunto.after($div);
            setTimeout(() => {
                $div.classList.add("mostrar-mensaje");
            }, 50);            
            return
        } else if(asunto.value.length > 0){
            asunto.className = "input-dato input-correcto";  
            $div.classList.remove("mostrar-mensaje");
            if($formContacto.querySelector(".mensaje-incorrecto")) $formContacto.removeChild($div);
        } else {
            asunto.className = "input-dato"
        };
    };
    
    let validarComentario = () => {
        if(comentario.value.length > 400){
            $div.classList.add("mensaje-incorrecto");
            $div.textContent = "Comentario demasiado largo";
            comentario.className = "input-dato input-incorrecto";
            comentario.after($div);
            setTimeout(() => {
                $div.classList.add("mostrar-mensaje");
            }, 50);            
            return
        } else if(comentario.value.length > 0){
            comentario.className = "input-dato input-correcto";  
            $div.classList.remove("mostrar-mensaje");
            if($formContacto.querySelector(".mensaje-incorrecto")) $formContacto.removeChild($div);
            return
        } else {
            comentario.className = "input-dato"
        };
    };

    d.addEventListener("keyup", (e) => {
        if(e.target.name === "Nombre") return validarNombre();
        if(e.target.name === "E-mail") return validarEmail();
        if(e.target.name === "Asunto") return validarAsunto();
        if(e.target.name === "Comentario") return validarComentario();
    });


    d.addEventListener("click", (e) => {
        if(e.target === $btnContacto){
            e.preventDefault();
        };
    }); */
};


/* export default function validarContacto(datos) {
    const $formContacto = d.getElementById("form-contacto");
    const [nombre, email, asunto, comentario] = d.querySelectorAll(datos);
    const $div = d.createElement("div");
    const $btnContacto = d.querySelector(".contacto-btn");
    
    let validarNombre = () => {
        let expReg = /[0-9°}{~^!"#$%&/()=?¡+,*_:;@<>¿-]|[\\\]\[]/ig;
        
        if(expReg.test(nombre.value)){           
            $div.textContent = "Has ingresado caracteres no válidos en el campo nombre";
            nombre.className = "input-dato input-incorrecto";
            $div.classList.add("mensaje-incorrecto");
            nombre.after($div);
            $div.classList.add("mostrar-mensaje");
            console.log("funciona la validacion");
        } else {           
            $div.classList.remove("mostrar-mensaje");
            if($formContacto.querySelector(".mensaje-incorrecto")) $formContacto.removeChild($div);      
            if(nombre.value === ""){
                nombre.className = "input-dato";
            } else if(nombre.value.length > 40){
                $div.classList.add("mensaje-incorrecto");
                $div.textContent = "Has ingresado un nombre muy largo";
                nombre.className = "input-dato input-incorrecto";
                nombre.after($div);
                $div.classList.add("mostrar-mensaje");
            } else {
                nombre.className = "input-dato input-correcto";  
                $div.classList.remove("mostrar-mensaje");
                if($formContacto.querySelector(".mensaje-incorrecto")) $formContacto.removeChild($div);
                nombre.className = "input-dato input-correcto";
            };
        };
    };

    let validarEmail = () => {
        let expReg = /[áéíóúäëïöü\s]|[-|°!"#$%&/()=?¡*:;,{}+´¨¿'¬~^`]|[\\\]\[]/ig,
            expRegEmail = /\b(\w+@\w+)(\.\w{2,3})\b/ig
        
        if(expReg.test(email.value)){            
            $div.classList.add("mensaje-incorrecto");
            $div.textContent = "Ingresa carácteres válidos";
            email.className = "input-dato input-incorrecto";
            email.after($div);
            $div.classList.add("mostrar-mensaje");
            return
        } else {           
            $div.classList.remove("mostrar-mensaje");
            if($formContacto.querySelector(".mensaje-incorrecto")) $formContacto.removeChild($div);      
            if(email.value === ""){
                email.className = "input-dato"
                return
            };
        };

        if(email.value.length > 60){
            $div.classList.add("mensaje-incorrecto");
            $div.textContent = "Has ingresado un e-mail demasiado largo";
            email.className = "input-dato input-incorrecto";
            email.after($div);
            $div.classList.add("mostrar-mensaje");
            return
        };

        if(expRegEmail.test(email.value)){
            $div.classList.remove("mostrar-mensaje");
            if($formContacto.querySelector(".mensaje-incorrecto")) $formContacto.removeChild($div);        
            email.className = "input-dato input-correcto";
        } else {
            $div.classList.add("mensaje-incorrecto");
            $div.textContent = "Ingresa e-mail válido. Ejem: ejemplo@ejemplo.com";
            email.className = "input-dato input-incorrecto";
            email.after($div);
            $div.classList.add("mostrar-mensaje");
        };        
    };

    let validarAsunto = () => {
        if(asunto.value.length > 80){
            $div.classList.add("mensaje-incorrecto");
            $div.textContent = "Asunto demasiado largo";
            asunto.className = "input-dato input-incorrecto";
            asunto.after($div);
            $div.classList.add("mostrar-mensaje");
            return
        } else if(asunto.value.length > 0){
            asunto.className = "input-dato input-correcto";  
            $div.classList.remove("mostrar-mensaje");
            if($formContacto.querySelector(".mensaje-incorrecto")) $formContacto.removeChild($div);
        } else {
            asunto.className = "input-dato"
        };
    };
    
    let validarComentario = () => {
        if(comentario.value.length > 400){
            $div.classList.add("mensaje-incorrecto");
            $div.textContent = "Comentario demasiado largo";
            comentario.className = "input-dato input-incorrecto";
            comentario.after($div);
            $div.classList.add("mostrar-mensaje");
            return
        } else if(comentario.value.length > 0){
            comentario.className = "input-dato input-correcto";  
            $div.classList.remove("mostrar-mensaje");
            if($formContacto.querySelector(".mensaje-incorrecto")) $formContacto.removeChild($div);
            return
        } else {
            comentario.className = "input-dato"
        };
    };

    d.addEventListener("keyup", (e) => {
        if(e.target.name === "Nombre") return validarNombre();
        if(e.target.name === "E-mail") return validarEmail();
        if(e.target.name === "Asunto") return validarAsunto();
        if(e.target.name === "Comentario") return validarComentario();
    });


    d.addEventListener("click", (e) => {
        if(e.target === $btnContacto){
            e.preventDefault();
        };
    });
}; */