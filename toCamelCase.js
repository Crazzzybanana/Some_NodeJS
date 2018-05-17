function mytoCamelCase(str){
    let arr = [], buff = [];
    str.indexOf('-') !== -1 ? buff = str.split('-') : buff = str.split('_');
    buff.forEach((element, index) => {
        if(index !== 0){
            arr.push(element.charAt(0).toUpperCase() + element.slice(1));
        }else{
            arr.push(element);
        }
    });
    return arr.join('');
}

function toCamelCase(str){
    var regExp=/[-_]\w/ig;
    return str.replace(regExp,function(match){
        return match.charAt(1).toUpperCase();
     });
}

console.log(toCamelCase("the-Stealth-Warrior"));
console.log(toCamelCase("the_Stealth_Warrior"));