var maxSequence = function(arr){
    let max = arr[0], min = arr[0], maxIndex = 0, minIndex = 0, sum = 0;
    arr.forEach((element, index) => {
        if(element > max){
            max = element;
            maxIndex = index;
        }
        if(element < min){
            min = element;
            minIndex = index;
        }
    });
    if(maxIndex > minIndex){
        for(let i = minIndex; i < maxIndex; i++){
            sum += arr[i];
        }
    }else{
        for(let i = maxIndex; i < minIndex; i++){
            sum += arr[i];
        }
    }
    return sum;
}

console.log(maxSequence([]));