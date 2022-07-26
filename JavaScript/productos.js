
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
        <input type="button" id="añadir" value="Añadir al Carrito">
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
        <input type="button" id="añadir" value="Añadir al Carrito">
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
        <input type="button" id="añadir" value="Añadir al Carrito">
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
        <input type="button" id="añadir" value="Añadir al Carrito">
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
        <input type="button" id="añadir" value="Añadir al Carrito">
    `
    div_perfumeria.appendChild(pantalla);
})
//--------------------------------------------------------------------------------------------------------------
// const btn_añadir = document.getElementById('añadir')

// const seccion_carrito = document.getElementById('seccion_carrito')

// btn_añadir.addEventListener('click', ()=> {
//     seccion_almacen.forEach((producto) => {
//         seccion_carrito.innerHTML +=   `<div>
//                                             <tr>
//                                                 <td><b>Producto</b></td>
//                                                 <td><b>Cantidad</b></td>
//                                                 <td><b>Precio</b></td>
//                                                 <td><b>Sub Total</b></td>
//                                             </tr>>
//                                         </div>`
//     })
// })

