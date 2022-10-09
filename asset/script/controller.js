
//FUNTION
//Add Result in Monitor
function monitorResult(result) {
    monitor.innerHTML = result;
}

//Add number on Monitor
function addNumberOnMonitor(Number) {
    if (!checkNumber) {
        stringText = '';
    }
    stringText += Number;
    if (stringText.startsWith('00') && stringText.length > 1) {
        stringText = stringText.replace('0', '');
    }
    monitorResult(stringText);
    checkNumber = true;
    error = false;
}

//Dot
function checkDot() {
    if (!checkNumber) {
        stringText = '';
    }
    if (!stringText.includes('.')) {
        if (stringText.length ==0){
            stringText += '0.';
        } else {
            stringText += '.';
        }
    }
    monitorResult(stringText);
    checkNumber = true;
    error = false;
}

//Simple Caculation (Add - Sub - Mul - Div - result)
function SimpleCaculation() {
    if (checkNumber && !error) {
        oldNumber = result;
        newNumber = Number(stringText);

        switch (simple) {
            case 'add':
                result = oldNumber + newNumber;
                break;
            case 'sub':
                result = oldNumber - newNumber;
                break;
            case 'div':
                if (newNumber == 0) {
                    error = true;
                    resetMenory();
                    monitorResult('Không chia cho 0');
                    break
                } else {
                    result = oldNumber / newNumber;
                }
                break;
            case 'mul':
                result = oldNumber * newNumber;
                break;
            default:
                result = Number(stringText);
                break;
        }

        if (!error) {
            monitorResult(result);
        }

        stringText = result;
        checkNumber = false;
        //Test case
        // console.log('------------');
        // console.log('String text: ', stringText);
        // console.log('Old number: ', oldNumber);
        // console.log('New number: ', newNumber);
        // console.log('result: ',result);
        // console.log('Caculation ', simple);
    }
}

// Multi Caculation
function multiCaculation(multi) {
    newNumber = Number(stringText);
    switch (multi) {
        case 'percent':
            result = newNumber / 100;
            break;
        case 'square-root':
            if (newNumber < 0) {
                error = true;
                resetMenory();
                monitorResult('No result');
                break
            }
            result = Math.sqrt(newNumber);
            break;
        case 'minus':
            result = 0 - newNumber;
            break;
        case 'thousand':
            result = newNumber * 1000;
            break;
    }
    if (!error) {
        monitorResult(result);
    }
    stringText = result;
    checkNumber = false;
}

//Memory Caculation
function memoryCaculator(checkMemory) {
    newNumber = Number(stringText);
    switch (checkMemory) {
        case 'mAdd':
            memory = memory + newNumber;
            break;
        case 'mSub':
            memory = memory - newNumber;
            break;
        case 'mClear':
            memory = 0;
            break;
    }
}

//Clear Memory
function resetMenory() {
    result = 0;
    stringText = '';
    memory = 0;
    oldNumber = 0;
    newNumber = 0;
    simple = null;
}

