
import {registro_usuarios} from './registro.js'

console.log(registro_usuarios)

let usuario_ingreso = registro_usuarios.find((usuario) => usuario.usuario === "rosi")
console.log(usuario_ingreso)
let usuario_passw = registro_usuarios.find((passw) => passw.usuario === "pablitoo")
console.log(usuario_passw)

const formulario_ingreso = document.getElementById('formulario_ingreso')
let ingreso_usuario = document.getElementById('usiario').value
let ingreso_passw = parseInt(document.getElementById('contraseña').value)

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

