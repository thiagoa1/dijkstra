export default class Vertex {

    constructor(element) {
        this._element = element
    }

    element() {
        return this._element
    }

    toString() {
        return this._element
    }
}

Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
});