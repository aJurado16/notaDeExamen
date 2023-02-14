
//En este programa se ingresara la nota del ultimo examen, 
//y dependiendo de las notas de los 2 examenes anteriores 
//mostrara si aprobo o no, su promedio final y como le fue en el examen.
//Se manejaran los errores para comprobar si se metió o no un dato inválido  

const sendButton = document.getElementById("snd-nota")

sendButton.addEventListener("click",()=>{
    let resultado,mensaje;
    try {
        prevRes = parseInt(document.getElementById("nota").value);
        if (isNaN(prevRes)){
            throw "gracioso";
        }
        mensaje = definirMensaje(prevRes);
        resultado = verificarAprobacion(8,5,prevRes);
    }  catch(e){
        resultado = "Que gracioso";
        mensaje = "He descubierto que intentaste hackear el sitio";
    }
    abrirModal(resultado,mensaje);
})

const definirMensaje = (pr) => {
    let resultado;
    switch (pr) {
        case 1: resultado = "Muerto";
        break;
        case 2: resultado = "Eres malisimo";
        break;
        case 3: resultado = "No sabes casi nada";
        break;
        case 4: resultado = "Muy mal";
        break;
        case 5: resultado = "Mal";
        break;
        case 6: resultado = "Regular";
        break;
        case 7: resultado = "Bien, pero puedes mejorar";
        break;
        case 8: resultado = "¡Muy bien!";
        break;
        case 9: resultado = "Excelente";
        break;
        case 10: resultado = "Insuperable";
        break;
        default: resultado = null;
    }
    return resultado;
}

const verificarAprobacion = (nota1,nota2,prevRes)=>{
    promedio = (nota1 + nota2 + prevRes) / 3;
    if (promedio >= 7){
        return ["<span class='green'>APROBADO</span>", Math.round(promedio)];
    }
    return["<span class='red'>DESAPROBADO</span>", Math.round(promedio)];
}

const abrirModal = (res,msg) => {
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = "Tu prueba: " + msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";

}
