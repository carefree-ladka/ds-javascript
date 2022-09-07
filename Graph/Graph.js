class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  addVertex = (vertex) => {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  };

  addEdge = (src, dest) => {
    this.adjacencyList.get(src).push(dest);
    this.adjacencyList.get(dest).push(src);
  };

  removeEdge = (v1, v2) => {
    /* this.adjacencyList.set(
      v1,
      this.adjacencyList.get(v1).filter((v) => v !== v2)
    ); */
    for (let i = 0; i < this.adjacencyList[v1].length; i++) {
      if (this.adjacencyList[v1][i] === v2) {
        this.adjacencyList[v1].pop(i);
        break;
      }
    }

    /* this.adjacencyList.set(
      v2,
      this.adjacencyList.get(v2).filter((v) => v !== v1)
    ); */
    for (let i = 0; i < this.adjacencyList[v2].length; i++) {
      if (this.adjacencyList[v2][i] === v1) {
        this.adjacencyList[v2].pop(i);
        break;
      }
    }
  };
  removeVertex = (vertex) => {
    while (this.adjacencyList.has(vertex).length) {
      const adj = this.adjacencyList.get(vertex).pop();
      this.removeEdge(vertex, adj);
    }
    this.adjacencyList.delete(vertex);
  };
  dfsUtil = (source, visited) => {
    visited.set(source, true);
    this.adjacencyList.get(source).forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        this.dfsUtil(neighbor, visited);
      }
    });
  };

  dfs = (source) => this.dfsUtil(source, new Map());

  dfsIterative = (source) => {
    const visited = new Map();
    const queue = [source];
    visited.set(source, true);
    while (queue.length > 0) {
      let curr = queue.pop();
      console.log(curr);
      this.adjacencyList.get(curr).forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.set(neighbor, true);
          queue.push(neighbor);
        }
      });
    }
  };

  bfsUtil = (source, visited) => {
    const queue = [source];
    visited.set(source, true);
    while (queue.length > 0) {
      let curr = queue.shift();
      console.log(curr);
      this.adjacencyList.get(curr).forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.set(neighbor, true);
          queue.push(neighbor);
        }
      });
    }
  };

  bfs = (source) => this.bfsUtil(source, new Map());

  printAdjacencyList = () => {
    let result = "";
    let list = this.adjacencyList;
    for (let key of list.keys()) {
      for (let node of list.get(key)) {
        result += node + " ";
      }
      console.log(`${key} -> ${result}`);
      result = "";
    }
  };
}
const graph = new Graph();

["A", "B", "C", "D", "E", "F"].forEach((vertex) => graph.addVertex(vertex));
graph.addEdge("A", "B");
graph.addEdge("A", "D");
graph.addEdge("A", "E");
graph.addEdge("B", "C");
graph.addEdge("D", "E");
graph.addEdge("E", "F");
graph.addEdge("E", "C");
graph.addEdge("C", "F");
// graph.dfs("A");
// graph.removeEdge("A", "B");
graph.removeVertex("A");
graph.printAdjacencyList();
//graph.bfs("A");
// graph.dfsIterative("A");
// graph.printAdjacencyList();
