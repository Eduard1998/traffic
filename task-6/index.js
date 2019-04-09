let startBtn = document.querySelector('.start-btn');

let isHorizontalNumbers = false;

let inputNumbersTextarea = document.querySelector('.input-number');
let displayNumbersHorizontalTextarea = document.querySelector('.display-number-sum');
let displayNumbersVerticalTextarea = document.querySelector('.display-number-multiplication');

startBtn.addEventListener('click', arrayFormationHorizontal);
startBtn.addEventListener('click', arrayFormationVertical);
inputNumbersTextarea.value = 
`1,2,3,
4,5,6,
7,8,9`;

function arrayFormationHorizontal() {
    let arrayNumber = inputNumbersTextarea.value.split(`,`);
    let arr = [[],[],[]];
    for(let i = 0; i < arrayNumber.length; i++) {
        if(i <= 2) {
            arr[0].push(+arrayNumber[i]);
        } else if (i <= 5) {
            arr[1].push(+arrayNumber[i]);
        } else {
            arr[2].push(+arrayNumber[i]);
        }
    }
    console.log(arr);
    isHorizontalNumbers = true;
    displayResultNum(arr);
}


function arrayFormationVertical () {
    let arrayNumber = inputNumbersTextarea.value.split(`,`);
    let arr = [[],[],[]];
    for(let i = 0; i < arrayNumber.length; i++) {
        if(i == 0 || i == 3 || i == 6) {
            arr[0].push(+arrayNumber[i]);
        } else if (i == 1 || i == 4 || i == 7) {
            arr[1].push(+arrayNumber[i]);
        } else {
            arr[2].push(+arrayNumber[i]);
        }
    }
    console.log(arr);
    displayResultNum(arr);
}

function numbersSum(array) {
    var arr = array.reduce(function(sum, current) {
        return sum + current;
    }, 0);
    return arr;
}

function numbersMultiplication(array) {
    var arr = array.reduce(function(sum, current) {
        return sum * current;
    }, 1);
    return arr;
}

function displayResultNum(array) {
    if(isHorizontalNumbers) {
        displayNumbersHorizontalTextarea.value = `
        ${numbersSum(array[0])}    ${numbersMultiplication(array[0])}
        ${numbersSum(array[1])}    ${numbersMultiplication(array[1])}
        ${numbersSum(array[2])}    ${numbersMultiplication(array[2])}
        `;
        isHorizontalNumbers = false;
    } else {
        displayNumbersVerticalTextarea.value = `
        ${numbersSum(array[0])}  ${numbersSum(array[1])}  ${numbersSum(array[2])} 
        ${numbersMultiplication(array[0])}  ${numbersMultiplication(array[1])}   ${numbersMultiplication(array[2])}
        `;
    }
}