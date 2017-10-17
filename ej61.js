let dia = 5;
let nombreDelDia = null;

switch (dia) {
    case 1:
    nombreDelDia = 'El nombre del día es Lunes';
    break;
    case 2:
    nombreDelDia = 'El nombre del día es Martes';
    break;
    case 3:
    nombreDelDia = 'El nombre del día es Miércoles';
    break;
    case 4:
    nombreDelDia = 'El nombre del día es Jueves';
    break;
    case 5:
    nombreDelDia = 'El nombre del día es Viernes';
    break;
    case 6:
    nombreDelDia = 'El nombre del día es Sábado';
    break;
    case 7:
    nombreDelDia = 'El nombre del día es Domingo';
    break;
    default:
    nombreDelDia = 'Por favor ingrese un numero del 1 al 7 que corresponda a un día de la semana.'
}

console.log(nombreDelDia);

if (dia === 1) {
    console.log('El nombre del diá es Lunes');
} else if (dia === 2) {
    console.log('El nombre del diá es Martes');
} else if (dia === 3) {
    console.log('El nombre del diá es Miércoles');
} else if (dia === 4) {
    console.log('El nombre del diá es Jueves');
} else if (dia === 5) {
    console.log('El nombre del diá es Viernes');
} else if (dia === 6) {
    console.log('El nombre del diá es Sábado');
} else if (dia === 7) {
    console.log('El nombre del diá es Domingo');
} else {
    console.log('Por favor ingrese un numero del 1 al 7 que corresponda a un día de la semana.');
}
