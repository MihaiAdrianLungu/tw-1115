function concatArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return [];
    }

    let newArr = [];

    for(let i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i]);
        newArr.push(arr2[i]);
    }

    return newArr;
}

console.log(concatArrays([1,3,5], [2,4,6]))