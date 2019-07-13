 
var array1 = [1,0,2,3,4,5,6];
var array2 = [3,5,6,7,8,13];
var result = [];
var bigger;

if(array1 > array2){
    bigger = array1;
}
if(array2 > array1){
    bigger = array2;
}
 for(var i = 0; i < bigger.length; i++){
    if (isNaN(array1[i])){
        array1[i] = 0;
    }
    if (isNaN(array2[i])){
        array2[i] = 0;
    }
     else {
        result.push(array1[i] + array2[i]);
    }

 }
 console.log(result)