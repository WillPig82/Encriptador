const textArea = document.querySelector(".insert__texto--caja");
const mensaje = document.querySelector(".cajaTexto");


 


function validarTexto(){
    let textoEscrito = document.querySelector(".insert__texto--caja").value;
    let validador = textoEscrito.match(/^[ a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}




$(".btn--1").click(function(){
                $(".contenedor__cerdo").hide(500);
            });

$(".btn--2").click(function(){
                $(".contenedor__cerdo").hide(500);
            });    

$(".btn--3").click(function(){
                $(".contenedor__cerdo").show(700);
            });

$(".btn--1").click(function(){
                $(".btn--3").show(500);
            });

$(".btn--2").click(function(){
                $(".btn--3").show(500);
            }); 

$(".btn--3").click(function(){
                $(".btn--3").hide(700);
            });


function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado
        textArea.value = "";

    }
}
    


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}



function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return stringDesencriptada
}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    /*alert("Texto Copiado")*/
}
