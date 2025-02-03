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

let july2000Average

// TODO: make sure return is good
function julyAvg2000(arr){
    if (!Array.isArray(arr))
        return;

    let sum = 0

    for(let i = 0 ; i<julyTemp2000.length ; i++){
        sum+=julyTemp2000[i]
    }

    julyAvg2000 =  sum/julyTemp2000.length
}

// TODO: make sure prev func works and this one returns
function higherThen2000Avg(arr){
    if (!Array.isArray(arr))
        return

    for (let i = 0 ; i< julyTemp2001 ; i++){
        if(julyTemp2001[i]>july2000Average)
            console.log(julyTemp2001[i]);
    }
}







console.log("script end");