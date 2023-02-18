const a1 = [1, 2, 3,]
const a2 = ["a", "b", "c", "d"];
const a3 = ["11", "22", "33"]

const f1 = (a, b) => {
    const mp = []
    for (const aElement of a) {
        if (Array.isArray(aElement)) {
            for (const bElement of b) {
                // 如果是数组 在这一步给数组解构
                mp.push([...aElement, bElement])
            }
        }else {
            for (const bElement of b) {
                // 如果不是数组 ...非数组对象会报错
                mp.push([aElement, bElement])
            }
        }
    }
    return mp
}
// 因为每次创造新元素 并保存 因此这个空间复杂度并不是n 而是 n*m
// 时间复杂度 n*m

// console.log(f1(a1,a2))


const f2 = (fx, ...arr) => {
    let temp = arr[0];
    for (let i = 1; i < arr.length; i++) {
        temp = fx(temp, arr[i]);
    }
    return temp
}

console.log(f2(f1, a1, a2, a3))