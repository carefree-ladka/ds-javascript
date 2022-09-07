class Edge {
  constructor() {
    this.src = 0;
    this.dest = 0;
  }
}

class Graph {
  constructor(V, E) {
    this.E = E;
    this.V = V;
    this.adj = [...Array(E).keys()];
  }

  addEdge = (v, u) => {
    this.adj[v].push(u);
    this.adj[u].push(v);
  };

  find = (parent, x) => {
    if (parent[x] == -1) return x;
    return this.find(parent, parent[x]);
  };

  union = (parent, x, y) => (parent[x] = y);

  isCyclic = () => {
    const parent = Array(this.V).fill(-1);
    for (var i = 0; i < E; ++i) {
      let x = this.find(parent, edge[i].src);
      let y = this.find(parent, edge[i].dest);
      if (x == y) return 1;

      this.union(parent, x, y);
    }
    return 0;
  };
}

const dsu = new Graph(3, 3);
