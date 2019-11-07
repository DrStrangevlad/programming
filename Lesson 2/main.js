//var a = 1, b = 1, c, d;
//c = ++a; alert(c); *++ перед переменной - к переменной прибавляется единица*
//d = b++; alert(d); *++ после переменной к переменной прибавляется единица, но выводится предыдущее значение*
//c = (2+ ++a); alert(c); *после прибавления к переменной а в первом случае, она стала равняться 2, соответсвенно после прибавления единицы к переменной она равняется трём, а общее значение - 5*
//d = (2+ b++); alert(d); *по аналогии с предыдущим, но в данном случае выводим предыдущее значение - 2, следовательно ответ - 4*/
//alert(a); *два раза прибавляли единицу к переменной*
//alert(b); *два раза прибавляли единицу к переменной*

//var a = 2;
//var x = 1 + (a *= 2); * x = 5 *= это сокращенный оператор, полностью он будет выглядеть x = 1 + (a = a * 2 )*

const a = 10;
const b = -10;
function compare_numbers() {
    if (a >= 0 && b >= 0)
        alert (a - b);
    else if (a < 0 && b < 0)
        alert (a * b);
    else
        alert (a + b);
}
compare_numbers();

const x = 6;
const y = 2;

function plus() {
    return x + y;
}

function minus() {
    return x - y;
}

function div () {
    return x / y;
}

function mult () {
    return x + y;
}

function mathOperation(arg1, arg2, operation){
    switch(operation){
        case '+':
            return arg1 + arg2;
        case '-':
            return arg1 - arg2;
        case ':':
            return arg1 / arg2;
        case '*':
            return arg1 * arg2;
    }
}