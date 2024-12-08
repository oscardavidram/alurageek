# 🛒 AluraGeek - Gestión de Productos

Este proyecto es una aplicación web que permite gestionar productos de una tienda ficticia llamada **AluraGeek**. Incluye funcionalidades para visualizar, agregar y eliminar productos, todo respaldado por un servidor local JSON.

---

## 🚀 Características

- **Visualización de productos:** Lista dinámica de productos cargados desde un servidor JSON.
- **Agregar productos:** Permite añadir productos con título, precio e imagen.
- **Eliminar productos:** Botón de eliminación que interactúa con el servidor JSON.
- **Diseño responsivo:** Compatible con dispositivos de distintos tamaños.

---

## 📂 Estructura del Proyecto

.
├── /assets                 # Recursos estáticos (imágenes, íconos, etc.)
├── /js                     # Archivos JavaScript
│   ├── conectaAPI.js       # Conexión con el servidor JSON
│   ├── crearProducto.js    # Lógica para agregar productos
│   ├── mostrarProducto.js  # Lógica para mostrar productos
├── styles.css              # Estilos principales
├── index.html              # Página principal
├── db.json                 # Base de datos JSON para el servidor
└── README.md               # Documentación del proyecto

## 📋 Requisitos Previos

- Tener **Node.js** instalado.
- Instalar `json-server` de forma global:
  ```bash
  npm install -g json-server

## 📋⚙️ Instalación y Ejecución
1.Clonar este repositorio:
git clone https://github.com/TU_USUARIO/AluraGeek.git
cd AluraGeek

2.Iniciar el servidor JSON:
json-server --watch db.json --port 3000

3.Abrir la aplicación en el navegador:
Usa Live Server si trabajas en Visual Studio Code para evitar problemas de CORS.
O abre directamente index.html en tu navegador.

## 📝 Uso
Visualización de Productos
La página principal muestra una lista de productos cargados desde db.json.
Agregar Nuevos Productos
En la sección "Agregar Producto", rellena los campos:
Título: Nombre del producto.
Precio: Precio numérico del producto.
Imagen: URL de la imagen.
Haz clic en Enviar. El producto se agregará al servidor JSON y se actualizará en la página.
Eliminar Productos
Cada tarjeta de producto incluye un botón con un ícono de papelera. Haz clic en este botón para eliminar el producto correspondiente del servidor y de la interfaz.

## 📂 db.json
El archivo db.json sirve como base de datos para el servidor JSON. A continuación, se muestra un ejemplo del formato que utiliza:
{
  "mis_productos": [
    { "id": "1", "titulo": "Producto 1", "precio": 50000, "imagen": "https://via.placeholder.com/150" },
    { "id": "2", "titulo": "Producto 2", "precio": 75000, "imagen": "https://via.placeholder.com/150" },
    { "id": "3", "titulo": "Producto 3", "precio": 120000, "imagen": "https://via.placeholder.com/150" }
  ]
}

Reglas Importantes para db.json:
IDs como cadenas de texto: Todos los id deben estar en formato string para evitar errores de eliminación.
Formato JSON válido: Asegúrate de que el archivo tenga una estructura válida, con comas y llaves correctamente colocadas.

🤝 Contribuciones
¡Contribuciones son bienvenidas! Si tienes ideas para mejorar este proyecto, por favor crea un pull request o abre un issue.


🌟 Autor
Creado por Oscar David Ramirez. Inspirado por proyectos educativos de Alura.

Este archivo `README.md` incluye todas las secciones clave y detalles para que puedas publicarlo directamente en GitHub o utilizarlo como documentación para tu proyecto. ¡Déjame saber si necesitas algo más! 😊





