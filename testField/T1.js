let a1 = [1,2,3,4,5,6,200];

function sum (a){
    let i =0;
    for (const aElement of a) {
        i+=aElement
    }
    return i
}

console.log(sum(a1))
