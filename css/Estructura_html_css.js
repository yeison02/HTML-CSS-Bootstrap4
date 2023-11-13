function accion() {
  console.log("Esta funcionando mi boton");
  var enlace = document.getElementsByClassName("nav-enlace");
  for (var i = 0; 1 < enlace.length; i++) {
    enlace[i].classList.toggle("desaparece");
  }
}
