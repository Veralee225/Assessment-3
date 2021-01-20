let odds = [ ];
let evens = [ ];

function evens () {
    let i;
    for (i = 0; i <= 100; i++) {
        document.writeln(i + '<br>');
    }
};

function odds () {
    let i;
    for (i = 1; i < 100; i++) {
        document.writeln(i + '<br>');
    }               
};
evens();
setTimeout(odds, 100);
