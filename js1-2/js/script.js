    
for (var i = 0; i < 5; i++) {
    var names = [];
    names [ i ] = prompt ('Введите имя ');
}

var user = prompt('Введите имя пользователя', '');
	
if (user.length === 0) {
	alert('Вы не ввели имя пользователя');
	user = prompt('Введите имя пользователя', '');
}

var userNames = 0;

for (i = 1; i < 2; i++) {
    if (user == names[i]) {
        userNames = 1;
        break;
    }   
}

if ( userNames == 1) {
   alert(user + ', вы успешно вошли!');
} else {
    alert('В списке нет пользователя с таким именем');
}
