var users = [];
// user object
var user = {
    name = 'spring heeled jack',
    hp = 50,
};
var users = [];
// user.push(user);
console.log(users);
var userCount = 5;
var user;
user.name = prompt("enter user name:");
user.hp = prompt("enter user hp");
console.log(user);

while (users.length <= userCount) {
    var user = {};
    user.name = prompt("enter user name");
    user.hp = prompt("enter user hp");
    console.log(user);

}
for (var i = 0; i < userCount ; i++ ) {
    var user = {};
    user.name = prompt("enter user name");
    user.hp = prompt("enter user hp");
    console.log(user);
}
   console.log(users);
   
//    output each user to console
