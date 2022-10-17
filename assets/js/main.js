//Funcion que se me aplica el estilo a la opcion seleccionada en el menu y quita la previa seleccion 
function seleccionar(nav__links){
  let opciones = document.querySelectorAll("#nav__links a");
  opciones[0].className = "item";
  opciones[1].className = "item";
  opciones[2].className = "item";
  opciones[3].className = "item";
  opciones[4].className = "item";
  nav__links.className = "item seleccionado"

  //hacemos desaparecer el menu una vez que se ha seleccionado una opcion en el modo responseve
  let x = document.getElementById("container__nav");
  x.className = "";
}

// funcion que muestra el nemu responsive
function responsiveMenu(){
  let x = document.getElementById("container__nav");
  if (x.className === ""){
    x.className = "responsive";
  } else {
    x.className = "";
  }
}

// detecto el scrolling para aplicar la animacion de la barras de skills
window.onscroll = function(){
  efectoSkills()
}

//Funcion que aplica la animacion de las barras de skills
function efectoSkills(){
  let skills = document.getElementById("container__skills");
  let distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
  if (distanciaSkills >= 300) {
    document.getElementById("html").classList.add("barra-progreso1");
    document.getElementById("js").classList.add("barra-progreso2");
    document.getElementById("bdt").classList.add("barra-progreso3");
    document.getElementById("react").classList.add("barra-progreso4");
  }
}