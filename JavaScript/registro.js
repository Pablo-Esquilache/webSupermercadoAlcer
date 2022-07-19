
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

     localStorage.setItem('base_datos_usuarios', JSON.stringify(registro_usuarios))

     console.log(registro_usuarios)

     formulario_registros.reset()
})

export {registro_usuarios}


