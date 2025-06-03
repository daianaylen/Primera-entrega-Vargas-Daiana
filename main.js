<<<<<<< HEAD
//main js
const servicios = ["Limpieza básica", "Limpieza profunda", "Limpieza específica"];

const trabajadores = [
    { nombre: "Carla", puntuacion: 4.8, distancia: 2, telefono: "351-111-2222" },
    { nombre: "Luis", puntuacion: 4.2, distancia: 5, telefono: "351-333-4444" },
    {nombre: "Sofía", puntuacion: 4.9, distancia: 3, telefono: "351-555-6666" },
    { nombre: "Pedro", puntuacion: 3.8, distancia: 1, telefono: "351-777-8888" }
];

//DOM
const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");
const historial = document.getElementById("historial");

// Cargar historial
document.addEventListener("DOMContentLoaded", () => {
    const busquedaAnterior = localStorage.getItem("ultimaBusqueda");
    if (busquedaAnterior) {
    historial.textContent = `Última búsqueda: ${busquedaAnterior}`;
    }
});

// Manejar el formulario
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

  // Obtener valores del formulario
    const servicio = document.getElementById("servicio").value;
    const distancia = parseFloat(document.getElementById("distancia").value);
    const puntuacion = parseFloat(document.getElementById("puntuacion").value);

  // Validación básica
    if (!servicio || isNaN(distancia) || isNaN(puntuacion)) {
    resultado.innerHTML = `<p class="no-resultados">Completá todos los campos correctamente.</p>`;
    return;
    }

  // Filtrar trabajadores
    const trabajadoresFiltrados = trabajadores.filter(t =>
    t.distancia <= distancia && t.puntuacion >= puntuacion
    );

  // Mostrar resultados
  resultado.innerHTML = ""; // limpiar antes
    if (trabajadoresFiltrados.length > 0) {
    trabajadoresFiltrados.forEach(t => {
        const div = document.createElement("div");
        div.classList.add("tarjeta");
        div.innerHTML = `
        <h4>${t.nombre}</h4>
        <p>Puntuación: ${t.puntuacion} ★</p>
        <p>Distancia: ${t.distancia} km</p>
        <p>Teléfono: ${t.telefono}</p>
        `;
        resultado.appendChild(div);
    });
    } else {
    resultado.innerHTML = `<p class="no-resultados">No hay trabajadores disponibles con esos filtros.</p>`;
    }

  // Guardar en localStorage
    const resumenBusqueda = `${servicio} - hasta ${distancia} km, mínimo ${puntuacion}★`;
    localStorage.setItem("ultimaBusqueda", resumenBusqueda);
    historial.textContent = `Última búsqueda: ${resumenBusqueda}`;
});
=======
// Datos base
const servicios = ["Limpieza básica", "Limpieza profunda", "Limpieza específica"];

const trabajadores = [
    { nombre: "Carla", puntuacion: 4.8, distancia: 2, telefono: "351-111-2222" },
    { nombre: "Luis", puntuacion: 4.2, distancia: 5, telefono: "351-333-4444" },
    { nombre: "Sofía", puntuacion: 4.9, distancia: 3, telefono: "351-555-6666" },
    { nombre: "Pedro", puntuacion: 3.8, distancia: 1, telefono: "351-777-8888" }
];

// Función para elegir un servicio
function elegirServicio() {
    let mensaje = "Elegí un servicio:\n";
    servicios.forEach((servicio, index) => {
    mensaje += `${index + 1}. ${servicio}\n`;
    });
    let eleccion = parseInt(prompt(mensaje));
    return servicios[eleccion - 1];
}

// Función para filtrar trabajadores según criterios
function filtrarTrabajadores(distanciaMaxima, puntuacionMinima) {
    return trabajadores.filter(t =>
    t.distancia <= distanciaMaxima && t.puntuacion >= puntuacionMinima
    );
}

// Función principal del simulador
function simuladorLimpieza() {
    alert("¡Bienvenido/a al servicio de limpieza a domicilio!");

    const servicioElegido = elegirServicio();
    const distancia = parseFloat(prompt("¿Cuál es tu distancia máxima en km para el trabajador?"));
    const puntuacion = parseFloat(prompt("¿Cuál es la puntuación mínima aceptable del trabajador (de 1 a 5)?"));

    const disponibles = filtrarTrabajadores(distancia, puntuacion);

    if (disponibles.length > 0) {
    let resultado = `Trabajadores disponibles para ${servicioElegido}:\n\n`;
    disponibles.forEach(t => {
        resultado += `• ${t.nombre} - ${t.puntuacion}★ - ${t.distancia} km\nTeléfono: ${t.telefono}\n\n`;
    });
    alert(resultado);
    } else {
    alert("No hay trabajadores disponibles con esos filtros. Probá con otros valores.");
    }

    const repetir = confirm("¿Querés hacer otra búsqueda?");
    if (repetir) simuladorLimpieza();
}

// Llamada inicial
simuladorLimpieza();
>>>>>>> 55fbab68d39325abd4e1a9d33d4ee75249a61f92
