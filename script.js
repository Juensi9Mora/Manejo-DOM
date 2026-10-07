// Tarea 1: Modificar el estilo del texto del párrafo
const parrafo = document.getElementById('parrafo');
const botonEstilo = document.getElementById('botonEstilo');

function cambiarEstilo() {
    parrafo.style.fontFamily = 'Georgia, serif';
    parrafo.style.fontSize = '1.8rem';
    parrafo.style.color = '#f5576c';
}

botonEstilo.addEventListener('click', cambiarEstilo);

// Tarea 2: Obtener valores del formulario
const formulario = document.getElementById('form1');

function mostrarDatosFormulario(evento) {
    // Evita que la página se recargue el formulario al enviar
    evento.preventDefault();

    const nombre = formulario.elements['fname'].value;
    const apellido = formulario.elements['lname'].value;

    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
}

formulario.addEventListener('submit', mostrarDatosFormulario);

// Tarea 3: Mostrar alerta con información de enlaces
const botonEnlaces = document.getElementById('botonEnlaces');

function mostrarInfoEnlaces() {
    const enlaces = document.querySelectorAll('a');

    const total = enlaces.length;
    const primero = enlaces[0].href;
    const ultimo = enlaces[total - 1].href;

    alert(
        'Total de enlaces: ' + total + '\n' +
        'Primer enlace: ' + primero + '\n' +
        'Último enlace: ' + ultimo
    );
}

botonEnlaces.addEventListener('click', mostrarInfoEnlaces);


// Tarea extra
const contenedor = document.getElementById('contenedor');
console.log('1. Contenedor:', contenedor);

const segundos = document.querySelectorAll('.segundo');
console.log('2. Elementos .segundo:', segundos);

const terceroEnOl = document.querySelector('ol .tercero');
console.log('3. .tercero dentro de ol:', terceroEnOl);
