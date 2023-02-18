const n1 = (n) => {
    console.log(n)

    if (n === 1) {
        return 1
    }
    let i = n;
    let nf = n1(n - 1);
    let ns = n1(n - 1);
    return n + nf + ns

}

console.log(n1(5));

