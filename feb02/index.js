console.log("script start");




function p27ex8(){
    let min = Infinity;

    let num = +prompt("Insert a number:");

    while(num > 0){
        if(num < min)
            min = num;
        num = +prompt("Insert a number:");
    }

    console.log(`The smallest number was: ${min}`);
}

function p27ex9(){
    const LENGTH = 4
    let max = 0
    let maxIndex = 0
    let num = [LENGTH]

    for(let i = 0 ; i < LENGTH ; i++){
        num[i] = +prompt("insert a number.")
        if(num[i] > max){
            max = num[i]
            maxIndex = i
        }
    }

    console.log(`The index of ths biggest number is: ${maxIndex + 1} (i=${maxIndex}), that has the value of: ${max}`);
    
}






console.log("script end");