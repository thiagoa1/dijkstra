export default class Edge {

    constructor(origin, destiny, element = null) {
        this._origin = origin
        this._destiny = destiny
        this._element = element
    }

    origin() {
        return this._origin
    }

    destiny() {
        return this._destiny
    }
    
    element() {
        return this._element
    }

    endPoints() {
        return [this.origin, this.destiny]
    }

    opposite(vertex) {
        // TODO adicionar verificação se o vértice não existir
        if (vertex === this._origin) {
            return this._destiny
        } else if (vertex === this._destiny) {
            return this._origin
        } else {
            null
        }
    }

    equals(anotherEdge) {
        if (this._origin !== anotherEdge.origin) {
            return false
        }
        if (this._destiny !== anotherEdge._destiny) {
            return false
        }
        if (this._element !== anotherEdge._element) {
            return false
        }

        return true
    }

    toString() {
        return this.element()
    }
}