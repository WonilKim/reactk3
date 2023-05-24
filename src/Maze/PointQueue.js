export class PointQueue {

    data = [];

    enque(p) {
        this.data.push(p);
    }

    push(p) {
        this.data.push(p);
    }

    deque() {
        if (this.data.length === 0) {
            return null;
        }

        let firstItem = this.data[0];
        this.data.splice(0, 1);

        return firstItem;
    }

    peek() {
        if (this.data.length === 0) {
            return null;
        }      

        let lastItem = this.data[this.data.length - 1].copy();

        return lastItem;
    }

    pop() {
        if (this.data.length === 0) {
            return null;
        }

        return this.data.pop();
    }

    copy() {
        let copy = new PointQueue();
        for(let d of this.data) {
            copy.push(d);
        }

        return copy;
    }

   getAllData() {
        return this.data;
    }

    clear() {
        this.data = [];
    }

    size() {
        return this.data.length;
    }

    toString() {
        let str = "";
        for (let d of this.data) {
            str += " [" + d.toString() + "]";
        }
        return str;
    }
}