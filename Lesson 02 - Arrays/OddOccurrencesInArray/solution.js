// Task Score: 100%
// Correctness: 100%
// Performance: 100%
// Time complexity: O(N) or O(N*log(N))

function solution(A) {
    const hash = {};
    
    for (let i = 0; i < A.length; i++) {
        if (!hash[A[i]]) {
          hash[A[i]] = true
        } else {
          delete hash[A[i]]
        }
    }

  return Number(Object.keys(hash)[0]);
}