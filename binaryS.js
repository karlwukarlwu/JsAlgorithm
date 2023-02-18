arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


// 我用的递归
// 递归时间复杂度 也是 log2n
function f1(arr,n) {
    // fn(n) 这里是1 因为没有loop
    let mid = Math.floor(arr.length/2);
    if(arr[mid]===n){
        return mid
    }
    if (arr.length===1){
        return false
    }
    if(arr[mid]>n) {
        return f1(arr.slice(0, mid), n)
    }
    if(arr[mid<n]){
        // a 是 subproblem 处理的次数 这里是1 因为return 只调用一次fn
        // b 是subproblem 被相对分割的大小 这里是2 长度被/2 了 因此是2
        return f1(arr.slice(mid+1,arr.length),n)
    }
}
// a = 1
// b =2
// recursion part: O(n^logb a )=>O(n^log2 1)=>O(n^0)=O(1)
// non-recursion part: O(1)
// 两边相等 因此用中间的公式 O(nlog b a log n)
// 因此是log n



// console.log(f1(arr,1))

//不用递归

function f2(arr,n) {
    let beg= 0 ;
    let end = arr.length-1;
    while (true){
        // 不用递归记得把这个放进去
        let mid = Math.floor((beg+end)/2)
        if(arr[mid]===n){
            return mid;
        }
        if(arr.length===1){
            return false
        }
        if(arr[mid]>n){
            end=mid-1;
        }
        if(arr[mid]<n){
            beg=mid+1;
        }
    }
}

console.log(f2(arr,2))
console.log(f2(arr,15))