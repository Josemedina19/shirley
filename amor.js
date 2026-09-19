/* =========================================================
   ❤️ PÁGINA ROMÁNTICA
   PIN: 250226 — 6 DÍGITOS
========================================================= */

const PIN_CORRECTO = "250226";

let pin = "";
let desbloqueado = false;

let corazonesActivos = false;
let estrellasCreadas = false;
let particulasCreadas = false;
let fondoCreado = false;
let cartaMostrada = false;

let observerVideos = null;
let intervaloCorazones = null;
let intervaloParticulas = null;


/* =========================================================
   INICIO
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    prepararPagina();
    prepararInput();
    prepararBoton();
    prepararVideos();

    crearFondoPremium();

});


/* =========================================================
   PREPARAR PÁGINA
========================================================= */

function prepararPagina() {

    const principal = document.getElementById("principal");

    if (principal) {
        principal.classList.add("oculto");
    }

    const login = document.getElementById("login");

    if (login) {
        login.classList.add("activo");
    }

    actualizarPIN();

}


/* =========================================================
   BOTÓN ENTRAR
========================================================= */

function prepararBoton() {

    const boton = document.getElementById("botonEntrar");

    if (!boton) return;

    boton.addEventListener("click", function() {

        verificarPIN();

    });

}


/* =========================================================
   INPUT DEL PIN
========================================================= */

function prepararInput() {

    const input = document.getElementById("pinInput");

    if (!input) return;

    input.setAttribute("inputmode", "numeric");
    input.setAttribute("autocomplete", "off");
    input.setAttribute("maxlength", "6");

    input.addEventListener("keydown", function(event) {

        if (desbloqueado) return;

        /* NÚMEROS */

        if (/^\d$/.test(event.key)) {

            event.preventDefault();

            agregarNumero(event.key);

            return;
        }


        /* BORRAR */

        if (event.key === "Backspace") {

            event.preventDefault();

            borrar();

            return;
        }


        /* ENTER */

        if (event.key === "Enter") {

            event.preventDefault();

            animacionBoton();

            return;
        }

    });

}


/* =========================================================
   AGREGAR NÚMERO
========================================================= */

function agregarNumero(numero) {

    if (desbloqueado) return;

    /* MÁXIMO 6 DÍGITOS */

    if (pin.length >= 6) return;

    numero = String(numero);

    if (!/^\d$/.test(numero)) return;

    quitarEstadoError();

    pin += numero;

    actualizarPIN();

    animarTecla();

    crearBrilloTecla();

}


/* =========================================================
   ACTUALIZAR PIN
========================================================= */

function actualizarPIN() {

    const input = document.getElementById("pinInput");

    if (!input) return;

    /*
     * Cada número se muestra como un punto.
     */

    input.value = "•".repeat(pin.length);

}


/* =========================================================
   BORRAR
========================================================= */

function borrar() {

    if (desbloqueado) return;

    if (pin.length === 0) return;

    pin = pin.slice(0, -1);

    actualizarPIN();

    quitarEstadoError();

}


/* =========================================================
   VERIFICAR PIN
========================================================= */

