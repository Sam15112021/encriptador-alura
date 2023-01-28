const textArea = document.querySelector("#text-area");
const mensaje = document.querySelector("#mensaje");

function btnEncriptar(){
	const boton = encriptar(textArea.value);
	mensaje.value = boton;
	textArea.value = "";
	const img1 = document.getElementById("img-marvel");
	img1.style.display = "none";
	const img2 = document.getElementById("img-escudo");
	img2.style.display = "none";
	const text1 = document.getElementById("texto-2");
	text1.style.display = "none";
	const text2 = document.getElementById("texto-3");
	text2.style.display = "none";
	const btnCopiar = document.getElementById("btn-copiar");
	btnCopiar.style.visibility = "visible";

}

function encriptar(fraseIngresado){
	let parametros = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
	fraseIngresado = fraseIngresado.toLowerCase();

	for(let i = 0; i < parametros.length; i++){
		if (fraseIngresado.includes(parametros[i][0])) {
			fraseIngresado = fraseIngresado.replaceAll(parametros[i][0], parametros[i][1]);
		}
	}
	return fraseIngresado;
}

function btnDesencriptar(){
	const boton1 = desencriptar(textArea.value);
	mensaje.value = boton1;
	textArea.value = "";
	const btnCopiar = document.getElementById("btn-copiar");
	btnCopiar.style.visibility = "visible";

}

function desencriptar(fraseEncriptada){
	let decodificador = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]; 
	fraseEncriptada = fraseEncriptada.toLowerCase();

	for(let i = 0; i < decodificador.length; i++){
		if (fraseEncriptada.includes(decodificador[i][1])) {
			fraseEncriptada = fraseEncriptada.replaceAll(decodificador[i][1], decodificador[i][0]);
		}
	}
	return fraseEncriptada;
}

function copiar(){
	const textoCopiado = document.querySelector("#mensaje");
	textoCopiado.select();
	document.execCommand("copy");

}




