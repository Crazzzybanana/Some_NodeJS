function myfindUniq(arr) {
    let array = [];
    let a = 0;
    for(let i = 0; i < arr.length; i++){
        !array.includes(arr[i]) ? array.push(arr[i]) : a = arr[i];
    }
    array.splice(array.indexOf(a), 1);
    return array[0];
}

function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
}

// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 0, 0, 0, 2, 0, 0 ]));