function verificarPIN() {

    if (desbloqueado) return;

    const login = document.getElementById("login");
    const principal = document.getElementById("principal");
    const input = document.getElementById("pinInput");
    const error = document.getElementById("error");

    if (!login || !principal || !input) return;


    /* -------------------------------------------------------
       DEBE TENER 6 NÚMEROS
    ------------------------------------------------------- */

    if (pin.length !== 6) {

        if (error) {

            error.textContent =
                "💗 Primero coloca los 6 números del PIN.";

        }

        input.classList.remove("error-input");

        void input.offsetWidth;

        input.classList.add("error-input");

        animacionBoton();

        return;
    }


    /* -------------------------------------------------------
       PIN CORRECTO
    ------------------------------------------------------- */

    if (pin === PIN_CORRECTO) {

        desbloqueado = true;

        quitarEstadoError();

        if (error) {
            error.textContent = "";
        }


        /* ---------------------------------------------------
           OCULTAR LOGIN
        --------------------------------------------------- */

        login.classList.remove("activo");

        login.classList.add("oculto");

        login.style.display = "none";


        /* ---------------------------------------------------
           MOSTRAR PÁGINA PRINCIPAL
        --------------------------------------------------- */

        principal.classList.remove("oculto");

        principal.style.display = "block";

        principal.style.opacity = "1";

        principal.style.visibility = "visible";

        principal.classList.add("principal-desbloqueado");


        /* ---------------------------------------------------
           LIMPIAR PIN
        --------------------------------------------------- */

        pin = "";

        actualizarPIN();


        /* ---------------------------------------------------
           MÚSICA
        --------------------------------------------------- */

        reproducirMusica();


        /* ---------------------------------------------------
           EFECTOS
        --------------------------------------------------- */

        crearExplosionInicial();

        crearCorazones();

        crearEstrellas();

        crearParticulas();

        crearBurbujas();

        crearAurora();

        lluviaRomantica();

        mostrarCartaInicial();

        activarVideos();


        /* ---------------------------------------------------
           IR AL INICIO
        --------------------------------------------------- */

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        return;
    }


    /* -------------------------------------------------------
       PIN INCORRECTO
    ------------------------------------------------------- */

    mostrarError(error, input);

}


/* =========================================================
   ERROR PIN INCORRECTO
========================================================= */

function mostrarError(error, input) {

    pin = "";

    actualizarPIN();


    if (error) {

        error.textContent =
            "❌ Esa contraseña no es, mi amor 😤";

    }


    if (input) {

        input.classList.remove("error-input");

        void input.offsetWidth;

        input.classList.add("error-input");

    }


    document.body.classList.remove("error-amor");

    void document.body.offsetWidth;

    document.body.classList.add("error-amor");


    crearCorazonesError();

    crearLagrimas();

    crearExplosionEnojo();

    mostrarStickerMolesto();


    setTimeout(() => {

        document.body.classList.remove("error-amor");

        if (input) {

            input.classList.remove("error-input");

        }

    }, 900);

}


/* =========================================================
   QUITAR ERROR
========================================================= */

function quitarEstadoError() {

    const error = document.getElementById("error");

    if (error) {

        error.textContent = "";

    }

    document.body.classList.remove("error-amor");

}


/* =========================================================
   ANIMAR BOTÓN
========================================================= */

function animacionBoton() {

    const boton = document.getElementById("botonEntrar");

    if (!boton) return;

    boton.classList.remove("boton-pulso");

    void boton.offsetWidth;

    boton.classList.add("boton-pulso");


    setTimeout(() => {

        boton.classList.remove("boton-pulso");

    }, 500);

}


/* =========================================================
   ANIMAR TECLA
========================================================= */

function animarTecla() {

    const botones =
        document.querySelectorAll(".teclado button");

    if (!botones.length) return;

    const boton =
        botones[Math.floor(Math.random() * botones.length)];


    boton.style.transform =
        "scale(.92)";


    setTimeout(() => {

        boton.style.transform = "";

    }, 100);

}


/* =========================================================
   BRILLO AL ESCRIBIR
========================================================= */

function crearBrilloTecla() {

    const login =
        document.getElementById("login");

    if (!login) return;


    const brillo =
        document.createElement("div");

    brillo.textContent = "✨";


    brillo.style.position = "fixed";

    brillo.style.left = "50%";

    brillo.style.top = "50%";

    brillo.style.pointerEvents = "none";

    brillo.style.zIndex = "999";

    brillo.style.fontSize = "20px";

    brillo.style.animation =
        "brilloTecla .8s ease forwards";


    document.body.appendChild(brillo);


    setTimeout(() => {

        brillo.remove();

    }, 800);

}


/* =========================================================
   MÚSICA
========================================================= */

function reproducirMusica() {

    const musica =
        document.getElementById("musica");

    if (!musica) return;

    musica.volume = 0.65;


    const promesa =
        musica.play();


    if (promesa !== undefined) {

        promesa.catch(() => {

            /*
             * Algunos navegadores pueden bloquear
             * automáticamente el audio.
             */

        });

    }

}


/* =========================================================
   VIDEOS
========================================================= */

function prepararVideos() {

    const videos =
        document.querySelectorAll("video");

    if (!videos.length) return;


    videos.forEach(video => {

        video.muted = true;

        video.loop = true;

        video.playsInline = true;

    });

}


