var fruits = ['apple', 'bannana', 'orange', 'kiwi', 'pineapple', 'strawberry'];
console.log(fruits);

// for loops
for (var i = 0; i < 4; i++) 
    console.log(i);
    console.log(fruits[i]);
    
  
// do while 
var index = 0;
// do{
//     console.log(fruits[index]);
//     index++;
// } while ( i < fruits.length);

// // while
// while (index <fruits.length){
//     console.log(fruitd[index]);
//     index++;
// }
// while (hour > 18 && hour < 21){

// }
// && stands for and
// || stands for or

// for in
fruits.foo = 'test';
for (var i in fruits){
    console.log(i);
    
}
for (var i of fruits){
    console.log(i);
    
}
