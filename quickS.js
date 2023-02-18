const arr = [45, 234, 2, 32, 35, 6,1,1, 1, 34, 2344, 564, 576, 345, 566, 234235, 3]

function qS(arr) {
    const newArr = [...arr]
    const min = [];
    const large = []
    const eq = []
    const key = newArr[0];
    for (let i = 0; i < newArr.length; i++) {
        if (key < newArr[i]) {
            large.push(newArr[i])
        } else if (key === newArr[i]) {
            eq.push(newArr[i])
        } else {
            min.push(newArr[i])
        }
    }
    // 两边没有的时候返回
    if(min.length===0&&large.length===0){
        return eq
    }
    // 我老是忘这里要新建两个数组
    const newM = qS(min);
    const newL = qS(large)
    // 两个子节点遍历完了以后拼接
    return newM.concat(eq,newL)

}

// master theorem 分析时间
// 普通情况
// 数组分两段 b=2
// 每次执行两次 newM newL a=2
// 一个for loop fn = n
// 所以 回归部分 nlogb(a) = nlog2(2)=1 = n
// 普通部分 n
// 根据 两部分相等 时间复杂度 nlog2(2)logn => nlogn

// 最差情况 n2

console.log(qS(arr))