function activarVideos() {

    const videos =
        document.querySelectorAll("video");

    if (!videos.length) return;


    if ("IntersectionObserver" in window) {

        observerVideos =
            new IntersectionObserver(

                entries => {

                    entries.forEach(entry => {

                        const video =
                            entry.target;


                        if (entry.isIntersecting) {

                            video.play()
                                .catch(() => {});

                        } else {

                            video.pause();

                        }

                    });

                },

                {
                    threshold: 0.25
                }

            );


        videos.forEach(video => {

            observerVideos.observe(video);

        });

    } else {

        videos.forEach(video => {

            video.play()
                .catch(() => {});

        });

    }

}


/* =========================================================
   CORAZONES
========================================================= */

function crearCorazones() {

    if (corazonesActivos) return;

    corazonesActivos = true;


    const contenedor =
        document.querySelector(".corazones");

    if (!contenedor) return;


    function generar() {

        if (!desbloqueado) return;


        const corazon =
            document.createElement("div");

        corazon.className =
            "corazon";


        const corazones = [

            "❤️",
            "💕",
            "💗",
            "💖",
            "💓",
            "💞",
            "💘",
            "🥰"

        ];


        corazon.textContent =
            corazones[
                Math.floor(
                    Math.random() *
                    corazones.length
                )
            ];


        corazon.style.left =
            Math.random() * 100 + "%";


        corazon.style.fontSize =
            (14 + Math.random() * 24) + "px";


        const duracion =
            5 + Math.random() * 7;


        corazon.style.animationDuration =
            duracion + "s";


        contenedor.appendChild(corazon);


        setTimeout(() => {

            corazon.remove();

        }, duracion * 1000);

    }


    generar();


    intervaloCorazones =
        setInterval(
            generar,
            650
        );

}


/* =========================================================
   CORAZONES DE ERROR
========================================================= */

function crearCorazonesError() {

    const cantidad = 15;


    for (let i = 0; i < cantidad; i++) {

        const corazon =
            document.createElement("div");


        corazon.textContent = "💔";


        corazon.style.position =
            "fixed";


        corazon.style.left =
            Math.random() * 100 + "%";


        corazon.style.top =
            Math.random() * 100 + "%";


        corazon.style.fontSize =
            (15 + Math.random() * 25) + "px";


        corazon.style.zIndex =
            "9999";


        corazon.style.pointerEvents =
            "none";


        corazon.style.transition =
            "1.2s ease";


        document.body.appendChild(corazon);


        setTimeout(() => {

            corazon.style.transform =
                "translateY(-100px) rotate(180deg)";

            corazon.style.opacity = "0";

        }, 50);


        setTimeout(() => {

            corazon.remove();

        }, 1300);

    }

}


/* =========================================================
   LÁGRIMAS
========================================================= */

function crearLagrimas() {

    const emojis = [

        "🥺",
        "😭",
        "💧",
        "💔"

    ];


    for (let i = 0; i < 12; i++) {

        const elemento =
            document.createElement("div");


        elemento.textContent =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];


        elemento.style.position =
            "fixed";


        elemento.style.left =
            Math.random() * 100 + "%";


        elemento.style.top =
            Math.random() * 100 + "%";


        elemento.style.fontSize =
            (18 + Math.random() * 20) + "px";


        elemento.style.zIndex =
            "10000";


        elemento.style.pointerEvents =
            "none";


        elemento.style.transition =
            "1.5s ease";


        document.body.appendChild(elemento);


        setTimeout(() => {

            elemento.style.transform =
                "translateY(120px)";

            elemento.style.opacity =
                "0";

        }, 50);


        setTimeout(() => {

            elemento.remove();

        }, 1600);

    }

}


/* =========================================================
   EXPLOSIÓN INICIAL
========================================================= */

