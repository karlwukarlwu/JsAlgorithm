const c1 = 3;
const arr1 = [1,2,3]

const x = (arr,num) => {
    const temp = []
    if(num===1){
        return arr.map(e=>[e]) //[[1],[2],[3]]
    }
    const newA = x(arr,num-1)

    for (const arrElement of arr) {
        // 第一轮 11 12 13, 21 22 23, 31 31 33
        // 第二轮第一次 111 112 113, 121 122 123, 131 132 133
        for (const newAElement of newA) {
            temp.push([arrElement].concat(newAElement))
        }
    }
    return temp
}
console.log(x(arr1,c1).length)
// 逻辑是先是 长度1 和 1 的拼接 拼出所有可能 然后再 1和2 的拼接
// 假设一样长 时间复杂度 n^n
