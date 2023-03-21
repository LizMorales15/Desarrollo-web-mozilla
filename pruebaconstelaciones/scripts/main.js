//Cambia la imagen que se muestra en el inicio al hacer clic sobre ella
let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/orion.jpg') {
      miImage.setAttribute('src','images/osaMayor.jpg');
    } else {
      miImage.setAttribute('src', 'images/orion.jpg');
    }
}

//Pedir usuario al entrar por primera vez a la página y cambiarlo cuando se desee
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem('nombre', miNombre);
      miTitulo.innerHTML = 'Las estrellas son hermosas, ' + miNombre;
    }
  }
  
//Valida que el nombre de usuario haya sido cargado
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Las estrellas son hermosas, ' + nombreAlmacenado;
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}

