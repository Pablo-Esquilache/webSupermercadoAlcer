const seccion_alamcen = [
    {id: 1, nombre: "Arroz" , img: "../imagenes/producto-almacen-arroz.jpg",  precio: 69, stock: 100},
    {id: 2, nombre: "Azucar", img: "../imagenes/producto-almacen-azucar.jpg", precio: 82, stock: 100},
    {id: 3, nombre: "Yerba", img: "../imagenes/producto-almacen-yerba.jpg", precio: 350, stock: 100},
    {id: 4, nombre: "Aceite", img: "../imagenes/producto-almacen-aceite.jpg", precio: 420, stock: 100}
]
const seccion_limpieza = [
    {id: 1, nombre: "Lavandina" , img: "../imagenes/prducto-limpieza-lavandina.jpg", precio: 69, stock: 100},
    {id: 2, nombre: "Desodorante", img: "../imagenes/producto-limpieza-desodorante.jpg", precio: 82, stock: 100},
    {id: 3, nombre: "Detergente", img: "../imagenes/producto-limpieza-detergente.jpg", precio: 350, stock: 100},
    {id: 4, nombre: "Lisoform", img: "../imagenes/producto-limpieza-lisoform.jpg", precio: 420, stock: 100}
]
const seccion_bebida = [
    {id: 1, nombre: "Vino" , img: "../imagenes/producto-bebidas-vino.jpg", precio: 69, stock: 100},
    {id: 2, nombre: "Agua", img: "../imagenes/producto-bebidas-agua.jpg", precio: 82, stock: 100},
    {id: 3, nombre: "Gaseosa", img: "../imagenes/producto-bebidas-gaseosa.jpg", precio: 350, stock: 100},
    {id: 4, nombre: "Agua Saborizada", img: "../imagenes/producto-bebidas-levite.jpg", precio: 420, stock: 100}
]
const seccion_bazar = [
    {id: 1, nombre: "Cuchillo" , img: "../imagenes/producto-bazar-cuchillo.jpg", precio: 69, stock: 100},
    {id: 2, nombre: "Tenedor", img: "../imagenes/producto-bazar-tenedor.jpg", precio: 82, stock: 100},
    {id: 3, nombre: "Cuchara", img: "../imagenes/producto-bazar-cuchara.jpg", precio: 350, stock: 100},
    {id: 4, nombre: "Olla", img: "../imagenes/producto-bazar-olla.jpg", precio: 420, stock: 100}
]
const seccion_perfumeria = [
    {id: 1, nombre: "Desodorante", img: "../imagenes/producto-perfumeria-desodorante.jpg", precio: 69, stock: 100},
    {id: 2, nombre: "Perfume", img: "../imagenes/producto-perfumeria-perfumeria.jpg", precio: 82, stock: 100},
    {id: 3, nombre: "Crema de Manos", img: "../imagenes/producto-perfumeria-crema.jpg", precio: 350, stock: 100},
    {id: 4, nombre: "Espuma Afeitar", img: "../imagenes/producto-perfumeria-espuma.jpg", precio: 420, stock: 100}
]
//-----------------------------------------------------------------------------------------------------------
const div_almacen = document.getElementById('seccion_almacen')

seccion_alamcen.forEach(productos => {
    const pantalla = document.createElement('div');
    pantalla.classList.add('seccionArticuloUnitario')
    pantalla.innerHTML = `
        <h2>${productos.nombre}</h2>
        <img src="${productos.img}" alt="">
        <p>${productos.precio}</p>
        <input type="button" value="Añadir al Carrito">
    `
    div_almacen.appendChild(pantalla);
})

const div_lipieza = document.getElementById('seccion_limpieza')

seccion_limpieza.forEach(productos => {
    const pantalla = document.createElement('div');
    pantalla.classList.add('seccionArticuloUnitario')
    pantalla.innerHTML = `
        <h2>${productos.nombre}</h2>
        <img src="${productos.img}" alt="">
        <p>${productos.precio}</p>
        <input type="button" value="Añadir al Carrito">
    `
    div_lipieza.appendChild(pantalla);
})

const div_bebidas = document.getElementById('seccion_bebidas')

seccion_bebida.forEach(productos => {
    const pantalla = document.createElement('div');
    pantalla.classList.add('seccionArticuloUnitario')
    pantalla.innerHTML = `
        <h2>${productos.nombre}</h2>
        <img src="${productos.img}" alt="">
        <p>${productos.precio}</p>
        <input type="button" value="Añadir al Carrito">
    `
    div_bebidas.appendChild(pantalla);
})

const div_bazar = document.getElementById('seccion_bazar')

seccion_bazar.forEach(productos => {
    const pantalla = document.createElement('div');
    pantalla.classList.add('seccionArticuloUnitario')
    pantalla.innerHTML = `
        <h2>${productos.nombre}</h2>
        <img src="${productos.img}" alt="">
        <p>${productos.precio}</p>
        <input type="button" value="Añadir al Carrito">
    `
    div_bazar.appendChild(pantalla);
})

const div_perfumeria = document.getElementById('seccion_perfumeria')

seccion_perfumeria.forEach(productos => {
    const pantalla = document.createElement('div');
    pantalla.classList.add('seccionArticuloUnitario')
    pantalla.innerHTML = `
        <h2>${productos.nombre}</h2>
        <img src="${productos.img}" alt="">
        <p>${productos.precio}</p>
        <input type="button" value="Añadir al Carrito">
    `
    div_perfumeria.appendChild(pantalla);
})
