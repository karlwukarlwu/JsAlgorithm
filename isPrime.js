// 找质数

let c
function isP(a) {
    for (let i = 2; i < Math.sqrt(a)+1; i++) {
        if ((a%i)===0){
            c=i
            return false
        }
    }
    return true;
}

console.log(isP(73))