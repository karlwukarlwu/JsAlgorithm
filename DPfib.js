let arr1 = []


function f1(n, arr) {
    // 我觉得这个动态规划有点取巧 实际上的动态规划应该是把生成的值作为键值对放进去
    // 然后找有没有相同的 他这个用的是数组角标
    let temp
    if (n === 1 || n === 2) {
        return 1;
    }
    // 不过也正常 fib数组的产生方式也正好是从最底层开始实现 因此可以用数组角标替代 key
    if (arr[n]) {
        return arr[n]
    }
    // f1(n - 2, arr) 这一半被省略了 因此这个时间复杂度是O(n)
    temp = f1(n - 1, arr) + f1(n - 2, arr)
    arr[n]=temp;

    return temp


}

console.log(f1(7, arr1))
console.log(arr1)