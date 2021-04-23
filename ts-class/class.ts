
import { Point } from './interface';
export class Distance {


    // minimum: number;
    // maximum: number;
    // constructor(min: number, max: number) {
    //     this.minimum = min;
    //     this.maximum = max;
    // }
    // private minimum: number;
    // private maximum: number;

    private details = {
        name: {
            firstname: 'Dinesh',
            lastname: 'Chand'
        }
    };
    constructor(private min: number, private max: number) { }
    findDistance(): number {
        return this.max - this.min;
    }

    get minimum(): number {
        return this.min;
    }
    set minimum(value: number) {
        // condition
        this.min = value;
    }
    get firstname(): string {
        return this.details.name.firstname;
    }
}

const distObj = new Distance(10, 40);

const r1 = distObj.findDistance();
console.log(r1);

// distObj.minimum = 20;
// distObj.maximum = 40;
// const r2 = distObj.findDistance();
// console.log(r2);

console.log(distObj.minimum);
distObj.minimum = 15;
console.log(distObj.minimum);


