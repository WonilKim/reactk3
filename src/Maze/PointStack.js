export class PointStack {

    data = [];

    push(p) {
        this.data.push(p);
    }

    pop() {
        if (this.data.size === 0) {
            return null;
        }

        return this.data.pop();
    }

    getAllData() {
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
        for (let d of this.data) {
            str += " [" + d.toString() + "]";
        }
        return str;
    }
}