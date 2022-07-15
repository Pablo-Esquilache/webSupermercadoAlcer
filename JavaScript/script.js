
/*import {seccion_almacen, seccion_limpieza, seccion_bebida, seccion_bazar, seccion_perfumeria} from './data.js'
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
*/
//-------------------------------------------------------------------------------------------------------------

const registro_usuarios = []
console.log(registro_usuarios)

class Usuario {
    constructor(nombre, apellido, sexo, email, usuario, passw) {
        this.nombre = nombre
        this.apellido = apellido
        this.sexo = sexo
        this.email = email
        this.usuario = usuario
        this.passw = passw
    }
}

const formulario_registros = document.getElementById('formulario_registros')

formulario_registros.addEventListener('submit', (e) => {
    e.preventDefault()
    let nombre = document.getElementById('nombre').value
    let apellido = document.getElementById('apellido').value
    let sexo = document.getElementById('sexo').value
    let email = document.getElementById('email').value
    let usuario = document.getElementById('usuario').value
    let passw = document.getElementById('passw').value

     const nuevo_usuario = new Usuario(nombre, apellido, sexo, email, usuario, passw)

     registro_usuarios.push(nuevo_usuario)

     console.log(registro_usuarios)

     formulario_registros.reset()
})


