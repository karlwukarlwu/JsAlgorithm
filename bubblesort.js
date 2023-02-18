const arr = [1, 45, 234, 2, 32, 35, 6, 34, 2344, 564, 576, 345, 566, 234235, 3]

// 由小到大
// let i,j =1;

function fn(a, b) {
    return a > b
}

function bubble(arr, f1) {
    const newArr = [...arr]
    for (let i = 0; i < newArr.length; i++) {

        for (let j = i + 1; j < newArr.length; j++) {
            if (f1(newArr[i], newArr[j])) {
                [newArr[i], newArr[j]] = [newArr[j], newArr[i]]
            }
        }
    }
    return newArr
}

console.log(bubble(arr, fn))