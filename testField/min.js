let min = [12212,23452,3,43543,23,12,312,435,4353,23]

function f1(a) {
    let c = a[0]
    for (let i = 1; i < a.length; i++) {
        if(c>a[i]){
            c=a[i]
        }
    }
    return c
};
// O(n)
// console.log(f1(min))


function f2(a) {
    if((a%2)===0){
        return "even"
    }else {
        return "odd"
    }
}
// O(1)

// console.log(f2(23))


let a = "d"
const strings = a.split(",");
console.log(strings.length)
