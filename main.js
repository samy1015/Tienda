// Variables globales: guardan la información mientras la página esté abierta
let carrito = []; // Array que almacenará los objetos de productos seleccionados
let total = 0;    // Variable numérica para el costo acumulado

/**
 * Agrega un nuevo producto al array del carrito
 * @param {string} producto - Nombre del artículo
 * @param {number} precio - Valor numérico del artículo
 */
function agregarAlCarrito(producto, precio) {
    // Añadimos un objeto con los datos del producto al final de la lista
    carrito.push({ producto, precio });

    // Cada vez que cambia el carrito, redibujamos la interfaz
    actualizarInterfaz();
}

/**
 * Se encarga de leer el array 'carrito' y mostrarlo en el HTML
 */
function actualizarInterfaz() {
    const lista = document.getElementById('lista-carrito');
    const contador = document.getElementById('contador');
    const totalTxt = document.getElementById('total');

    // Limpiamos la lista visual para que no se dupliquen los elementos al re-dibujar
    lista.innerHTML = '';
    total = 0; // Reiniciamos el total para volver a sumarlo desde cero

    // Recorremos cada elemento del carrito
    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        // toFixed(2) asegura que el precio siempre tenga 2 decimales (ej: 10.00)
        li.textContent = `${item.producto} - S/. ${item.precio.toFixed(2)}`;
        lista.appendChild(li);

        // Sumamos el precio de este item al total general
        total += item.precio;
    });

    // Actualizamos los textos en el HTML
    contador.textContent = carrito.length; // Cantidad de items
    totalTxt.textContent = total.toFixed(2); // Total con decimales
}

/**
 * Borra todos los elementos del carrito y limpia la pantalla
 */
function vaciarCarrito() {
    carrito = []; // Vaciamos el array
    actualizarInterfaz(); // Refrescamos la visual para que todo vuelva a cero
}

/**
 * Activa la ventana emergente (modal) para proceder al pago
 */
function finalizarCompra() {
    // Validación de seguridad: no permite comprar si no hay nada
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return; // Sale de la función sin hacer nada más
    }

    // Seleccionamos el modal por su ID y cambiamos su estilo de 'none' a 'block' para verlo
    const modal = document.getElementById('modal-pago');
    modal.style.display = 'block';

    // Copiamos el total que ya calculamos en la interfaz principal al texto dentro del modal
    const totalTexto = document.getElementById('total').textContent;
    document.getElementById('total-modal').textContent = totalTexto;
}

/**
 * Oculta el modal de pago
 */
function cerrarModal() {
    // Simplemente volvemos a poner el display en 'none'
    document.getElementById('modal-pago').style.display = 'none';
}
