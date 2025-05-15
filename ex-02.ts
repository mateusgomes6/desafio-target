function fibonacci (num: number): boolean {
    if (num < 0) return false;

    let a = 0;
    let b = 1;

    while (a <= num) {
        if (a === num) return true;
        const next = a + b;
        a = b;
        b = next;
    }
    return false;
}

console.log(fibonacci(21));