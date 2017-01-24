function sum(a) {
    return function (b) {
        return a + b;
    }
}

function fullName(first, second) {
    return "Hello " + first + " " + second;
}

alert(add(2)(3));