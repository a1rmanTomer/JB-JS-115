console.log("script start");

function p28ex14(num){
    num = num.toString()
    let newNum = num.split('').reverse().join('');
    console.log(newNum);
}

function p29ex26(x,y){
    if (x <= y) {
        for (let i = x; i <= y; i++) {
            console.log(i);
        }
    } else {
        for (let i = x; i >= y; i--) {
            console.log(i);
        }
    }
}






console.log("script end");