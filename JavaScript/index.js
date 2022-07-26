
import {registro_usuarios} from './registro.js'

console.log(registro_usuarios)

const formulario_ingreso = document.getElementById('formulario_ingreso')
const ingreso_usuario = document.getElementById('usiario').value
const ingreso_passw = document.getElementById('contraseña').value

formulario_ingreso.addEventListener('submit', ()=> {
    registro_usuarios.forEach((usuario,passw)=> {
    if(ingreso_usuario === `registro_usuarios${usuario}` && ingreso_passw === `registro_usuarios${passw}`){
        alert("Sesion iniciada existosamente")
    } else {
        alert("Ingrese datos validos")
    }
})
})

/*
//BOTON INICIAR CESION
bntInicio.addEventListener(`click`, () => {
    if (localStorage.getItem(`usuariosRegistrados`)) {
        usuarioNuevo = JSON.parse(localStorage.getItem(`usuariosRegistrados`)) //con esto veo si esta creado el localStorage lo guardo en una variable y sino lo creo
    } else {
        localStorage.setItem(`usuariosRegistrados`, JSON.stringify(usuarioNuevo))
    }


    let flag = usuarioNuevo.some(user => user.dni === idUsuario.value && idClave.value === user.clave)
    //guardo en una variable true o False que devuelve some del comparar lo que ingreso por teclado el usuario con lo archivado en el localStorage
    if (flag === true) {
        mensaje1.innerHTML = `
        <p> Ingreso Exitoso</p>
        `
        let usuarioActivo = idUsuario.value //guardo en una variable el usuario que ingreso
        localStorage.setItem(`usuarioActivo`, usuarioActivo) //lo guardo en el localStorage para luego consultarlo en el programa
        idUsuario.value = ""
        idClave.value = ""

        setTimeout(function () {
            window.location = "programa.html" //cambia a otra ventana y le doy unos segundos de tiempo para que se vea el mensaje de ingreso
        }, 1500)

    } else {
        mensaje1.innerHTML = `
       <p> Error de usuario y/o contraseña</p>
   `
        idUsuario.value = ""
        idClave.value = ""
    }
})
*/