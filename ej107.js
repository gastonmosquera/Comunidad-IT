function numeroMasGrande(numero1, numero2) {
    if (numero1>numero2) {
        console.log(`${numero1} es mayor que ${numero2}`);
    } else if (numero1<numero2) {
        console.log(`${numero1} es menor que ${numero2}`);
    } else {
        console.log('Los numeros son iguales');
    }
}
numeroMasGrande(7, 8);