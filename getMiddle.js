let s1 = 'testing';
let s2 = 'middle';

function mygetMiddle(s)
{
    let str = s.length/2;
    return ((str) % 1 === 0) ? (s.slice(Math.floor(str)-1, Math.ceil(str)+1)) : s.slice(str, str+1);
}

function getMiddle(s)
{
  return s.substring(Math.ceil(s.length/2)-1, Math.floor(s.length/2)+1)
}

console.log(getMiddle(s1));
console.log(getMiddle(s2));