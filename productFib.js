function myfib(n) {
    var a = 1,
      b = 1;
    for (var i = 3; i <= n; i++) {
      var c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

function myproductFib(prod){
    for(let i = 0; i >= 0; i++){
        if(fib(i) * fib(i+1) === prod){
            return [fib(i), fib(i+1), true];
        }else if(fib(i) * fib(i+1) > prod){
            return [fib(i), fib(i+1), false];
        }
    }
}

function productFib(prod){
    var n = 0;
    var nPlus = 1;  
    while(n*nPlus < prod) {
      nPlus = n + nPlus;
      n = nPlus - n;
    }
    return [n, nPlus, n*nPlus===prod];
  }

console.log(productFib(5895));