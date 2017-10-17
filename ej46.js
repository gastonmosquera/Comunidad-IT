let usuarioYPassword = 'pepito2017,12345';
let nombreDeUsuario = usuarioYPassword.substr(0, 10);
let contraseña = usuarioYPassword.substr(11, 17);
let mensaje = `El usuario ${nombreDeUsuario} tiene ${contraseña} como contraseña`;
console.log(mensaje);