function crearExplosionInicial() {

    const emojis = [

        "❤️",
        "💕",
        "💗",
        "💖",
        "✨",
        "🌹",
        "🥰"

    ];


    for (let i = 0; i < 40; i++) {

        const elemento =
            document.createElement("div");


        elemento.textContent =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];


        elemento.style.position =
            "fixed";


        elemento.style.left =
            "50%";


        elemento.style.top =
            "50%";


        elemento.style.fontSize =
            (15 + Math.random() * 25) + "px";


        elemento.style.zIndex =
            "9999";


        elemento.style.pointerEvents =
            "none";


        const x =
            (Math.random() - .5) * 800;


        const y =
            (Math.random() - .5) * 800;


        elemento.style.transition =
            "1.5s cubic-bezier(.2,.8,.2,1)";


        document.body.appendChild(elemento);


        requestAnimationFrame(() => {

            elemento.style.transform =
                `translate(${x}px, ${y}px)
                 rotate(${Math.random() * 720}deg)`;


            elemento.style.opacity =
                "0";

        });


        setTimeout(() => {

            elemento.remove();

        }, 1600);

    }

}


/* =========================================================
   EXPLOSIÓN ENOJO
========================================================= */

function crearExplosionEnojo() {

    const emojis = [

        "😤",
        "💢",
        "😡",
        "💔",
        "🙄",
        "🥺"

    ];


    for (let i = 0; i < 25; i++) {

        const elemento =
            document.createElement("div");


        elemento.textContent =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];


        elemento.style.position =
            "fixed";


        elemento.style.left =
            "50%";


        elemento.style.top =
            "45%";


        elemento.style.zIndex =
            "99998";


        elemento.style.pointerEvents =
            "none";


        elemento.style.fontSize =
            (15 + Math.random() * 25) + "px";


        const x =
            (Math.random() - .5) * 500;


        const y =
            (Math.random() - .5) * 400;


        elemento.style.transition =
            "1s ease";


        document.body.appendChild(elemento);


        requestAnimationFrame(() => {

            elemento.style.transform =
                `translate(${x}px, ${y}px)
                 scale(1.4)`;


            elemento.style.opacity =
                "0";

        });


        setTimeout(() => {

            elemento.remove();

        }, 1100);

    }

}


/* =========================================================
   STICKER MOLESTO
========================================================= */

function mostrarStickerMolesto() {

    const anterior =
        document.querySelector(".sticker-error");


    if (anterior) {

        anterior.remove();

    }


    const sticker =
        document.createElement("div");


    sticker.className =
        "sticker-error";


    sticker.innerHTML = `

        <div class="sticker-contenido">

            <div class="sticker-emoji">
                😤
            </div>

            <h2>
                ¡OYE! 😒
            </h2>

            <p>
                Esa contraseña está mal...
            </p>

            <p>
                ¿Me quieres hacer llorar? 🥺💔
            </p>

            <div class="sticker-corazones">
                💔 😤 💔
            </div>

        </div>

    `;


    document.body.appendChild(sticker);


    setTimeout(() => {

        sticker.style.opacity = "0";

        sticker.style.transition =
            ".5s ease";

    }, 2700);


    setTimeout(() => {

        sticker.remove();

    }, 3300);

}


/* =========================================================
   ESTRELLAS
========================================================= */

function crearEstrellas() {

    if (estrellasCreadas) return;

    estrellasCreadas = true;


    const contenedor =
        document.querySelector(".estrellas");


    if (!contenedor) return;


    for (let i = 0; i < 90; i++) {

        const estrella =
            document.createElement("div");


        estrella.className =
            "estrella";


        estrella.style.left =
            Math.random() * 100 + "%";


        estrella.style.top =
            Math.random() * 100 + "%";


        estrella.style.animationDuration =
            (1 + Math.random() * 3) + "s";


        estrella.style.animationDelay =
            Math.random() * 3 + "s";


        contenedor.appendChild(estrella);

    }

}


/* =========================================================
   PARTÍCULAS
========================================================= */

function crearParticulas() {

    if (particulasCreadas) return;

    particulasCreadas = true;


    const contenedor =
        document.querySelector(".particulas");


    if (!contenedor) return;


    for (let i = 0; i < 35; i++) {

        const particula =
            document.createElement("div");


        particula.className =
            "particula";


        particula.style.left =
            Math.random() * 100 + "%";


        particula.style.animationDuration =
            (5 + Math.random() * 8) + "s";


        particula.style.animationDelay =
            Math.random() * 5 + "s";


        contenedor.appendChild(particula);

    }

}


