const max = 999;
const numberObj = {
    number: prompt('Введите число от 0 до 999'),
    units: 0,
    tens: 0,
    hundreds: 0,
};
if (numberObj.number <= 9){
    numberObj.units = numberObj.number;
} else if (numberObj.number <= max){
    numberObj.units = Math.floor(numberObj.number % 10);
    numberObj.tens = Math.floor(numberObj.number / 10 % 10);
    numberObj.hundreds = Math.floor(numberObj.number / 100 % 10);
} else {
    numberObj.number = 0;
    console.log('Вы ввели число, не входящее в диапазон от 0 до 999');
}
console.log(numberObj);