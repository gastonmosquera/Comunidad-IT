function esPar(numero) {
    if ((numero % 2) ===0) {
        console.log(`${numero} es par`);
    } else if ((numero % 2) !==0) {
        console.log(`${numero} no es par`);
    }
    return true;
}
esPar(2);
esPar(5);
esPar(3);
esPar(24);
esPar(12);