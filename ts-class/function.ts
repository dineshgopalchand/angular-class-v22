function showLog(): void {
    console.log('show Log function get called');
}
showLog();


function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(1, 3);

let sum = (num1: number, num2: number): number => {
    return num1 + num2;
};
let sum1 = (num1: number, num2: number): string => (num1 + num2).toString();

// function distance(minimum: number, maximum: number): number {
//     return maximum - minimum;
// }

// distance(10, 20);
// distance(20, 10);

type point = {
    minimum: number,
    maximum: number,
};

function distance(pointVal: point): number {
    return pointVal.maximum - pointVal.minimum;
}

const value: point = {
    maximum: 30,
    minimum: 20
};
distance(value);








