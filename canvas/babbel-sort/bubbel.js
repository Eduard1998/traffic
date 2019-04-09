let Arr = [1,2,3,2,34,5,7,5,4,8,7,9,10,5,9]; 
let arr1 = new Array(10).fill(0).map((_, i) => i);

function bubble(arr) {
    let sorted = false;
    let array = arr.filter(() => true);

    while (!sorted) {
      sorted = true;
        for(let i = 0; i < array.length; i++) {
            if (array[i] > array[i+1]) {
                [array[i], array[i+1]] = [array[i+1], array[i]];
                sorted = false;
            }
        }
    }

    return array;
}

console.log(bubble(Arr));
console.log(Arr);