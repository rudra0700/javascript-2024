// merge array with for loop
{
    const mergeArr = (first, second) => {
        for (let i = 0; i < second.length; i++) {
            first.push(second[i]);
        }
        return first;
    }

    const result = mergeArr([1, 2, 3], [4, 5, 6]);
    // console.log(result);

}

// merge array with spread operator
// spread operator does not change the original array
{
    let arr1 = [1, 2, 3]
    let arr2 = [4, 5, 6]
    const result = [...arr1, ...arr2]
    // console.log(result)
    // console.log(arr1)
}

// merge array with concat method
// conacat method does not change the original array

{
    // if you sure that inut value is Array, you should go for spread operator otherwise go for concat method
    let arr1 = [1, 2, 3]
    // let arr2 = [4, 5, 6]   
    let name = "rudra"

    // let result = arr1.concat(arr2)
    // let result = [...arr1, ...name]
    // let result = arr1.concat(name)
    let result = [].concat(arr1, name)
    // console.log(result)
}

// merge array with push method
{
    let arr1 = [1, 2, 3]
    let arr2 = [4, 5, 6]

    let merge = arr1.push(...arr2)
    // console.log(merge)
    // console.log(arr1)
}

{
    const merge = (elem, n) => {
        let result = []
        for (let i = 0; i < elem.length; i++) {
            result.push(elem[i] + n)
        }
        return result
    }
let result = merge([5,6,7], 5)
// console.log(result)

}


{
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];
    
    let merge = arr2.reduce((arr, item) =>{
        arr.push(item);
        return arr;
    },arr1.slice())
console.log(merge)
console.log(arr1)
}

