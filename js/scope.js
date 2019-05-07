// global scope
var globalVar = 'hello world';

function sayHello(){
    console.log(globalVar);
    var functVar = 'I am scoped inside a function';
    console.log(functVar);
}
sayHello();
console.log(globalVar);


function secondFunction(){
    console.log(functVar);
    
}

// nested scope
function outerFunction(){
    const outer= 'I\'m defined in outerFunction';
    console.log(outer);
    function innerFunction(){
        const innerFunction = 'I\'m defined inside innerFunction';
        console.log(inner);
        
    }    
    innerFunction();
    console.log(inner);
    
}
outerFunction();