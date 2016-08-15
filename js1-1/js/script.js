var a = prompt('Введите число');
var n = prompt('Введите степень');

function pow( a, n ) {
    var x = a;
    if (n > 0) {
        
        for (var i = 1; i <= n; i++) {
            x *= a;
        }
    }
    
    if (n < 0) {
        var n = -n;
        var x = 1/a;
        for (var i = 1; i < n; i++) {
            x *= 1/a; 
        }
    } else {
        x /= a;
    }
    return x;
}
alert ( pow (a,n) );
