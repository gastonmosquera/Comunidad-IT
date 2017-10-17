function mostrarNumeros(inicio, fin) {
    if (inicio >= fin) { // la secuencia debe ser ascendente
        console.log('Inicio:', inicio,'Fin:', fin);
    } else if (inicio <= fin) { // la secuencia debe ser descendente
        console.log('Fin:', fin, 'Inicio', inicio);
}
}
mostrarNumeros(0, 1000);
mostrarNumeros(1000, 0);
mostrarNumeros(100, 100);
mostrarNumeros(100, 300);