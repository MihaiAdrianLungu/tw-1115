function logMsg(msg) {
    console.log(msg)
}

// logMsg('Hello World!');

let logMsg2 = (msg) => {
    console.log(msg)
}

// logMsg2('Hello World!');

let logMsg3 = msg => console.log(msg);

// logMsg3('Hello World!');

function logMsg4(msg) {
    // console.log('Hello ' +msg);
    console.log(`Hello ${msg}`)
}

logMsg4('World!')