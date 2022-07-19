
import {seccion_almacen, seccion_limpieza, seccion_bebida, seccion_bazar, seccion_perfumeria} from './data.js'
//-----------------------------------------------------------------------------------------------------------
const div_almacen = document.getElementById('seccion_almacen')

seccion_almacen.forEach(productos => {
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



