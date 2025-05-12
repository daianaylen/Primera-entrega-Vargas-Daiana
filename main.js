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
