let hora = 22; // Poner un valor entre 0 y 24.
if ((hora < 12 ) && (hora >= 6)) {
    console.log('Buen día');
} else if ((hora >= 12) && (hora < 20)) {
    console.log('Buenas tardes');
} else {
    console.log('Buenas noches');
}
