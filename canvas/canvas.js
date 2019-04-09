// let canvasTeg = document.querySelector('.canvas');
// var contextCanvas = canvasTeg.getContext('2d');

// canvasTeg.addEventListener('click',);
function createMatrix(num) {
    let arr = Array.apply(null, {length: num}).map(Number.call, Number); //https://stackoverflow.com/questions/3746725/create-a-javascript-array-containing-1-n
    let matrix = arr.map((currentNum) => {
            return  Array.apply(null, {length: num}).map((current, index) => {
                if(currentNum > index) {
                    return 0;
                } else {
                    return currentNum + 1;
                }
            });
    });
    console.log(matrix);
}
createMatrix(5);
