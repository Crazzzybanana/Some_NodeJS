// let nameList = [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ];
// let nameList = [ {name: 'Bart'}, {name: 'Lisa'} ];
// let nameList = [ {name: 'Bart'} ];
let nameList = [ ];


function mylist(names){
    let answear = '';
    if(names.length === 0){return '';}
    if(names.length === 1){return names[0].name;}
    if(names.length === 2){return (names[0].name + ' & ' + names[1].name);}
    if(names.length > 2){
        for(let i = 0; i < names.length; i++){
            if(names.length === i+1){
                answear += names[i].name;
            }else if(names.length - 1 === i+1){
                answear += names[i].name;
                answear += ' & ';
            }else{
                answear += names[i].name;
                answear += ', ';
            }
        }
        return answear;
    }
}

function list(names) {
    let xs = names.map(p => p.name);
    let x = xs.pop();
    return xs.length ? xs.join(', ') + ' & ' + x : x || '';
}

console.log(list(nameList));