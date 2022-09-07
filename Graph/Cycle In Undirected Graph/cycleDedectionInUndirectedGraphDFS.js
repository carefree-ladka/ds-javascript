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
    this.adj[u].push(v);
  };
  isCyclicUtil = (source, visited) => {
    const parent = Array(this.V).fill(-1);
    const stack = [source];
    visited[source] = true;
    while (stack.length) {
      let curr = stack.pop();
      for (let i = 0; i < this.adj[curr].length; i++) {
        let v = this.adj[curr][i];
        if (!visited[v]) {
          visited[v] = true;
          stack.push(v);
          parent[v] = curr;
        } else if (parent[curr] != v) {
          return true;
        }
      }
    }
    return false;
  };

  hasCycle = () => {
    const visited = Array(this.V).fill(false);
    for (let i = 0; i < this.V; i++) {
      if (!visited[i] && this.isCyclicUtil(i, visited)) {
        return true;
      }
    }
    return false;
  };
  checkCycle = () => {
    if (this.hasCycle()) {
      console.log("Cycle is present.");
    } else {
      console.log("NO cycle is present");
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
graph.checkCycle(); //cycle is present
