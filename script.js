const menu = document.getElementById('menu');
  menu.addEventListener('change', function() {
    const selectedPage = menu.value;
    if (selectedPage) {
      window.location.href = selectedPage;
    }
  });

  const video = document.querySelector('.fondo');
video.loop = true;
video.play();


  const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando..';

   const serviceID = 'default_service';
   const templateID = 'template_5nk5wqu';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});

// Agrega un evento "scroll" a la ventana del navegador
window.addEventListener("scroll", function() {
  // Obtiene la posición del usuario en la página
  var posicionUsuario = window.scrollY;

  // Obtiene la posición de cada sección en la página y la compara con la posición del usuario
  var secciones = document.querySelectorAll("section");
  secciones.forEach(function(seccion) {
    var id = seccion.getAttribute("id");
    var posicionSeccion = seccion.getBoundingClientRect().top + posicionUsuario;

    if (posicionUsuario >= posicionSeccion) {
      // Desplaza la página hacia la sección correspondiente
      window.location.hash = id;
    }
  });
});