function findChar(str, char) {
    let counter = 0;

    for(let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            counter++;
        }
    }

    return counter;
}

console.log(findChar('casa', 'a'))