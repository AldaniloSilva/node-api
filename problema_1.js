
function fatorial(myNum){

    if(myNum===0){
        return 1;
    }

    else{
        return myNum * fatorial(myNum-1);
    }
}

function fatorialSum(num1, num2) {
    let res1 = 0;
    let res2 = 0;
    res1 = fatorial(num1);
    res2 = fatorial(num2);   
    return res1 + res2;
}

exports.fatorialSum = fatorialSum;

// module.exports = fatorialSum;


//console.log(fatorialSum(4, 4));
//console.log(fatorialSum(0, 0));
//console.log(fatorialSum(0, 2));