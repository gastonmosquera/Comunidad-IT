let numero = 0;
let sumaImpares = 0;
for (numero = 0; numero <= 1000; numero++) {
    if ((numero % 2) !== 0); {
    sumaImpares += numero;
    console.log('Suma parcial de impares', sumaImpares);
    }
}