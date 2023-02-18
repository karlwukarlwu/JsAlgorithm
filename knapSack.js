// 这里我卡在了视频的82 看完数据结构再回来看这个算法 这玩意是力扣的medium难度。。。
// 唉
const knapsack = (items,  cap, itemIndex) => {


    if(itemIndex<0||cap===0){
        return {items:[],value: 0,weight: 0}
    }

    // 我一进来 先看你这个能不能放进去 放不进去我直接从你下一个开始
    if (cap < items[itemIndex].weight) {
        //  ind -1 是因为他最下面调用的参数是maxLength-1
        //  所以起始值是从最大长度角标开始
        // 假设 最后一个不合格 就测倒数第二个合不合格
        return knapsack(items, cap, itemIndex - 1);
    }
    // 如果合格 则可以放入 但是放入不代表最优解
    const sakeWithItem = knapsack(
        items,
        cap - items[itemIndex].weight,
        itemIndex - 1);
    const sackWithoutItem = knapsack(
        items,
        cap,
        itemIndex - 1)
    // 实际上这里就是生成了斐波那契数列的那种二叉树 只不过下面有进行判断的返回条件

    // 这里拿到sakeWithItem.value的值是上一轮返回的值
    // 如果说在最后可以放的情况下 swi swoi 实际上都是返回的值 在倒数第二层进行第一次比较 因为倒数第一层直接return
    const valueWithItem = sakeWithItem.value+items[itemIndex].value
    const valueWithoutItem = sackWithoutItem.value
    if(valueWithItem>valueWithoutItem) {
        const updatedSack = {
            items: sakeWithItem.items.concat(items[itemIndex]),
            value: sakeWithItem.value + items[itemIndex].value,
            weight: sakeWithItem.weight + items[itemIndex].weight
        };
        // 拿得到且放入
        return updatedSack;
    }else {
        // 拿到但是不放入
        return sackWithoutItem;
    }

}

const ite = [
    {name:'a',value:3,weight:3},
    {name:'b',value:6,weight:8},
    {name:'c',value:10,weight:3}
]

const maxCap = 8

console.log(knapsack(ite,maxCap,ite.length-1))