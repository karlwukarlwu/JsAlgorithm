const arr = ["1","2","3","4"]
const a2 = []
//
function c(arr, newA) {
    const c1 = []
    // 临门一脚就差这里 这一个数组的作用是方便把值return  每个栈的c1实际上并不联动
    if (arr.length === 1) {
        return [arr]//[4] [[4]]
    }
    const reC = c(arr.slice(1), newA)//[[3,4]]
    for (const reCElement of reC) { //给每一头加上
        c1.push([arr[0], ...reCElement])
    }
    for (const reCElement of reC) {  //[[]] []reCE //给每个尾加上
        for (let i = 0; i < reCElement.length; i++) {
            c1.push([...reCElement.slice(0, i + 1), arr[0], ...reCElement.slice(i + 1,reCElement.length)])
        }
    }
    return c1
}

console.log(c(arr,a2).length)


let n =0;

function getPermutations(options) {
    const permutations = [];
    // 这个是有必要的
    if(options.length===1){
        return [options]
    }
    const partialPermutations = getPermutations(options.slice(1));
    const firstOption = options[0]

    for (let i = 0; i < partialPermutations.length; i++) {
        const partialPermutation =partialPermutations[i];

        // 他这么插入涉及到插前和插后的问题 因此这里需要<= <是插前 =是插后 slice(0,0)是啥都不包括
        for (let j = 0; j <= partialPermutation.length; j++) {
            const partialPermutationFront = partialPermutation.slice(0,j)
            const partialPermutationEnd = partialPermutation.slice(j)
            permutations.push(partialPermutationFront.concat([firstOption],partialPermutationEnd))
            console.log(++n)
        }
        console.log("  ")
    }
    return permutations
}
// 时间复杂度是 n! 这个推导见网页收藏夹

console.log(getPermutations(arr).length)
