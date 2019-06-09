// Dijkstra
export const shortestPath = (graph, initialVertex) => {
    let estimativeMap = new Map()
    let closed = []

    // Inicia todas as estimativas sem precedente e custo infinito
    let vertices = graph.vertices()
    for (let vertex of vertices) {
        estimativeMap.set(vertex, { preceding: null, cost: Number.POSITIVE_INFINITY })
    }

    // Inicia a estimativa do vértice inicial sem precedente e estimativa zero
    estimativeMap.set(initialVertex, { preceding: null, cost: 0 })

    var currentVertex = initialVertex

    while (currentVertex !== null) {
        let currentEstimative = estimativeMap.get(currentVertex)
        // Recupera as arestas e transforma cada uma para o vértice oposto do vértice atual
        let adjacentVertices = graph.incidentEdges(currentVertex).map(edge => edge.opposite(currentVertex))

        // Relaxamento dos vértices opostos
        adjacentVertices.forEach(oppositeVertex => {
            // Só faz o relaxamento se o vértice não estiver fechado
            if (!closed.includes(oppositeVertex)) {
                let estimative = estimativeMap.get(oppositeVertex)
                if (estimative.cost > currentEstimative.cost + 1) {
                    estimativeMap.get(oppositeVertex).preceding = currentVertex
                    estimativeMap.get(oppositeVertex).cost = currentEstimative.cost + 1
                }
            }
        })

        closed.push(currentVertex)
        currentVertex = minCost(estimativeMap, closed)
    }

    return estimativeMap
}

const minCost = (estimativeMap, closed) => {
    var minValue = Number.POSITIVE_INFINITY
    var minVertex = null

    estimativeMap.forEach((estimative, vertex) => {
        if (!closed.includes(vertex) && estimative.cost < minValue) {
            minValue = estimative.cost
            minVertex = vertex
        }
    })

    return minVertex
}

export const DFS = (graph, vertex, discovered) => {
    Object.values(graph.incidentEdges(vertex)).forEach(edge => {
        let destiny = edge.opposite(vertex)
        if (!discovered.has(destiny)) {
            discovered.set(destiny, edge)
            DFS(graph, destiny, discovered)
        }
    });
}

export const DFS_complete = (graph) => {
    let forest = new Map()

    graph.vertices().forEach(vertex => {
        if (!forest.has(vertex)) {
            forest.set(vertex, null)
            DFS(graph, vertex, forest)
        }
    })

    return forest
}

export const constructPath = (discovereds, origin, destination) => {
    let path = []

    var currentDestination = destination
    path.unshift(currentDestination)

    var noPath = false

    while (currentDestination !== origin) {
        var currentEdge = discovereds.get(currentDestination)

        var opposite = currentEdge.opposite(currentDestination)
        path.unshift(opposite)

        currentDestination = opposite
    }
    if (noPath) {
        return null
    }

    return path
}

// Está dando erro com BFS
export const constructPathTrp = (discovereds, origin, destination) => {
    let path = []
    let edges = discovereds.values()

    var currentOrigin = origin
    path.push(currentOrigin)

    while (currentOrigin !== null) {
        let currentOriginEdge = edges.find(edge => {
            if (edge !== null) {
                return edge.origin() === currentOrigin
            } else {
                return false
            }
        })

        if (currentOriginEdge === undefined) {
            currentOrigin = null
        } else {
            var opposite = currentOriginEdge.opposite(currentOrigin)
            path.push(opposite)
            if (opposite === destination) {
                currentOrigin = null
            } else {
                currentOrigin = opposite
            }
        }
    }

    return path
}

export const BFS = (graph, vertex, discovered) => {
    let queue = [vertex]

    while (queue.length > 0) {
        let currentVertex = queue.pop()
        let incidentEdges = graph.incidentEdges(currentVertex)

        incidentEdges.forEach(edge => {
            let opposite = edge.opposite(currentVertex)
            if (!discovered.has(opposite)) {
                discovered.set(opposite, edge)
                queue.unshift(opposite)
            }
        })
    }
}