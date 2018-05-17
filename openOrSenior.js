let array = [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]];

function myopenOrSenior(data){
    let filtered= [];
    data.forEach(element => {
        (element[0] >= 55) && (element[1] > 7) ? filtered.push('Senior') : filtered.push('Open');
    });
    return filtered;
}

function openOrSenior(data){
    function determineMembership(member){
      return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
    }
    return data.map(determineMembership);
  }

console.log(openOrSenior(array));