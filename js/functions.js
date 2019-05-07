function formattedName(firstName, lastName){
    var userFirstName = 'Liz';
    var userLastName = 'Allen';
    // console.log(firstName);
    // console.log(lastName);
    // console.log(lastName + '' + firstName);
    return lastName + '' + firstName;
    console.log(localStorage.getItem('userFullName'));
    if(!localStorage.getItem('userFullName') ){
         localStorage.setItem('userFullName', formattedName) ;
    }
    return formattedName;
}
var userFirstName = 'Liz';
var userLastName = 'Allen';

// formatName(userFirstName, userLastName);

// function expression
var creatUserObj = function(firstName, lastName) {
    var userObj = {
        name: formattedName(firstName, lastName)
        // age  : null 
    };
    return userObj;
} (userFirstName, userLastName);
// console.log(createUserObj);


// constructor way
// car concatinate = new function('x', 'y', 'return x + y' );
// console.log( concatinate ('liz', 'allen'));

