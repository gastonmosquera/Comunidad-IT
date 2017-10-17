let mensaje = '3.14 es un gran número, pero mejor es 42 que es el significado de la vida';
let pi = mensaje.substr(0, 4);
let textoNumero = parseFloat(pi);
let significadoDeLaVida = mensaje.substr(38, 3);
let textoNumero2 = parseFloat(significadoDeLaVida);
let resultado = textoNumero + textoNumero2;
console.log(`${resultado} es el resultado de sumar las variables pi y significadoDeLaVida, concatenando los valores.`);