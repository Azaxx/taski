// var car = {
//     brand: "bmw",
//     model: "x7",
//     complectation: [{salon:['wood','leather']}
//     ]
// }
// console.log(car.complectation[0].salon[0]);


var obj = {
    name: 'azis',
    lastname: 'azaxxx',
    age: '19',
    union: function() {
        console.log(`${this.name} ${this.lastname}`)
        console.log(this.name + '  ' + this.lastname)
           
    }
}  
obj.union();