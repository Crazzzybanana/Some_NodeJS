function myspinWords(){
    let words = arguments[0].split(' ');
    return words.map(a => a.length < 5 ? a : a.split('').reverse().join('')).join(' ');
}

console.log(myspinWords("This is testing"));