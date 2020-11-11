// Task Score: 100%
// Correctness: 100%

function solution(N) {
  const binary = [...N.toString(2)];
  const length = binary.length;
  const indexes = [];
  let maxGap = 0;
  
  for (let i = 0; i < length; i++) {
    if (binary[i] === '1') {
      indexes.push(i);
    }
  }
  
  for (let j = indexes.length; j > 0; j--) {
    const gap = indexes[j] - indexes[j - 1] - 1;
    
    if (gap > maxGap) {
      maxGap = gap;
    }
  }
  
  return maxGap;
}