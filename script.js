const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector(".copy");
copiar.style.display = "none"

function validar(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0){
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();//carga y muestra la pagina nuevamente
        return true;
    }
}

function btnEncriptar(){
    if(!validar()){
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage="none";
        textArea.value="";
        copiar.style.display="block";
    }
}

function encriptar(encriptado){
    let matriz=[["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    encriptado=encriptado.toLowerCase();

    for(var i=0; i<matriz.length; i++){
        if(encriptado.includes(matriz[i][0])){
            encriptado=encriptado.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }
    return encriptado;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value=textoEncriptado;
    textArea.value="";
}

function desencriptar(desencriptado){
    let matriz=[["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    desencriptado=desencriptado.toLowerCase();

    for(var i=0; i<matriz.length; i++){
        if(desencriptado.includes(matriz[i][1])){
            desencriptado=desencriptado.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }
    return desencriptado;
}

function copia(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value="";
    alert("Texto copiado")
}