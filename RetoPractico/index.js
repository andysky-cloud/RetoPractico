function consultarUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Usuario encontrado");
        }, 3000);
    });
}

async function mostrarUsuario() {

    const resultadoHTML = document.getElementById("resultado");

    resultadoHTML.textContent = "Consultando usuario...";

    const resultado = await consultarUsuario();

    resultadoHTML.textContent = resultado + " - Proceso terminado";
}