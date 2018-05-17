// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

let string = '2 1';
let firstShop = '99 100';
let secondShop = '98 99';
// let thirdShop = '97 100';

let shops = [];
shops.push(firstShop);
shops.push(secondShop);
// shops.push(thirdShop);

function MatchNumb(s){
    return s.match(/\d+/g).map(Number);
}

function count(){
    if(MatchNumb(string)[0] !== 0){
        if(MatchNumb(string)[0] === 1){
            console.log(MatchNumb(string)[1] / MatchNumb(shops[0])[0]);
            return (MatchNumb(string)[1] / MatchNumb(shops[0])[0]);
        }else{
            let min = MatchNumb(shops[0])[1] / MatchNumb(shops[0])[0];
            let money = MatchNumb(shops[0])[0];
            for(let n = 1; n < MatchNumb(string)[0]; n++){
                if(min > MatchNumb(shops[n])[1] / MatchNumb(shops[n])[0]){
                    min = MatchNumb(shops[n])[1] / MatchNumb(shops[n])[0];
                    money = MatchNumb(shops[n])[0];
                }
            }
            console.log(MatchNumb(string)[1] / money);
            return (MatchNumb(string)[1] / money);
        }
    }
}

count();