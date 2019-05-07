// functions defined by a declaration are hoisted to the top

funcDeclaration ();
function funcDeclaration(){
    console.log('I\'m inside a function declaration');
    
}
// functions defined by expressions are not hoisted to the top. They remain where they are defined.
funcExpression();
var funcExpression = function () {
    console.log('I\'m inside of a function declaration');
    
}