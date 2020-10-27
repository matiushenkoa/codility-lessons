// Task Score: 100%
// Correctness: 100%
// Performance: 100%
// Time complexity: O(N) or O(N*log(N))

function solution(A) {
    const hash = {};
    
    for (let i = 0; i < A.length; i++) {
        hash[A[i]] = A[i];
    }
    
    for (let i = 1; i <= 1000000; i++) {
        if(!hash[i]) {
            return i;
        }
    }
}