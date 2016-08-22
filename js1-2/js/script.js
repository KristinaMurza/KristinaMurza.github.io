<<<<<<< HEAD
for (var i = 0; i < 5; i++) {
    var names = [];
    names [i] = prompt ('Введите имя ');
=======
var names = [];    

for (var i = 0; i < 5; i++) {
    names [ i ] = prompt ('Введите имя ');
>>>>>>> aae8b09856bab025b65f6aa81b0da35a590fa17e
}

var user = prompt('Введите имя пользователя', '');

var userNames = 0;

<<<<<<< HEAD
for (var i = 1; i < 2; i++) {
=======
for (var i = 1; i < 5; i++) {
>>>>>>> aae8b09856bab025b65f6aa81b0da35a590fa17e
    if ( names[i] == user ) {
        userNames = 1;
        break;
    }   
}

if ( userNames ) {
<<<<<<< HEAD
    alert(user + ', вы успешно вошли!');
=======
   alert(user + ', вы успешно вошли!');
>>>>>>> aae8b09856bab025b65f6aa81b0da35a590fa17e
} else {
    alert('В списке нет пользователя с таким именем');
}   

