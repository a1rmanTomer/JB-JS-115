console.log("Script start");

// EX1
let myCar = {
    make: "Hyundai",
    model: "I20n",
    year: 2024,
    type: "Hot Hatch",
    engine: "1.6L-TGDI",
    color: "N-Blue",
    doors: 5,
    km: 49250
}

// print func:
function printCar(car){
    console.log(`Color: ${car}`);
}

// print car color:
printCar(myCar.color)

// reset color:
myCar.color = "N-Red";


// reprint car color:
printCar(myCar.color)

// func to add KM
function addKm(kmToAdd){
    myCar.km += kmToAdd
}

// EX2
function pDetails(id, price, name){
    // input val
    if (typeof id !== 'string')
        id = id.toString();
    if (typeof name !== 'string')
        id = id.toString()
    if (typeof price !== 'number')
        price = Number(price)

    let currentTime = new Date().toString();

    let myObj = {
        pId: id,
        pName: name,
        pCreateTimeStamp: currentTime,
        pPrice: price
    }

    console.log(myObj);
}





console.log("Script stop");