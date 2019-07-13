var numbers = [1,2,3,4];
var i;
var summa = 0;
// var result =[];
for(var i= 0; i  <= numbers.length-1; i++){
     summa = numbers[i]*numbers[i]+summa;
}

console.log(summa)