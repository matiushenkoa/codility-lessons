// Task Score: 100%
// Correctness: 100%

function solution(A, K) {
    const rotate = K % A.length;
    
    for (let i = 0; i < rotate; i++) {
      const last = A.pop();
      
      A.unshift(last);
    }
    
    return A;
  }