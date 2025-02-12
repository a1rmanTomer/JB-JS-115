console.log("script start");

function p28ex14(num){
    num = num.toString()
    let newNum = num.split('').reverse().join('');
    console.log(newNum);
}

function p29ex26(x,y){
    let min = Math.min(x, y);
    let max = Math.max(x, y);

    for (let i = min; i <= max; i++) {
        console.log(i);
    }
}

function p29ex27(x,y){
    if(typeof x !== 'number' || typeof y !== 'number')
        throw new Error("Numbers invalid!");

    let min = Math.min(x, y);
    let max = Math.max(x, y);

    for (let i = min; i <= max; i++) {
        console.log(i);
    }
    for (let i = max - 1; i >= min; i--) {
        console.log(i);
    }
}


// p29ex28
let julyTemp2000 = [29]
let julyTemp2001 = [29]

// random numbers
function randomNumbers(min, max){
    return (Math.floor(Math.random() * (max-min) + min))
}

// dec for array tests
for (let i = 0; i < 30; i++) {
    julyTemp2000.push(randomNumbers(35,45));
    julyTemp2001.push(randomNumbers(31,44));
}

// finding array avg
function findArrAvg(arr){
    if (!Array.isArray(arr))
        return;

    let sum = 0;

    for(let i = 0 ; i<arr.length ; i++){
        sum+=arr[i];
    }

    let avg = (sum/arr.length).toFixed(1)

    return avg;
}

// calling prev func then comparing every item in the 2nd array
function higherThenPrevArr(j2000,j2001){
    if (!Array.isArray(j2000) && !Array.isArray(j2001))
        return;

    let prevArrAvg = findArrAvg(j2000);

    console.log(`July 2000" AVG temp day was: ${prevArrAvg}\njuly 2001" days with higher temp were:`);
    
    for (let i = 0 ; i< j2001.length ; i++){
        if(j2001[i]>prevArrAvg)
            console.log(`July ${i+1}, with a temp of: ${j2001[i]}`);
    }
}







console.log("script end");