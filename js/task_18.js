// function rotleft (a,d) {
//     var arr = [];

//     for(var i = 1; i <= a; i++) {
//         arr.push(i);
//     }

//     for(var y = 1; y <= d; y++) {
//         arr.shift(arr.push(i));
//     }
//     console.log(arr.toString);
//     return arr.toString;
// rotleft(5,4)





var p = 0;
var arr = [1, 2, 3, 4, 5];
var d = 3;
// console.log(arr);
while(d != 0){
    for(var i = 0; i < 4; i ++){
        p = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = p;
    }
    d --;
}
console.log(arr);






