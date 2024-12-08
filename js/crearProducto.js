import { conectaAPI } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento) {
    evento.preventDefault();

    const imagen = document.querySelector("[data-imagen]").value;
    const precio = document.querySelector("[data-precio]").value;
    const titulo = document.querySelector("[data-titulo]").value;

    try {
        // Obtener la lista actual de productos
        const productos = await conectaAPI.listaProductos();

        // Calcular el nuevo ID sumando 1 al mayor ID existente
        const nuevoId = (productos.reduce((maxId, producto) => Math.max(maxId, parseInt(producto.id)), 0) + 1).toString();  // Aseguramos que el ID sea siempre un string

        // Crear el producto con el ID calculado como string
        await conectaAPI.crearProducto(nuevoId, titulo, parseInt(precio), imagen);

        alert("¡Producto creado exitosamente!");
        formulario.reset(); // Limpiar el formulario después de enviar
    } catch (e) {
        alert(`Error: ${e.message}`);
    }
}


formulario.addEventListener("submit", evento => crearProducto(evento));
