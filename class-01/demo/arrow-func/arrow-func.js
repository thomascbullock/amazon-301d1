function logger(input) {
    return console.log(input);
}

let logger1 = input => console.log('logger 1:', input);
let logger2 = (input) => console.log('logger 2:', input);

function adder(a, b, c) {
    return console.log('adder:', a + b + c);
}

let adder1 = (a, b, c) => console.log('adder1:', a + b + c);

let adder2 = (a, b, c) => {
    return console.log('adder2:', a + b + c);
}