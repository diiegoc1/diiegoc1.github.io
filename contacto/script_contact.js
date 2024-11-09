/* Script form */
const form = document.querySelector('form');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const tema = document.getElementById('tema');
const mensaje = document.getElementById('mensaje');

function EnviarEmail() {
    const CuerpoMensaje = `Nombre Completo: ${nombre.value}<br> Correo: ${correo.value}<br> Tema: ${tema.value}<br> Mensaje: ${mensaje.value}`;

    Email.send({
        SecureToken : "d181aff3-f970-4289-b0a1-2540be13f077",
        To: 'diiegocabello19@gmail.com',
        From: "diiegocabello19@gmail.com",
        Subject: tema.value,
        Body: CuerpoMensaje
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "¡Completado!",
                    text: "¡Su mensaje fue enviado!",
                    icon: "success"
                });
            }
        }
    );
}
function check() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("ERROR");
            item.parentElement.classList.add("ERROR");
        }

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("ERROR");
                item.parentElement.classList.remove("ERROR");
            }
            else {
                item.classList.add("ERROR");
                item.parentElement.classList.add("ERROR");
            }
        });
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    check();
    if (!nombre.classList.contains("ERROR") && !correo.classList.contains("ERROR") && !tema.classList.contains("ERROR") && !mensaje.classList.contains("ERROR")) {
        
        EnviarEmail();

        form.reset();
        return false;


    }


});