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




console.log("script end");