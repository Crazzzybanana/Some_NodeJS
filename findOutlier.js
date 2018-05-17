let numbers = [-3, -4, -3];

function findOutlier(integers){
    let odd = integers.filter(n=>n%2!==0);
    let even = integers.filter(n=>n%2===0);
    return odd.length === 1 ? odd[0] : even[0];
}

console.log(findOutlier(numbers));