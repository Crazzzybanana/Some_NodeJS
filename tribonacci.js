function mytribonacci(signature,n){
    let a = signature[0], b = signature[1], c = signature[2];
    if(n===0) return [];
    if(n===1) return [signature[0]];
    if(n===2) return [signature[0],signature[1]];
    if(n>2){
        for(let i = 3; i < n; i++){
            let d = a+b+c;
            a = b;
            b = c;
            c = d;
            signature.push(c);
        }
        return signature;
    }
}

function tribonacci(signature,n){  
    for (var i = 0; i < n-3; i++) {
      signature.push(signature[i] + signature[i+1] + signature[i+2]);
    }
    return signature.slice(0, n);
}

console.log(tribonacci([1,1,1], 10));