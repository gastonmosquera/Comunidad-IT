let numeroDeMes = 10;
let nombreDeMes = null;
let cantidadDeDias = null;
switch (numeroDeMes) {
    case 1:
    nombreDeMes = 'Enero';
    cantidadDeDias = '31';
    break;
    case 2:
    nombreDeMes = 'Febrero';
    cantidadDeDias = '28/29';
    break;
    case 3:
    nombreDeMes = 'Marzo';
    cantidadDeDias = '31';
    break;
    case 4:
    nombreDeMes = 'Abril';
    cantidadDeDias = '30';
    break;
    case 5:
    nombreDeMes = 'Mayo'
    cantidadDeDias = '31';
    break;
    case 6:
    nombreDeMes = 'Junio';
    cantidadDeDias = '30';
    break;
    case 7:
    nombreDeMes = 'Julio';
    cantidadDeDias = '31';
    break;
    case 8:
    nombreDeMes = 'Agosto';
    cantidadDeDias = '31';
    break;
    case 9:
    nombreDeMes = 'Septiembre';
    cantidadDeDias = '30';
    break;
    case 10:
    nombreDeMes = 'Octubre';
    cantidadDeDias = '31';
    break;
    case 11:
    nombreDeMes = 'Noviembre';
    cantidadDeDias = '30';
    break;
    case 12:
    nombreDeMes = 'Diciembre';
    cantidadDeDias = '31';
    break;
    default:
    nombreDeMes = null;
    cantidadDeDias = null;
}
if ((nombreDeMes == null) && (cantidadDeDias == null)) {
    console.log('Ingrese un numero entre 1 y 12');
} else {
    console.log('El mes seleccionado es', nombreDeMes ,'y tiene', cantidadDeDias ,'de días');
}