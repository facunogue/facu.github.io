// Obtén todos los botones "Agregar al carrito"
const botonesAgregar = document.querySelectorAll('.agregar-carrito');

// Agrega un evento de clic a cada botón
botonesAgregar.forEach(boton => {
  boton.addEventListener('click', agregarAlCarrito);
});

// Función para agregar al carrito
function agregarAlCarrito(event) {
  const producto = event.target.closest('.producto');
  const nombreProducto = producto.querySelector('h2').textContent;
  const precioProducto = parseFloat(producto.querySelector('.precio').textContent.replace('$', ''));

  // Aquí podrías implementar una lógica para agregar el producto al carrito
  // Por ejemplo, podrías almacenar la información en un array o un objeto

  alert(`¡${nombreProducto} agregado al carrito por $${precioProducto.toFixed(2)}!`);
}
