var primer = prompt();
var subset =[]
for(var i = 0; i < primer.length; i++) {
    for(var y = i+1; y < primer.length+1; y++) {
        subset.push(primer.slice(i,y))
    }
}


console.log(subset);