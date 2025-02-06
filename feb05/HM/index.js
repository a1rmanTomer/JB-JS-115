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

    const filteredCars = [];
    for(let i = 0 ; i < arr.length ; i++){
        if (arr[i].Origin === origin && arr[i].Miles_per_Gallon === mpg)
            filteredCars.push(arr[i]);
    }
    return filteredCars;

}





console.log("Script end");