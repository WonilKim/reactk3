export class Point {

    r = 0;
    c = 0;
    direction = 0;

    constructor(r, c, direction) {
        this.r = r;
        this.c = c;
    }

    equals(p) {
        if ((this.r === p.r) && (this.c === p.c) && (this.direction === p.direction))
            return true;
        else
            return false;
    }

    offset(p) {
        let result = new Point(this.r + p.r, this.c + p.c, p.direction);

        return result;
    }

    toString() {
        return this.r + ", " + this.c + ", " + this.direction;
    }
}