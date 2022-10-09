// Add monitor Selector
const monitor = document.querySelector('.panel');

// Add Button Selector
const MRBtn = document.querySelector('.MR-btn');
const MAddBtn = document.querySelector('.M-add-btn');
const MSubBtn = document.querySelector('.M-sub-btn');
const MClearBtn = document.querySelector('.M-clear-btn');
const clearBtn = document.querySelector('.Clear-btn');

const addBtn = document.querySelector('.add-btn');
const subBtn = document.querySelector('.sub-btn');
const divBtn = document.querySelector('.div-btn');
const mulBtn = document.querySelector('.mul-btn');

const minusBtn = document.querySelector('.minus-btn');
const squareRootBtn = document.querySelector('.square-root-btn');
const percentBtn = document.querySelector('.percent-btn');
const thousandBtn = document.querySelector('.thousand-btn');
const dotBtn = document.querySelector('.dot-btn');
const resultBtn = document.querySelector('.result-btn');

const number1 = document.querySelector('.number-1-btn');
const number2 = document.querySelector('.number-2-btn');
const number3 = document.querySelector('.number-3-btn');
const number4 = document.querySelector('.number-4-btn');
const number5 = document.querySelector('.number-5-btn');
const number6 = document.querySelector('.number-6-btn');
const number7 = document.querySelector('.number-7-btn');
const number8 = document.querySelector('.number-8-btn');
const number9 = document.querySelector('.number-9-btn');
const number0 = document.querySelector('.number-0-btn');

//Memory
var oldNumber = 0;      //For simple calculations (Add - Sub - Mul - Div)
var newNumber = 0;
var simple = '';
var memory = 0;         //For Memory calculations (MR - M+ - M- MC)
var result = 0;         //For Monitor
var stringText = '';
var checkNumber = true;
var error = false;

// Add number Action
number0.onclick = function () {
    addNumberOnMonitor(0);
}

number1.onclick = function () {
    addNumberOnMonitor(1);
}

number2.onclick = function () {
    addNumberOnMonitor(2);
}

number3.onclick = function () {
    addNumberOnMonitor(3);
}

number4.onclick = function () {
    addNumberOnMonitor(4);
}

number5.onclick = function () {
    addNumberOnMonitor(5);
}

number6.onclick = function () {
    addNumberOnMonitor(6);
}

number7.onclick = function () {
    addNumberOnMonitor(7);
}

number8.onclick = function () {
    addNumberOnMonitor(8);
}

number9.onclick = function () {
    addNumberOnMonitor(9);
}

//Add Dot Action
dotBtn.onclick = function() {
    checkDot();
}

//Add simple Caculation Action (Add - Sub - Mul - Div - Result)
addBtn.onclick = function () {
    SimpleCaculation();
    simple = 'add';
}

subBtn.onclick = function () {
    SimpleCaculation();
    simple = 'sub';
}

divBtn.onclick = function () {
    SimpleCaculation();
    simple = 'div';
}

mulBtn.onclick = function () {
    SimpleCaculation();
    simple = 'mul';
}

resultBtn.onclick = function () {
    SimpleCaculation();
    simple = 'result';
}

// Multi Caculation Action
percentBtn.onclick = function () {
    multiCaculation('percent');
}

minusBtn.onclick = function () {
    multiCaculation('minus');
}

squareRootBtn.onclick = function () {
    multiCaculation('square-root');
}

thousandBtn.onclick = function () {
    multiCaculation('thousand');
}


//Add Memory Action
MRBtn.onclick = function () {
    monitorResult(memory);
    checkNumber = false;
}

MAddBtn.onclick = function () {
    memoryCaculator('mAdd');
}

MSubBtn.onclick = function () {
    memoryCaculator('mSub');
}

MClearBtn.onclick = function () {
    memoryCaculator('mClear');
}

//Add Clear Action
clearBtn.onclick = function () {
    resetMenory();
    error = false;
    monitorResult('');
}