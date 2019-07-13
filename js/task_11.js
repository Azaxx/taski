var m1 = 'fizz';
var m2 = 'buzz';

for(var i = 1; i <= 100; i++) {
    massiv =[i];

if(i % 3 == 0 && i % 5 == 0) {
    console.log(i + m1 + m2);
}
else if (i % 3 == 0) {
    console.log(i + m1);
}
else if (i % 5 == 0) {
    console.log(i + m2);
}
}