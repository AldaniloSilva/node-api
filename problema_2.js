//1219 - Colourfull Flowers
// const input = ["3 4 5","4 30 32"]; //variáveis de input
// const input = ["3 4 5"]; //variáveis de input
 
// const sidesList = input.map(sides => sides.split(' ').map(Number));
const perimeter = ([...sides]) => sides.reduce((acc, cur) => acc + cur, 0);
const heronFormula = ([...sides]) => {
    const semiperimeter = perimeter(sides) / 2;
    return Math.sqrt(sides.map(side => semiperimeter - side).reduce((acc, cur) => acc * cur, semiperimeter));
}
const circleArea = (r) => Math.PI * Math.pow(r, 2);
const inradius = ([...sides]) =>  heronFormula(sides) / (perimeter(sides) / 2);
const circumradius = ([...sides]) => sides.reduce((acc, cur) => acc * cur, 1) / (4 * heronFormula(sides));
 
function run(num1,num2,num3) {
    const responses = [];
   // const input = ["3 4 5"]; //variáveis de input
    const input = [`${num1} ${num2} ${num3}`]
    const sidesList = input.map(sides => sides.split(' ').map(Number));
 
    for (const sides of sidesList) {
        const areas = areaOfFlowers(sides).map(area => area.toFixed(4));
        responses.push(areas.join(' '));
    }
 
    console.log(responses.join('\n'));
}
function areaOfFlowers([...sides]) {
    const triangleAreaFromSides = heronFormula(sides);
 
    const sunflowers = circleArea(circumradius(sides)) - triangleAreaFromSides;
    const roses = circleArea(inradius(sides));
    const violets = triangleAreaFromSides - roses;
 
    return [sunflowers, violets, roses];
}
//run(3,4,5);

exports.run = run;