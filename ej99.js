let numero = 0;
let sumaPares = 0;
let contador = 0;
for (numero = 0; numero <= 1000 && contador <= 9; numero++)  {
    if ((numero % 2) == 0) {
        contador++;
        sumaPares += numero;
        console.log('Suma hasta 10 numeros pares:', numero);
        console.log(sumaPares);
    }
}