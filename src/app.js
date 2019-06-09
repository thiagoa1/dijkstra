import Graph from "./components/graph.map/graph.js"

let graph = new Graph(false)

let v = graph.addVertex('v')
let u = graph.addVertex('u')
let w = graph.addVertex('w')
let z = graph.addVertex('z')

let e = graph.addEdge(v, u, 'e')
let j = graph.addEdge(v, w, 'f')
let g = graph.addEdge(u, w, 'g')
let i = graph.addEdge(w, z, 'i')

console.log(graph.vertices())
console.log(graph.edges())