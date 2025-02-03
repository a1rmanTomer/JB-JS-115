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

function julyAvg2000(arr){
    if (!Array.isArray(arr)) return;

    let sum = 0

    for(let i = 0 ; i<julyTemp2000.length ; i++){
        sum+=julyTemp2000[i]
    }

    return sum/30
}




console.log("script end");