var o = '';

for (var i = 0; i < 10; i++) {
    for (var a = 10; a > i; a--) {
        o += ' ';
    }

    for (var b = 0; b < i; b++) {
        o += '*';
    }

    for (var c = 0; c <= i; c++) {
        o += '*';
    }
    
    o += '\n';

}

for (var i = 0; i <= 10; i++) {
    for (var a = 0; a <= i; a++) {
        o += ' ';
    }

    for (var b = 10; b >
        
        i; b--) {
        o += '*';
    }

    for (var c = 10; c > i; c--) {
        o += '*';
    }
   
    o += '\n';

}

console.log (o);
