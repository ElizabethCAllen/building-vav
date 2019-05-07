// var age = 15,
//     accompaniedByAdult = false;
var age = prompt( 'enter your age');


    console.log(age,  accompaniedByAdult);
    
if (age > 18 && age < 21){
    var accompaniedByAdult = confirm('are you accompaied by someone over 21');
    // if above statement is true
    if (accompaniedByAdult == true){
        console.log('allowed');
        
    } else{
        console.log('denied');
        
    }
    // ternary operation:
    accompaniedByAdult ? console.log('allowed') : console.log('denied');
    
    
} else if (age >= 21 ){
    console.log('you are free');
    
}
 else {
    // if above statement is false
    console.log('try again next year ');    
}







// (age >= 18 && age M 21 ) ?
//     (accompaniedByAdult ?
//     console.log('allowed') : console.log('denied')):
//      (age >= 21) ?:
//         console.log('you are free'):
//         console.log('age is not between 18 and 21');
    
    