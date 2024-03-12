const memoizedFib = (n, memo={0: 0, 1: 1}) => {
    // ! Base Case is still for n = 0 and n = 1

    // * If memo is defined (in the dictionary) return memo at n
    if (memo[n] !== undefined) {
        return memo[n]
        // * Otherwise we set memo[n] to the recursive value returned.
    } else {
        memo[n] = memoizedFib(n - 1, memo) + memoizedFib(n - 2, memo)
        return memo[n]
    }
}



const fibonacciIterative = (n) => {
    // ! Base Cases (when n = 0 and n = 1)
    if (n <= 1) return n;

    // * Keeping track of the previous, current, and next value in the iteration.
    let prev = 0, current = 1;
    for (let i = 2; i <= n; i++) {
        let next = prev + current; // * Calculating next fib number
        prev = current; // * Updating previous to current
        current = next; // * Updating current to next (newly calculated Fibonacci number)
    }
    return current; // ! Returns the nth Fibonacci number
}