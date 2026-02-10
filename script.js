// Esperamos a que todo el contenido cargue antes de ejecutar
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleccionamos los elementos del DOM (Document Object Model)
    const botonMagico = document.getElementById('btn-magic');
    const cajaEstado = document.getElementById('js-demo-box');
    const textoEstado = document.getElementById('js-status');

    // Agregamos un "escuchador de eventos" al botón
    botonMagico.addEventListener('click', function() {
        
        // 1. Cambiamos el texto
        textoEstado.innerHTML = "¡JavaScript Activo! 🚀<br>Sistema funcionando correctamente.";
        
        // 2. Cambiamos el estilo de la caja (CSS desde JS)
        cajaEstado.style.backgroundColor = "rgba(0, 242, 254, 0.1)";
        cajaEstado.style.border = "1px solid #00f2fe";
        cajaEstado.style.transform = "scale(1.02)";

        // 3. Ejecutamos una alerta (como pide la tarea) con un pequeño retraso
        setTimeout(() => {
            alert("¡Tarea completada! Has interactuado con el DOM usando JavaScript.");
        }, 100);
        
        // 4. Cambiamos el texto del botón
        botonMagico.textContent = "¡Hecho!";
        botonMagico.disabled = true; // Desactivamos el botón para que no se pulse de nuevo
    });

    console.log("El archivo script.js se ha cargado correctamente.");
});