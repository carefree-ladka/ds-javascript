//Kahn's Algorithm
//Detecting Cycle in Directed Graphs

class TopologicalSort {
  constructor(V) {
    this.V = V;
    this.adj = Array.from({ length: V }, (_) => Array());
  }

  addEdge = (u, v) => {
    this.adj[u].push(v);
  };

  topologicalSort = () => {
    const indegree = Array(this.V).fill(0);

    //Create indgree array
    for (let i = 0; i < this.V; i++) {
      this.adj[i].forEach((vertext) => indegree[vertext]++);
    }

    //Select vertext with min indgree
    const queue = [];
    for (let i = 0; i < this.V; i++) {
      if (indegree[i] === 0) queue.push(i);
    }

    let c = 0;
    const linearOrder = [];
    while (queue.length) {
      const x = queue.shift();
      linearOrder.push(x);
      this.adj[x]?.forEach((vertex) => {
        if (--indegree[vertex] === 0) {
          queue.push(vertex);
        }
      });
      c++;
    }
    if (c !== this.V) return true;
    else return false;
    // linearOrder.forEach((x) => console.log(x + " "));
  };
}

const g = new TopologicalSort(6);
g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(3, 4);
g.addEdge(4, 5);
console.log(g.topologicalSort()); //Cycle is present
