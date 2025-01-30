console.log("Script start");

// p15ex1
function p15ex1() {
    let num1 = +prompt("Insert a number:")
    let num2 = +prompt("Insert a number:")
    let num3 = +prompt("Insert a number:")

    let sum = num1+num2+num3
    let avg = sum/3

    console.log(`Average is ${avg}\nThe sum is ${sum}`);
}

// p15ex2
function p15ex2(){
    let length = +prompt("Insert the length of the room:");
    let width = +prompt("Insert the width of the room:");

    let surfaceArea = length * width;
    let scope = 2 * (length + width);

    console.log(`Surface area is ${surfaceArea}\nThe outer length is ${scope}`);
}

// p15ex3
function p15ex3(){
    let diameter = +prompt("Insert the diameter of the cylinder:");
    let radius = diameter / 2
    let depth = +prompt("Insert the depth of the cylinder:");

    let volume = Math.PI * Math.pow(radius, 2) * depth;
    volume = volume.toFixed(2);

    console.log(`The volume of the cylinder is ${volume}`);
}

// p19ex6
function p19ex6(){
    let name = prompt("Insert the worker's name:")
    let salary = +prompt("Insert the worker's salary:")

    let newSalary = (salary)=> {
        return (salary * 1.1 > 6000 ? salary * 1.05 : salary * 1.1)
    }

    console.log(`The new salary for ${name} is ${newSalary(salary)}`);
}

// p27ex2
function p27ex2(){
    let num1 = +prompt("Insert the first number:");
    let num2 = +prompt("Insert the second number:");

    let small,big;

    if(num1>num2){
        big = num1;
        small = num2;
    }
    else{
        big = num2;
        small = num1;
    }

    while(small<=big){
        console.log(small);
        small++;
    }
}

// p27ex3
function p27ex3(){
    
    let n = +prompt("insert a number:")
    
    let i = 0;

    while(i<=n){
        if(i%2==0)
            console.log(i)
        i++;
    }
}

// p27ex5
function p27ex5(){
    let sum = 0

    let num = +prompt("insert a number:")

    while(num!=-99){
        if(num>0)
            sum+=num
        num = +prompt("insert a number:")
    }

    console.log(`the sum af the numbers is: ${sum}`);
}










console.log("Script stop");