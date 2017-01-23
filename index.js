function sum(a) {
    return function (b) {
        return a + b;
    }
}

alert(add(2)(3));