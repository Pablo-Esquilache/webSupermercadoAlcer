const seccion_alamcen = [
    {id: 1, nombre: "Arroz" , img: "../imagenes/producto-almacen-arroz.jpg",  precio: 69, stock: 100},
    {id: 2, nombre: "Azucar", img: "../imagenes/producto-almacen-azucar.jpg", precio: 82, stock: 100},
    {id: 3, nombre: "Yerba", img: "../imagenes/producto-almacen-yerba.jpg", precio: 350, stock: 100},
    {id: 4, nombre: "Aceite", img: "../imagenes/producto-almacen-aceite.jpg", precio: 420, stock: 100}
]
const seccion_limpieza = [
    {id: 1, nombre: "Lavandina" , precio: 69, stock: 100},
    {id: 2, nombre: "Desodorante", precio: 82, stock: 100},
    {id: 3, nombre: "Detergente", precio: 350, stock: 100},
    {id: 4, nombre: "Lisoform", precio: 420, stock: 100}
]
const seccion_bebida = [
    {id: 1, nombre: "Vino" , precio: 69, stock: 100},
    {id: 2, nombre: "Agua", precio: 82, stock: 100},
    {id: 3, nombre: "Gaseosa", precio: 350, stock: 100},
    {id: 4, nombre: "Agua Saborizada", precio: 420, stock: 100}
]
const seccion_bazar = [
    {id: 1, nombre: "Cuchillo" , precio: 69, stock: 100},
    {id: 2, nombre: "Tenedor", precio: 82, stock: 100},
    {id: 3, nombre: "Cuchara", precio: 350, stock: 100},
    {id: 4, nombre: "Olla", precio: 420, stock: 100}
]
const seccion_perfumeria = [
    {id: 1, nombre: "Desodorante" , precio: 69, stock: 100},
    {id: 2, nombre: "Perfume", precio: 82, stock: 100},
    {id: 3, nombre: "Crema de Manos", precio: 350, stock: 100},
    {id: 4, nombre: "Espuma Afeitar", precio: 420, stock: 100}
]

const div_almacen = document.getElementById('seccion_almacen')

seccion_alamcen.forEach(productos => {
    const pantalla = document.createElement('div');
    pantalla.innerHTML = `
        <h2>${productos.nombre}</h2>
        <img src="${productos.img}" alt="">
        <p>${productos.precio}</p>
        <input type="button" value="Añadir al Carrito">
    `
    div_almacen.appendChild(pantalla);
})

// for (const producto of seccion_alamcen) {
//     let pantalla = document.createElement("div");
//     pantalla.innerHTML =   `<h2>${producto.nombre}</h2>
//                             <p>${producto.precio}</p>`
//     div_almacen.appendChild(pantalla);}