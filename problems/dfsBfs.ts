class Graph {
  private adjacencyList: Map<number, number[]> = new Map();

  addVertex(v: number) {
    if (!this.adjacencyList.has(v)) {
      this.adjacencyList.set(v, []);
    }
  }

  addEdge(v: number, w: number) {
    this.adjacencyList.get(v)?.push(w);
    this.adjacencyList.get(w)?.push(v);
  }

  dfs(start: number) {
    const visitedSet = new Set<number>();
    const dfsRecursive = (v: number) => {
      if (visitedSet.has(v)) return;
      visitedSet.add(v);
      console.log(v);
      this.adjacencyList.get(v)?.forEach(neighbor => {
        if (!visitedSet.has(neighbor)) {
          dfsRecursive(neighbor);
        }
      });
    };

    dfsRecursive(start);
  }

  bfs(start: number) {
    const visitedSet = new Set<number>();
    const queue: number[] = [];

    visitedSet.add(start);
    queue.push(start);

    while (queue.length > 0) {
      const v = queue.shift()!;
      console.log(v);
      this.adjacencyList.get(v)?.forEach(neighbor => {
        if (!visitedSet.has(neighbor)) {
          visitedSet.add(neighbor);
          queue.push(neighbor);
        }
      })
    }
  }
}

const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);

graph.dfs(1);
console.log('==========');
graph.bfs(1);
