import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]");

// Función para crear la tarjeta de producto
export default function construyeCard(id,titulo, precio, imagen) {
    const producto = document.createElement("li");
    producto.className = "product-section__item";

     // Formatear el precio con separador de miles
     const precioFormateado = precio.toLocaleString('es-ES', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    });

    producto.innerHTML = `
        <div class="product-card">
            <img src="${imagen || './assets/error_imagen.jpg'}" alt="Imagen de ${titulo}" class="product-card__image" onerror="this.src='./assets/error_imagen.jpg';">
            <h3 class="product-card__title">${titulo}</h3>
            <p class="product-card__price">$${precioFormateado}</p>
            <button class="product-card__delete" data-id="${id}">
            <i class="fas fa-trash"></i> <!-- Icono de FontAwesome -->
            </button>
        </div>
    `;

    // Agregamos el evento de eliminar al botón
    const btnEliminar = producto.querySelector(".product-card__delete");
    btnEliminar.addEventListener("click", async () => {
        const confirmacion = confirm(`¿Estás seguro de eliminar el producto "${titulo}"?`);
        if (confirmacion) {
            try {
                await conectaAPI.eliminarProducto(id);
                alert("Producto eliminado correctamente");
                producto.remove(); // Eliminamos la tarjeta del DOM
            } catch (error) {
                alert("Error al eliminar el producto: " + error.message);
            }
        }
    });

    return producto;

}


// Función para cargar la lista de productos desde el servidor
async function listaProductos() {
    lista.innerHTML = ""; // Limpia la lista antes de agregar nuevos elementos
    try {
        const listaAPI = await conectaAPI.listaProductos();
        listaAPI.forEach((producto) => {
            
            // Asegúrate de que el ID sea un string
            const productoId = String(producto.id); // Convertir siempre el ID a string

            lista.appendChild(
                construyeCard(
                    productoId, 
                    producto.titulo,
                    producto.precio,
                    producto.imagen                    
                )
            );
        });
    } catch (error) {
        lista.innerHTML = `<h2 class="mensaje__error">No fue posible cargar la lista de productos.</h2>`;
    }
}

// Cargar la lista inicial
listaProductos();
