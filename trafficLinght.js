let redLightDiv = document.querySelector('#red-center-lamp');
let yellowLightDiv = document.querySelector('#yellow-center-lamp');
let greenLightDiv = document.querySelector('#green-center-lamp');

let redSidLeftLightDiv = document.querySelector('#red-side-left');
let yellowSidLeftLightDiv = document.querySelector('#yellow-side-left');
let greenSidLeftLightDiv = document.querySelector('#green-side-left');

let redSidRightLightDiv = document.querySelector('#red-side-right');
let yellowSidRightLightDiv = document.querySelector('#yellow-side-right');
let greenSidRightLightDiv = document.querySelector('#green-side-right');

let isLastValidColorlight = true;
let isStopTraffic = true;
let isValidatorInput = {
    is_input_red: true,
    is_input_yellow: true,
    is_input_green: true
};

let trafficLightSelect = document.querySelector('#select-traffic-light');
let trafficLightWrapper = document.querySelector(".wrapper");

let redLightInput = document.querySelector('#input_red');
let yellowLightInput = document.querySelector('#input_yellow');
let greenLightInput = document.querySelector('#input_green');

let startLightBtn = document.querySelector('#start-traffic-light');
let stopLightBtn = document.querySelector('#stop-traffic-light');

stopTrafficLight();

redLightInput.value = 1;
yellowLightInput.value = 1;
greenLightInput.value = 1;

stopLightBtn.disabled = true;

stopLightBtn.addEventListener('click', stopBtnOnClick);
startLightBtn.addEventListener('click', startBtnOnClick);

redLightInput.addEventListener('change', onChangeInput);
yellowLightInput.addEventListener('change', onChangeInput);
greenLightInput.addEventListener('change', onChangeInput);

trafficLightSelect.addEventListener('change', setTrafficLightBackgroundImage);

function setTrafficLightBackgroundImage() { 
    const value = trafficLightSelect.value;
    if(value == 'TrafficLight1') {
        trafficLightWrapper.classList.remove('wrapper-two', 'wrapper-three');
        trafficLightWrapper.classList.add('wrapper-one');
    } else if (value == 'TrafficLight2') {
        trafficLightWrapper.classList.remove('wrapper-one', 'wrapper-three');
        trafficLightWrapper.classList.add('wrapper-two');
    } else {
        trafficLightWrapper.classList.remove('wrapper-one', 'wrapper-two');
        trafficLightWrapper.classList.add('wrapper-three');
    }
}

function onChangeInput(event) {
    const {id, value} = event.target;
     if (!(value <= 0)) {
        isValidatorInput[`is_${id}`] = true;
    } else {
        isValidatorInput[`is_${id}`] = false;
    }
    startButtonDisabled();
}

function startButtonDisabled() {  
    startLightBtn.disabled = !(isValidatorInput.is_input_red && isValidatorInput.is_input_yellow && isValidatorInput.is_input_green);
}

function startBtnOnClick() {
    startLightBtn.disabled = true;
    stopBtnOnClick();
    setTimeout(() => {
        isStopTraffic = false;
        stopLightBtn.disabled = false;
        startTrafficLight(redLightInput.value, yellowLightInput.value, greenLightInput.value);
        startLightBtn.disabled = false;
    }, 1000);
}

function stopBtnOnClick() {
    stopLightBtn.disabled = true;
    isStopTraffic = true;
    stopTrafficLight();
}

function stopTrafficLight() {
    redLightDiv.style.backgroundColor = 'black';
    greenLightDiv.style.backgroundColor = 'black';
    yellowLightDiv.style.backgroundColor = 'black';

    redSidRightLightDiv.style.backgroundColor = 'black';
    yellowSidRightLightDiv.style.backgroundColor = 'black';
    greenSidRightLightDiv.style.backgroundColor = 'black';

    redSidLeftLightDiv.style.backgroundColor = 'black';
    yellowSidLeftLightDiv.style.backgroundColor = 'black';
    greenSidLeftLightDiv.style.backgroundColor = 'black';
}

function startTrafficLight(redTime, yellowTime, greenTime) {
    if(isStopTraffic) {
        return;
    }else if(redLightDiv.style.backgroundColor == 'red') {
        yellowColor(redTime, yellowTime, greenTime);
    } else if (greenLightDiv.style.backgroundColor == 'green') {
        yellowColor(redTime, yellowTime, greenTime);
    } else if (yellowLightDiv.style.backgroundColor == 'yellow' && !isLastValidColorlight) {
        greenColor(redTime, yellowTime, greenTime);
    } else {
        redColor(redTime, yellowTime, greenTime);
    }
}

function redColor (redTime, yellowTime, greenTime) {
    redSidRightLightDiv.style.backgroundColor = 'black';
    yellowSidRightLightDiv.style.backgroundColor = 'black';
    greenSidRightLightDiv.style.backgroundColor = 'green';

    redSidLeftLightDiv.style.backgroundColor = 'black';
    yellowSidLeftLightDiv.style.backgroundColor = 'black';
    greenSidLeftLightDiv.style.backgroundColor = 'green';

    redLightDiv.style.backgroundColor = 'red';
    greenLightDiv.style.backgroundColor = 'black';
    yellowLightDiv.style.backgroundColor = 'black';
    if(!isStopTraffic) {
        setTimeout(() => {
            startTrafficLight(redTime, yellowTime, greenTime);
        }, redTime * 1000);
    }
}
function yellowColor(redTime, yellowTime, greenTime) {
    isLastValidColorlight = (greenLightDiv.style.backgroundColor == 'green');

    redSidRightLightDiv.style.backgroundColor = 'black';
    yellowSidRightLightDiv.style.backgroundColor = 'yellow';
    greenSidRightLightDiv.style.backgroundColor = 'black';

    redSidLeftLightDiv.style.backgroundColor = 'black';
    yellowSidLeftLightDiv.style.backgroundColor = 'yellow';
    greenSidLeftLightDiv.style.backgroundColor = 'black';

    redLightDiv.style.backgroundColor = 'black';
    greenLightDiv.style.backgroundColor = 'black';
    yellowLightDiv.style.backgroundColor = 'yellow';

    if(!isStopTraffic) {
        setTimeout(function yellowColor() {
            startTrafficLight(redTime, yellowTime, greenTime);
        }, yellowTime * 1000);
    }
}
function greenColor(redTime, yellowTime, greenTime) {
    redSidRightLightDiv.style.backgroundColor = 'red';
    yellowSidRightLightDiv.style.backgroundColor = 'black';
    greenSidRightLightDiv.style.backgroundColor = 'black';

    redSidLeftLightDiv.style.backgroundColor = 'red';
    yellowSidLeftLightDiv.style.backgroundColor = 'black';
    greenSidLeftLightDiv.style.backgroundColor = 'black';

    redLightDiv.style.backgroundColor = 'black';
    greenLightDiv.style.backgroundColor = 'green';
    yellowLightDiv.style.backgroundColor = 'black';

    if(!isStopTraffic) {
        setTimeout(() => {
            startTrafficLight(redTime, yellowTime, greenTime);
        }, greenTime * 1000);
    }  
}