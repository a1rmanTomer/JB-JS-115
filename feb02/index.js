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

function p28ex12(){
    let sum = 0 
    let num = +prompt("insert a number:")

    let numStr = num.toString()

    let i = 0

    while(i<numStr.length){
        sum+=Number(numStr.charAt(i))
        i++
    }
    console.log(`The sum is: ${sum}`);
    
}

function p28ex13(){
    let sum = 0

    let x = +prompt("insert a number:")
    let dig = +prompt("insert a single-digit number:")

    x = x.toString()

    for(let i = 0 ; i < x.length ; i++){
        if(Number(x.charAt(i)) === dig)
            sum++
    }

    console.log(`The digit is present ${sum} times`);
}

function p28ex14(){
    let num = +prompt("Insert a number:")

    num = num.toString()

    let newNum = num.split('').reverse().join('');

    console.log(newNum);
    
}

function galStringFunc(str){
    return str.length > 10 ? "Too long" : `Valid String => ${str.length} chars`;
}









console.log("script end");