
function f1(a){
    while (a!==2){
        a/=2;
        // if(a<1){
        //     return false
        // }
        if(a%2!==0){
            return false
        //     他这个优化好
        //     直接抓到万一有不是2的倍数的直接return
        }
    }
    return true
}

console.log(f1(6))


console.log(4&(4-1))   //1000 0111  0  👉 0 一个很巧妙的判断是不是2的幂的数字的方法
console.log(6&5)       // 110  101  100👉 4   且  全是1才是1
//还必须得用 这个& 比特与 双与没用

