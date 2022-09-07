const courseSchedule = (numOfCourses, prerequisites) => {
  const order = [];
  const queue = [];
  const graph = {};
  const indegree = Array(numOfCourses).fill(0);

  for (const [e, v] of prerequisites) {
    // if (graph[v]) graph[v].push(e);
    // else graph[v] = [e];
    graph[v] = [...(graph[v] || []), e];
    indegree[e]++;
  }

  indegree.forEach((x, idx) => x === 0 && queue.push(idx));

  while (queue.length) {
    const v = queue.shift();
    order.push(v);
    graph[v]?.forEach(
      (vertex) => --indegree[vertex] === 0 && queue.push(vertex)
    );
  }
  return numOfCourses === order.length;
};

console.log(courseSchedule(2, [[1,0],[0,1]]));
