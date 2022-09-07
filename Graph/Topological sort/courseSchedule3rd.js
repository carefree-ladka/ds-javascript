/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function (courses) {
  const heap = new MaxPriorityQueue(); //Assume it's already available 
  let totalTime = 0;

  courses.sort((a, b) => a[1] - b[1]); // sort by end
  for (const [time, end] of courses) {
    totalTime += time;
    heap.enqueue(time);

    while (totalTime > end) totalTime -= heap.dequeue().element; // remove max duration first
  }
  return heap.size();
};


//Time : O(NlogN)
//Space : O(N)