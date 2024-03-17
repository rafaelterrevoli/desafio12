
const ele = document.getElementById("ele1");
pintar(ele) // inicia en color verde llama a funcion pintar con un solo argumento

ele.addEventListener("click", () => {
  valorBack = ele.style.backgroundColor;
  if (valorBack == "yellow") {
    pintar(ele); // llama la funcion pintar con un solo argumento
  } else  {
    pintar(ele, "yellow"); // llama la función pintar con 2 argumento, envia el color yellow
  }
});

// recibe 2 parametros: elemento y el color
// el color por defector es green sino viene el segundo parametro
function pintar(elemento, color = "green") {
  elemento.style.backgroundColor = color;
}
