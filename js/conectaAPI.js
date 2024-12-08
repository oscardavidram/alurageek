async function listaProductos(){
    const conexion = await fetch("http://localhost:3000/mis_productos",{
        method:"GET",
        headers:{
        "Content-type":"application/json"
        }
    });
    
    const conexionConvertida=await conexion.json();
    /* console.log(conexion);
    console.log(conexionConvertida); */
    return conexionConvertida;
}

async function crearProducto(id,titulo,precio,imagen){
    const conexion= await fetch("http://localhost:3000/mis_productos",{
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify({
        id:id,
        titulo:titulo,
        precio:precio,
        imagen:imagen
    })
    })
    if(!conexion.ok){
        throw new Error("No fue posible enviar el video");
    }
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function eliminarProducto(id) {

    const idString = String(id);

    const conexion = await fetch(`http://localhost:3000/mis_productos/${idString}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    });

    if (!conexion.ok) {
        throw new Error("No fue posible eliminar el producto");
    }

    return true; // Retornamos true si se eliminó correctamente
}

async function buscarVideo(referencia){
    const conexion=await fetch(`http://localhost:3000/videos?q=${referencia}`)
    const conexionConvertida=conexion.json();

    return conexionConvertida;
}

export const conectaAPI={
    listaProductos,crearProducto,buscarVideo,eliminarProducto
}
