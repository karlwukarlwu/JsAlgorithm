function fib(a){
    const arr = [1,1];
    for (let i = 2; i < a+1; i++) {
        arr.push(arr[i-1]+arr[i-2])
    }
    return arr
}
// 👆 不用递归的斐波那契数列解法
// console.log(fib(50))
// O(n)




function f(a) {
    if (a===1){
        return 1;
    }
    if(a===2){
        return 1;
    }
    return f(a-1)+f(a-2)
//     在f(a-1)中 这个函数是完全运行完才开始执行的f(a-2)
//     虽然在同一条语句中
//     因此当 f(a-1)完全运行完了以后 实际上已经产生过一次f(a-2)的结果了
//     所以我们只需要储存下来f(a-1)中f(a-2）的结果即可

}

// console.log(f(8))

function f1(a) {
    let c=0
    for (let i = 0; i < a; i++) {
        c++
    }
    console.log(c)
}
f1(1111111111)


