import Vertex from "./vertex.js";
import Edge from "./edge.js";

export default class Graph {

    constructor(directed=false) {
        this._directed = directed

        this._outgoing = new Map()
        if (this._directed) {
            this._incoming = new Map()
        }
    }

    addVertex(key) {
        // TODO não permitir vertices já existentes

        let vertex = new Vertex(key)
        this._outgoing.set(vertex, [])

        if (this._directed) {
            this._incoming.set(vertex, [])
        }

        return vertex
    }

    // Element pode representar o peso
    addEdge(origin, destiny, element=null) {
        // TODO não permitir arestas já existentes

        let edge = new Edge(origin, destiny, element)

        this._outgoing.get(origin).push(edge)

        if (origin !== destiny) {
            if (!this._directed) {
                this._outgoing.get(destiny).push(edge)
            } else {
                this._incoming.get(destiny).push(edge)
            }
        }

        return edge
    }

    incidentEdges(vertex) {
        return this._outgoing.get(vertex)
    }

    isDirected() {
        return this._directed
    }

    vertices() {
        // apenas para grafo não direcionado
        return Array.from(this._outgoing.keys())
    }

    edges() {
        // apenas para grafo não direcionado
        return Array.from(this._outgoing.values()).flat()
    }

    outgoing() {
        return this._outgoing
    }

    incoming() {
        return this._incoming
    }

    vertexDegree() {
        // TODO
        // IF oriented has 2 degrees
    }
}

Object.defineProperties(Array.prototype, {
    'flatMap': {
        value: function (lambda) {
            return Array.prototype.concat.apply([], this.map(lambda));
        },
        writeable: false,
        enumerable: false
    }
});