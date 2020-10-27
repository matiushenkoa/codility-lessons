// Task Score: 100%
// Correctness: 100%
// Performance: 100%
// Time complexity: O(N*log(N)) or O(N)

function solution(A) {
    const hash = {};
    let count = 0;
    
    for (let i = 0; i < A.length; i++) {
        if (!hash[A[i]]) {
          hash[A[i]] = true;
          
          count++;
        }
    }
    
    return count;
}