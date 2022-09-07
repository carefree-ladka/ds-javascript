/* 
Cycle Dedection in Undirected Graph using DFS
*/
class Graph {
  constructor(V) {
    this.V = V;
    this.adj = {};
  }
  addVertex = (v) => {
    if (!this.adj[v]) {
      this.adj[v] = [];
    }
  };
  addEdge = (v, u) => {
    this.adj[v].push(u);
  };
  isCyclicUtil = (source, visited, dfsVisited) => {
    visited[source] = true;
    dfsVisited[source] = true;
    this.adj[source]?.forEach((neighbor) => {
      if (!visited[neighbor] && this.isCyclicUtil(neighbor, visited, dfsVisited))
        return true;
      else if (dfsVisited[neighbor]) return true;
    });
    dfsVisited[source] = false;
    return false;
  };

  hasCycle = () => {
    const visited = Array(this.V).fill(false);
    const dfsVisited = Array(this.V).fill(false);
    for (let i = 0; i < this.V; i++) {
      if (!visited[i] && this.isCyclicUtil(i, visited, dfsVisited)) {
        return true;
      }
    }
    return false;
  };
  checkCycle = () => {
    if (this.hasCycle()) {
      console.log("Cycle is present.");
    } else {
      console.log("No cycle is present");
    }
  };
}

const graph = new Graph(4);
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(2, 3);
// graph.checkCycle(); //cycle is present
