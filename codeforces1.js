var s1 = readline();
var s2 = parseInt(readline());
var arr = [];

for(var i = 0; i < s2; i++){
    arr.push(readline());
}

function task(){
    if(register(s1) === true && check(s1) === true) return "Yes";
    else return "No";
}

function register(string){
    for(var i = 0; i < arr.length; i++){
        if(s1.length !== arr[i].length) return false;
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i].toLowerCase() === string.toLowerCase()) return false;
    }
    return true;
}

function check(string){
    var word = string.split('');
    var ind = [];
    for(var i = 0; i < arr.length; i++){
        var buff = arr[i].split('');
        for(var j = 0; j < buff.length; j++){
            if(
                buff[j] === 'O' || 
                buff[j] === '0' || 
                buff[j] === '1' || 
                buff[j] === 'l' || 
                buff[j] === 'I' || 
                buff[j] === 'i' || 
                buff[j] === 'L' ||
                buff[j] === 'o'
            ){
                ind.push({index: j, el: buff[j]});
            }
        }
    }

    for(var i = 0; i < ind.length; i++){
        for(var j = 0; j < word.length;){
            if(ind[i].el === 'O' && word[j] === '0' && ind[i].index === j) return false;
            if(ind[i].el === '0' && word[j] === 'O' && ind[i].index === j) return false;
            if(ind[i].el === '1' && word[j] === 'l' && ind[i].index === j) return false;
            if(ind[i].el === 'l' && word[j] === '1' && ind[i].index === j) return false;
            if(ind[i].el === '1' && word[j] === 'I' && ind[i].index === j) return false;
            if(ind[i].el === 'I' && word[j] === '1' && ind[i].index === j) return false;
            if(ind[i].el === '1' && word[j] === 'i' && ind[i].index === j) return false;
            if(ind[i].el === 'i' && word[j] === '1' && ind[i].index === j) return false;
            if(ind[i].el === 'L' && word[j] === '1' && ind[i].index === j) return false;
            if(ind[i].el === '1' && word[j] === 'L' && ind[i].index === j) return false;
            if(ind[i].el === 'o' && word[j] === '0' && ind[i].index === j) return false;
            if(ind[i].el === '0' && word[j] === 'o' && ind[i].index === j) return false;
            j++;
        }
    }
    return true;
}

write(task());