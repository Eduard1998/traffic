// fizzBuzz(undefined, 15);
// fizzBuzzTwoRemainder(18);

function isFizzBuzz(num) {
    if((num % 3) == 0 && (num % 5) == 0) {
        return 'FizzBuzz';
    } else if ((num % 3) == 0) {
        return 'Fizz';
    } else if ((num % 5) == 0) {
        return 'Buzz';
    } else {
        return num;
    }
}

function fizzBuzz(from = 0, to) {
    let i = from;
    if (i <= to) {
        setTimeout(function() {
            console.log(isFizzBuzz(i));
            i++;
            fizzBuzz(i, to);
        }, 10);
    }
}

function fizzBuzzInterval(num) {
    var i = 1;
    var timerId = setInterval(function() {
        console.log(isFizzBuzz(i));
        if (i == num) {
            clearInterval(timerId);
        }
      i++;
    }, 1000);
}

function fizzBuzzTwo (num) {
    for(let i = 0; i <= num; i++) {
        setTimeout(function () {   
            const three = i/3;
            const five = i/5;
            if (!(Math.ceil(five) - five > 0) && !(Math.ceil(three) - three > 0)) {
               console.log('FizzBuzz');
            } else if (!(Math.ceil(five) - five > 0) && i !== 0) {
                console.log('Buzz');
            } else if (!(Math.ceil(three) - three > 0) && i !== 0) {
                console.log('Fizz'); 
            } else {
                console.log(i);
            }
        }, 1000 * i);
    }
}

function fizzBuzzTwoRemainder (num) {
    for(let i = 0; i <= num; i++) {
        setTimeout(function () {   
            if((i % 3) == 0 && (i % 5) == 0) {
                console.log('FizzBuzz');
            } else if ((i % 3) == 0) {
                console.log('Fizz');
            } else if ((i % 5) == 0) {
                console.log('Buzz');
            } else {
                console.log(i);
            }
        }, 1000 * i);
    }
}