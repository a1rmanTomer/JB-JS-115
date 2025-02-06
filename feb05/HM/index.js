console.log("Script start");

// console.log(carsForSale);

// 1
function filterCarsByOriginAndMpg(arr, origin, mpg){
    // validation
    if (!Array.isArray(arr)) {
        console.error("First argument must be an array");
        return;
    }
    if (typeof origin !== 'string') {
        console.error("Second argument must be a string");
        return;
    }
    if (typeof mpg !== 'number') {
        console.error("Third argument must be a number");
        return;
    }

    // filtering
    const filteredCars = []
    for(let i = 0 ; i < arr.length ; i++){
        if (arr[i].Origin === origin && arr[i].Miles_per_Gallon === mpg)
            filteredCars.push(arr[i]);
    }
    return filteredCars;
}

// 2
function findAvgHp(arr){
    // validation
    if (!Array.isArray(arr)) {
        console.error("Argument must be an array");
        return;
    }
    if (arr.length === 0) {
        console.error("Array must not be empty");
        return;
    }

    // calc
    let sum = 0
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].Horsepower)
            sum+=arr[i].Horsepower
    }

    const avgHp = Math.floor(sum / arr.length)

    return avgHp
}

// 3
function exactMatchFilter(arr, key, value){
    // input validation
    if (!Array.isArray(arr)) {
        console.error("First argument must be an array");
        return;
    }
    if (typeof key !== 'string') {
        console.error("Second argument must be a string");
        return;
    }
    if (value === undefined) {
        console.error("Third argument must be defined");
        return;
    }

    // filter
    const filteredCars = []
    for (let i = 0 ; i < arr.length ; i++){
        if (arr[i][key] === value){
            filteredCars.push(arr[i])
        }
    }

    return filteredCars
}







console.log("Script end");