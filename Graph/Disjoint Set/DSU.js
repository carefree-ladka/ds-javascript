/* 
Disjoint Set
Date: 04-08-2022
*/

class DSU {
  constructor(N) {
    this.rank = Array(N).fill(1);
    this.parent = [...Array(N).keys()];
  }

  find = (x) => {
    /* 
    Finds the representative of the set
    that x is an element of
     */
    if (this.parent[x] !== x) {
      /* 
      if x is not the parent of itself
      Then x is not the representative of
      its set,
       */
      this.parent[x] = this.find(this.parent[x]);
    }
    /* 
    so we recursively call Find on its parent
    and move i's node directly under the
    representative of this set
     */
    return this.parent[x];
  };

  union = (x, y) => {
    //Find current sets of x and y
    let xset = this.find(x);
    let yset = this.find(y);
    //If they are already in same set
    if (xset === yset) return;
    if (this.rank[xset] < this.rank[yset]) this.parent[xset] = yset;
    /* 
      Put smaller ranked item under
      bigger ranked item if ranks are
      different
       */ else if (this.rank[xset] > this.rank[yset]) this.parent[yset] = xset;
    else {
      /*If ranks are same, then move y under
         x (doesn't matter which one goes where)
        and increment rank of x's tree */
      this.parent[yset] = xset;
      this.rank[xset]++;
    }
  };
}
const dsu = new DSU(5);
dsu.union(0, 2);
dsu.union(4, 2);
dsu.union(3, 1);
if (dsu.find(4) === dsu.find(0)) console.log("YES"); //YES
else console.log("NO");

if (dsu.find(1) === dsu.find(0)) console.log("YES");
else console.log("NO"); //NO
console.log(dsu.rank);

/* 
Applications:
Kruskal’s Minimum Spanning Tree Algorithm.
Job Sequencing Problem.
Cycle Detection
 */
