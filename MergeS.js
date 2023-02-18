const arr = [45, 234, 2, 32, 35, 6,1,1, 1, 34, 2344, 564, 576, 345, 566, 234235, 3]


// 分到长度是1 的时候是return 的时候
function mS(arr) {
    const newA = [...arr]
    if(newA.length===1){
        return newA;
    }
    // 他在这里加了一个如果是2的情况 我觉得无所谓加不加 我没有加 我只是全部唯一再来
    let mid = Math.floor(newA.length/2)
    const frontA = newA.slice(0,mid)
    const newFa = mS(frontA)
    const endA = newA.slice(mid,newA.length)
    const newEa = mS(endA)
    const newSa = []
    let p1=0;
    let p2 =0;
    while (true){
        if(newFa[p1]<=newEa[p2]){
            newSa.push(newFa[p1])
            p1++;
        }
        if(p1===newFa.length){
            // 我操你妈我排错排半天是因为这个方法不改原值 而是返回一个新array
            // newSa.concat(newEa.slice(p2))
            // break;
            return newSa.concat(newEa.slice(p2))

        }
        if(newFa[p1]>newEa[p2]){
            newSa.push(newEa[p2])
            p2++;
        }
        if(p2===newEa.length){
            return newSa.concat(newFa.slice(p1))

        }
    }

}
// a=2 b=2 nlogba nlog22 = n
// non-re =  n
// 两边相等 nlogbalogn = nlogn
// 相比快排更加稳定 因为每次稳定在nlogn 这里 即使是最坏情况

console.log(mS(arr))