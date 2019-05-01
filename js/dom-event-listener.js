// var btn= document.getElementsByClassName('button');
// var btnUsingSelector = document.querySelector('.button');

// btn[0].style.padding = '10px';
// btn[0].style.fontSize = '22px';

// btnUsingSelector.addEventListener('click', function(){
//     console.log("BUTTON WAS CLICKED");
    
// });
// btnUsingSelector.addEventListener('mouseover', function(event){
//     console.log(event);
//     console.log(typeof event.target);

//     var btnText = event.target.innerHTML;
//     alert('mouse over on the '+ btnText + ' button');
// });
// // bleep
// var canBtn= document.getElementsByClassName('cancelBtn');
// var canBtnUsingSelector = document.querySelector('.cancelBtn');

// canBtn[0].style.padding = '10px';
// canBtn[0].style.fontSize = '22px';

// canBtnUsingSelector.addEventListener('click', function(){
//     console.log("BUTTON WAS CLICKED");
    
// });
// canBtnUsingSelector.addEventListener('mouseover', function(event){
//     console.log(event);
//     console.log(typeof event.target);

//     var canBtnText = event.target.innerHTML;
//     alert('are you you want to '+ canBtnText + ' your text?');
// });
document.addEventListener('keypress', function (event) {
    console.log(event.key);
    console.log(event.keycode);
});
document.addEventListener('keydown', function (event) {
    console.log(event.key);
    console.log(event.keycode);
});
document.addEventListener('keyup', function (event) {
    console.log(event.key);
    console.log(event.keycode);
});