/* =========================================================
   BURBUJAS
========================================================= */

function crearBurbujas() {

    if (document.querySelector(".burbujas")) return;


    const contenedor =
        document.createElement("div");


    contenedor.className =
        "burbujas";


    contenedor.style.position =
        "fixed";


    contenedor.style.inset =
        "0";


    contenedor.style.pointerEvents =
        "none";


    contenedor.style.overflow =
        "hidden";


    contenedor.style.zIndex =
        "2";


    document.body.appendChild(contenedor);


    for (let i = 0; i < 20; i++) {

        const burbuja =
            document.createElement("span");


        burbuja.textContent =
            "♡";


        burbuja.style.position =
            "absolute";


        burbuja.style.left =
            Math.random() * 100 + "%";


        burbuja.style.top =
            Math.random() * 100 + "%";


        burbuja.style.color =
            "rgba(255,150,210,.35)";


        burbuja.style.fontSize =
            (10 + Math.random() * 25) + "px";


        burbuja.style.animation =
            `flotarBurbuja
             ${5 + Math.random() * 8}s
             ease-in-out infinite`;


        burbuja.style.animationDelay =
            Math.random() * 5 + "s";


        contenedor.appendChild(burbuja);

    }

}


/* =========================================================
   AURORA
========================================================= */

function crearAurora() {

    if (
        document.querySelector(
            ".aurora-romantica"
        )
    ) return;


    const aurora =
        document.createElement("div");


    aurora.className =
        "aurora-romantica";


    aurora.style.position =
        "fixed";


    aurora.style.width =
        "500px";


    aurora.style.height =
        "500px";


    aurora.style.left =
        "-200px";


    aurora.style.top =
        "30%";


    aurora.style.borderRadius =
        "50%";


    aurora.style.background =


        aurora.style.filter =
        "blur(30px)";


    aurora.style.pointerEvents =
        "none";


    aurora.style.zIndex =
        "0";


    aurora.style.animation =



        document.body.appendChild(aurora);

}


/* =========================================================
   LLUVIA ROMÁNTICA
========================================================= */

function lluviaRomantica() {

    const simbolos = [

        "❤️",
        "💕",
        "✨",
        "🌹",
        "💗"

    ];


    let contador = 0;


    const intervalo =
        setInterval(() => {

            if (!desbloqueado) {

                clearInterval(intervalo);

                return;
            }


            const elemento =
                document.createElement("div");


            elemento.textContent =
                simbolos[
                    Math.floor(
                        Math.random() *
                        simbolos.length
                    )
                ];


            elemento.style.position =
                "fixed";


            elemento.style.top =
                "-40px";


            elemento.style.left =
                Math.random() * 100 + "%";


            elemento.style.fontSize =
                (12 + Math.random() * 20) + "px";


            elemento.style.zIndex =
                "3";


            elemento.style.pointerEvents =
                "none";


            elemento.style.transition =
                `transform
                 ${4 + Math.random() * 4}s linear,
                 opacity
                 ${4 + Math.random() * 4}s linear`;


            document.body.appendChild(elemento);


            requestAnimationFrame(() => {

                elemento.style.transform =
                    `translateY(110vh)
                     rotate(${Math.random() * 720}deg)`;


                elemento.style.opacity =
                    "0";

            });


            setTimeout(() => {

                elemento.remove();

            }, 8500);


            contador++;


            if (contador >= 50) {

                clearInterval(intervalo);

            }

        }, 500);

}


/* =========================================================
   CARTA INICIAL
========================================================= */

function mostrarCartaInicial() {

    if (cartaMostrada) return;

    cartaMostrada = true;


    setTimeout(() => {

        const carta =
            document.createElement("div");


        carta.className =
            "carta-inicial";


        carta.innerHTML = `

            <div class="carta-contenido">

                <div class="carta-corazon">
                    ❤️
                </div>

                <h2>
                    Para ti, mi amor
                </h2>

                <p>
                    Todo esto lo hice pensando en ti.
                </p>

                <p>
                    Espero de corazón que te guste
                    este pequeño regalo. 🥺❤️
                </p>

                <button
                    type="button"
                    id="cerrarCarta"
                >
                    Continuar ❤️
                </button>

            </div>

        `;


        document.body.appendChild(carta);


        const boton =
            document.getElementById(
                "cerrarCarta"
            );


        if (boton) {

            boton.addEventListener(
                "click",
                () => {

                    carta.style.opacity =
                        "0";


                    carta.style.transition =
                        ".5s ease";


                    setTimeout(() => {

                        carta.remove();

                    }, 500);

                }
            );

        }

    }, 800);

}


