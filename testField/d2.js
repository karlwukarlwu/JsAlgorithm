function hash(key){
    let hash = 0;
    for (const keyElement of key) {
        hash+=keyElement.charCodeAt(0)
        console.log(hash)

    }
}
// hash("A")

// arr = Array(3).fill(null)
// let map = arr.map(()=>[]);
// console.log(map)

const arr = [1,2,3]
let a = arr.find((ele)=>{
    return ele===3
})
console.log(a)

let i =0
while (i<6){
    i++
    // console.log(i)
}

console.log()

let b ="2"
// console.log(b.charCodeAt())
function c (){

}
const ce = c()
console.log(ce);

b={c:"dd"}
const a4 = {a:b}
a4.a=null
console.log(b)
console.log(a4)