function obtenerPerimetroRectangulo(base, altura) {
    if (base == altura) {
        let perimetroCuadrado = base*altura*base*altura;
    }
    if (base !== altura) {
        let perimetroRectangulo = base*altura*base*altura;
    }
    if (perimetroRectangulo > 100) {
        console.log('El perimetro es muy grande');
    } else if (console.log('El perimetro no es muy grande'))
    return perimetroRectangulo;
    console.log(`El perímetro es ${perimetroRectangulo}`);
}

obtenerPerimetroRectangulo(20, 25);