/* =========================================================
   FONDO PREMIUM
========================================================= */

function crearFondoPremium() {

    if (fondoCreado) return;

    fondoCreado = true;


    const fondo =
        document.createElement("div");


    fondo.className =
        "fondo-premium";


    fondo.style.position =
        "fixed";


    fondo.style.inset =
        "0";


    fondo.style.pointerEvents =
        "none";


    fondo.style.zIndex =
        "-1";


    document.body.appendChild(fondo);

}


/* =========================================================
   ESTILOS DINÁMICOS
========================================================= */

function agregarEstilosPremium() {

    if (
        document.getElementById(
            "estilosPremium"
        )
    ) return;


    const style =
        document.createElement("style");


    style.id =
        "estilosPremium";


    style.textContent = `

        .boton-pulso {
            animation:
                botonPulso .5s ease !important;
        }


        @keyframes botonPulso {

            0% {
                transform: scale(1);
            }

            35% {
                transform: scale(.88);
            }

            70% {
                transform: scale(1.08);
            }

            100% {
                transform: scale(1);
            }

        }


        @keyframes brilloTecla {

            0% {
                opacity: 1;
                transform:
                    translate(-50%, -50%)
                    scale(.5);
            }

            100% {
                opacity: 0;
                transform:
                    translate(-50%, -150px)
                    scale(1.8);
            }

        }


        @keyframes flotarBurbuja {

            0%,
            100% {
                transform:
                    translateY(0)
                    rotate(0deg);
            }

            50% {
                transform:
                    translateY(-35px)
                    rotate(15deg);
            }

        }


        @keyframes auroraMover {

            0% {
                transform:
                    translate(0, 0)
                    scale(1);
            }

            50% {
                transform:
                    translate(55vw, -10vh)
                    scale(1.3);
            }

            100% {
                transform:
                    translate(20vw, 45vh)
                    scale(.9);
            }

        }


        .carta-inicial {

            position: fixed;

            inset: 0;

            display: flex;

            align-items: center;

            justify-content: center;

            padding: 20px;

            background:
                rgba(5,0,8,.75);

            backdrop-filter:
                blur(8px);

            z-index: 99990;

            animation:
                aparecer .5s ease;

        }


        .carta-contenido {

            width:
                min(92%, 500px);

            padding:
                45px 30px;

            text-align:
                center;

            border-radius:
                30px;

            background:
                linear-gradient(
                    145deg,
                    rgba(255,100,180,.2),
                    rgba(70,10,60,.9)
                );

            border:
                1px solid
                rgba(255,160,215,.4);

            box-shadow:
                0 0 50px
                rgba(255,30,150,.2),

                0 30px 90px
                rgba(0,0,0,.5);

        }


        .carta-corazon {

            font-size:
                5rem;

            animation:
                latido
                1.4s
                ease-in-out
                infinite;

        }


        .carta-contenido h2 {

            color:
                #ff9dcc;

            margin:
                15px 0;

        }


        .carta-contenido p {

            color:
                #fff0f8;

            margin:
                10px 0;

        }


        .carta-contenido button {

            margin-top:
                20px;

            padding:
                13px 30px;

            border-radius:
                30px;

            background:
                linear-gradient(
                    135deg,
                    #ff1688,
                    #9b45ff
                );

            color:
                white;

            font-weight:
                bold;

            font-size:
                1rem;

            cursor:
                pointer;

            box-shadow:
                0 0 25px
                rgba(255,40,150,.35);

        }


        .carta-contenido button:hover {

            transform:
                scale(1.05);

        }

    `;


    document.head.appendChild(style);

}


/* =========================================================
   ACTIVAR ESTILOS PREMIUM
========================================================= */

setTimeout(() => {

    agregarEstilosPremium();

}, 100);