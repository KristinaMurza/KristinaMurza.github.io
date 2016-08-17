for (var i = 0; i < 5; i++) {
    var names = [];
    names [i] = prompt ('Введите имя ');
}

var user = prompt('Введите имя пользователя', '');

var userNames = 0;

for (var i = 1; i < 2; i++) {
    if ( names[i] == user ) {
        userNames = 1;
        break;
    }   
}

if ( userNames ) {
    alert(user + ', вы успешно вошли!');
} else {
    alert('В списке нет пользователя с таким именем');
}   

