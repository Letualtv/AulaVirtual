const enlaces = document.querySelectorAll('nav a');

enlaces.forEach(enlace => {
  enlace.addEventListener('click', (e) => {
    e.preventDefault();

    const seccionID = e.target.getAttribute('href');
    const seccion = document.querySelector(seccionID);

    mostrarSeccion(seccionID);
  });
});

function mostrarSeccion(idSeccion) {
  const secciones = document.querySelectorAll('section');

  secciones.forEach(seccion => {
    seccion.style.display = 'none';
  });

  const seccionActiva = document.querySelector(idSeccion);
  seccionActiva.style.display = 'block';
}