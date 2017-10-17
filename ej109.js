function autenticarUsuario(usuario, password) {
   if (usuario == true && password == true) {
        console.log(`Bienvenido ${usuario}, te estabamos esperando`);
    } else if (usuario !== true && password !== true) {
        console.log('Por favor ingrese credenciales válidas');
    }
    return true;
}
autenticarUsuario('nacho', 'Nerd1979');
autenticarUsuario('pedro', 'Batman0217');
autenticarUsuario('marta', 'Madre2312');