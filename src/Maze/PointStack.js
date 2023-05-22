export class PointStack {

    data = [];

    push(p) {
        this.data.push(p);
    }

    pop() {
        return this.data.pop();
    }

    getData() {
        return this.data;
    }

    clear() {
        this.data = [];
    }

    size() {
        return this.data.size;
    }

    toString() {
        let str = "";
        for(let d of this.data) {
            str += " [" + d.toString() + "]";
        }
        return str;
    }
}