class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return max;
  }

  bubbleUp() {
    let currentIdx = this.heap.length - 1;
    while (currentIdx > 0) {
      const parentIdx = Math.floor((currentIdx - 1) / 2);
      if (this.heap[currentIdx] <= this.heap[parentIdx]) break;
      [this.heap[currentIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[currentIdx]];
      currentIdx = parentIdx;
    }
  }

  sinkDown(currentIdx) {
    const leftIdx = 2 * currentIdx + 1;
    const rightIdx = 2 * currentIdx + 2;
    const maxIdx = this.findMaxIndex(currentIdx, leftIdx, rightIdx);

    if (maxIdx !== currentIdx) {
      [this.heap[currentIdx], this.heap[maxIdx]] = [this.heap[maxIdx], this.heap[currentIdx]];
      this.sinkDown(maxIdx);
    }
  }

  findMaxIndex(currentIdx, leftIdx, rightIdx) {
    let maxIdx = currentIdx;
    if (leftIdx < this.heap.length && this.heap[leftIdx] > this.heap[maxIdx]) {
      maxIdx = leftIdx;
    }
    if (rightIdx < this.heap.length && this.heap[rightIdx] > this.heap[maxIdx]) {
      maxIdx = rightIdx;
    }
    return maxIdx;
  }
}

function solution(n, works) {
  let answer = 0;

  const maxHeap = new MaxHeap();
  works.forEach(work => maxHeap.insert(work));

  while (n > 0) {
    const maxWork = maxHeap.extractMax();
    if (maxWork > 0) {
      maxHeap.insert(maxWork - 1);
      n--;
    } else {
      break;
    }
  }

  answer = maxHeap.heap.reduce((acc, cur) => acc + cur ** 2, 0);

  return answer;
}
