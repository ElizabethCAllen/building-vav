
var user =  {};
var name = prompt('what is your name');
console.log({name});
console.log(!!name);
console.log(isNaN(name));



if (name === '' || name ===' ' || parseInt(name)){
    alert('enter valid name');
} else {
    user.name = name;
}

if (name && isNaN(name)){
    user.name = name;
    var hp = prompt('enter your hp');
        console.log(hp);
        console.log(!isNaN(parseInt(hp)));
        console.log(IsNan(parInt(hp)));
        
    // if (hp < 9000){
    //     alert('IT'S OVER 9000!);
    // }    
        
    if(hp && !isNaN(parseInt(hp))){

    }else {
        alert('enter a valid hp number');
    }

}else {
    alert('enter a valid name');
}

// ternary
(name === '' || name ===' ' || parseInt(name)) ?
    alert('enter valid name'):
    user.name = name;

