//Equacao Função Iterativa Enade

const element = (index) => {
    return index + (1 / index);
    }
    
    function productory(m, n) {
    let result = 1;
    
    for (m; m <= n; m++) {
    let product = element(m);
    
    result *= product;
    }
    
    return result;
    }
    
    // console.log(productory(1, 2));