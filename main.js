let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    actualizarInterfaz();
}

function actualizarInterfaz() {
    const lista = document.getElementById('lista-carrito');
    const contador = document.getElementById('contador');
    const totalTxt = document.getElementById('total');
    
    lista.innerHTML = '';
    total = 0;

    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.producto} - S/. ${item.precio.toFixed(2)}`;
        lista.appendChild(li);
        total += item.precio;
    });

    contador.textContent = carrito.length;
    totalTxt.textContent = total.toFixed(2);
}

function vaciarCarrito() {
    carrito = [];
    actualizarInterfaz();
}
