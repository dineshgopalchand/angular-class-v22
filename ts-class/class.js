class Distance {
    constructor(min, max) {
        this.minimum = min;
        this.maximum = max;
    }
    findDistance() {
        return this.maximum - this.minimum;
    }
}
const distObj = new Distance(10, 40);
const r1 = distObj.findDistance();
console.log(r1);
distObj.minimum = 20;
distObj.maximum = 40;
const r2 = distObj.findDistance();
console.log(r2);
