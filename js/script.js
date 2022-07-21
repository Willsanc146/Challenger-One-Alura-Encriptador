const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area");

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
}

function encriptar(stringEncriptar){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptar = stringEncriptar.toLowerCase();
    for (let i= 0;i<matrizCodigo.length;i++){
        if(stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    if(stringEncriptar.length>=1){
        ocultar_img_mostrar_btncopiar();
    }
    if(stringEncriptar.length<=0){
        mostrar_img_ocultar_btncopiar();
        }
    return stringEncriptar;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
}

function desencriptar(stringEncriptar){
    let matrizCodigo =[["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    stringEncriptar = stringEncriptar.toLowerCase();

    for (let i= 0;i<matrizCodigo.length;i++){
        if(stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    if(stringEncriptar.length>=1){
        ocultar_img_mostrar_btncopiar();
    }
    if(stringEncriptar.length<=0){
        mostrar_img_ocultar_btncopiar();
        }
    return stringEncriptar;
}

function limpiarTextarea(){
    document.getElementById("input-text").value=" ";
    document.getElementById("input-text-area").value=" ";
    document.getElementById("img-area-text").style.display='block';
    document.getElementById("btnCopiar").style.display='none';
}

function copiar() {
    var contenido = document.getElementById("input-text-area");
    contenido.select();
    document.execCommand('copy');
}

function ocultar_img_mostrar_btncopiar(){
    document.getElementById("img-area-text").style.display='none';
    document.getElementById("btnCopiar").style.display='block';
}

function mostrar_img_ocultar_btncopiar(){
    document.getElementById("img-area-text").style.display='block';
    document.getElementById("btnCopiar").style.display='none';
}