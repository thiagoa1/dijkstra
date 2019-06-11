import Graph from "./components/graph.map/graph.js"
import { shortestPath } from "./components/graph.map/operations.js";

let graph = new Graph(false)

/*
let v = graph.addVertex('v')
let u = graph.addVertex('u')
let w = graph.addVertex('w')
let z = graph.addVertex('z')

let e = graph.addEdge(v, u, 1)
let j = graph.addEdge(v, w, 1)
let g = graph.addEdge(u, w, 1)
let i = graph.addEdge(w, z, 1)

console.log(shortestPath(graph, v))
*/

//console.log(graph.vertices())
//console.log(graph.edges())


let a = graph.addVertex('a')
let b = graph.addVertex('b')
let c = graph.addVertex('c')
let d = graph.addVertex('d')
let e = graph.addVertex('e')

let e1 = graph.addEdge(a, b, 3)
let e2 = graph.addEdge(a, c, 5)
let e3 = graph.addEdge(a, d, 7)
let e4 = graph.addEdge(b, c, 1)
let e5 = graph.addEdge(c, d, 2)
let e6 = graph.addEdge(c, e, 10)
let e7 = graph.addEdge(d, e, 1)

console.log(shortestPath(graph, a))
