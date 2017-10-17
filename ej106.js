function obtenerIDUsuario() {
    return 50;
}
function usuarioValido() {
    return true;
}
if (obtenerIDUsuario() > 30) {
            console.log('El usuario es válido');
            return false;
        } else {
            console.log('El usuario no es válido');
            return true;
        }