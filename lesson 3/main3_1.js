let arr = [];
let end = 1;
while (end < 100){
    end++;
    arr.push(end);
}

let a = 2;
let b = 2;
while (a <= 100){
    a += b;
    arr.splice(arr.indexOf(a), 1);
}

a = 4;
b = 3;
while (a < 100){
    if (a % b ===0 && arr.indexOf(a) !== -1){
        arr.splice(arr.indexOf(a), 1);
    }else {
        a++;
    }
}

a = 6;
b = 5;
while (a < 100) {
    if (a % b === 0 && arr.indexOf(a) !== -1) {
        arr.splice(arr.indexOf(a), 1);
    } else {
        a++;
    }
}

a = 8;
b = 7;
while (a < 100) {
    if (a % b === 0 && arr.indexOf(a) !== -1) {
        arr.splice(arr.indexOf(a), 1);
    } else {
        a++;
    }
}

console.log(arr);