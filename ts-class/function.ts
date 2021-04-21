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




