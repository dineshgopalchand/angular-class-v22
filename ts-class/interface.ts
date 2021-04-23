export interface Point {
    minimum: number;
    maximum: number;
    // findAvg?(): number;
}

function distance(pointVal: Point): number {
    return pointVal.maximum - pointVal.minimum;
}

const pointValue: Point = {
    maximum: 30,
    minimum: 20
};
distance(pointValue);

