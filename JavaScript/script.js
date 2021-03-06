
const seccion_almacen = [
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
//----------------------------------------------------------------------------------------------------------------
const div_almacen = document.getElementById('seccion_almacen')

seccion_almacen.forEach((productos, indice) => {
    div_almacen.innerHTML += `<div  class="seccionArticuloUnitario" id="producto${indice}">
                            <h2>${productos.nombre}</h2>
                            <img src="${productos.img}" alt="">
                            <p>${productos.precio}</p>
                            <input type="button" id="a??adir" value="A??adir al Carrito">
                        </div>`
})

const div_lipieza = document.getElementById('seccion_limpieza')

seccion_limpieza.forEach((productos, indice) => {
    div_lipieza.innerHTML += `<div  class="seccionArticuloUnitario" id="producto${indice}">
                            <h2>${productos.nombre}</h2>
                            <img src="${productos.img}" alt="">
                            <p>${productos.precio}</p>
                            <input type="button" id="a??adir" value="A??adir al Carrito">
                        </div>`
})

const div_bebidas = document.getElementById('seccion_bebidas')

seccion_bebida.forEach((productos,indice) => {
    div_bebidas.innerHTML += `<div  class="seccionArticuloUnitario" id="producto${indice}">
                            <h2>${productos.nombre}</h2>
                            <img src="${productos.img}" alt="">
                            <p>${productos.precio}</p>
                            <input type="button" id="a??adir" value="A??adir al Carrito">
                        </div>`
})

const div_bazar = document.getElementById('seccion_bazar')

seccion_bazar.forEach((productos, indice) => {
    div_bazar.innerHTML += `<div  class="seccionArticuloUnitario" id="producto${indice}">
                            <h2>${productos.nombre}</h2>
                            <img src="${productos.img}" alt="">
                            <p>${productos.precio}</p>
                            <input type="button" id="a??adir" value="A??adir al Carrito">
                        </div>`
})

const div_perfumeria = document.getElementById('seccion_perfumeria')

seccion_perfumeria.forEach((productos, indice) => {
    div_perfumeria.innerHTML += `<div  class="seccionArticuloUnitario" id="producto${indice}">
                            <h2>${productos.nombre}</h2>
                            <img src="${productos.img}" alt="">
                            <p>${productos.precio}</p>
                            <input type="button" id="a??adir" value="A??adir al Carrito">
                        </div>`
})
//------------------------------------------------------------------------------------------------------------

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

let registro_usuarios = [];

if(localStorage.getItem('base_datos_usuarios')){
    registro_usuarios = JSON.parse(localStorage.getItem('base_datos_usuarios'))
}
else {
    localStorage.setItem('base_datos_usuarios', JSON.stringify(registro_usuarios))
}

const formulario_registros = document.getElementById('formulario_registros');

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

     localStorage.setItem('base_datos_usuarios', JSON.stringify(registro_usuarios))

     console.log(registro_usuarios)

     formulario_registros.reset()
})
//------------------------------------------------------------------------------------------------------------------
let usuario_ingreso = registro_usuarios.find((usuario) => usuario.usuario === "rosi")
console.log(usuario_ingreso)
let usuario_passw = registro_usuarios.find((passw) => passw.usuario === "pablitoo")
console.log(usuario_passw)

const formulario_ingreso = document.getElementById('formulario_ingreso')
let ingreso_usuario = document.getElementById('usiario').value
let ingreso_passw = parseInt(document.getElementById('contrase??a').value)

formulario_ingreso.addEventListener('submit', (e)=> {    
    e.preventDefault()
    let usuario_ingreso = registro_usuarios.some((usuario) => usuario.usuario === ingreso_usuario)
    let usuario_passw = registro_usuarios.some((passw) => passw.usuario === ingreso_passw)

    if (usuario_ingreso == true ||  usuario_passw == true){
        alert("Bienvenido")
    } else {
        alert("Nono")
    }
    
    formulario_ingreso.reset()
})
//-----------------------------------------------------------------------------------------------------------------
// const btn_a??adir = document.getElementById('a??adir')

// const seccion_carrito = document.getElementById('seccion_carrito')

// btn_a??adir.addEventListener('click', ()=> {
//     seccion_almacen.forEach((producto) => {        
//         seccion_carrito.innerHTML +=   `<tr>
//                                             <td><b>${producto}</b></td>
//                                             <td><b>Cantidad</b></td>
//                                             <td><b>Precio</b></td>
//                                             <td><b>Sub Total</b></td>
//                                         </tr>`
//     })
// })