//Equacao Função Recursiva Enade
function elemento(xi){
    if(xi > 0){
        return xi + (1/xi);
    }
    
}
 
function produtorioRecurs(inicio, final) {
    //let ini = num1;
    //let final = num2;    
    
 
    if(inicio == final){
        return elemento(inicio);
    }
    else if(inicio > final){
        return `inicio tem que ser menor que final => inicio = ${inicio}|final = ${final}`;
    }
    else{        
 
        return elemento(final)*produtorioRecurs(inicio, final-1);
    }
    
    //return res1 + res2;
}