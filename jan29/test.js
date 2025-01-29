console.log("Js is running.")

function printTomer(){
    const tomerInfo = ["Tomer", "Dan", "(almost) 21", "GVT, Gush-Dan, IL", "In Active Duty Service"]
    console.log(tomerInfo)
}

printTomer()


let fName = "Tomer"
let lName = "Dan"
let fullName = `${new Date().toISOString()} ${">"} ${fName} ${lName} ${"has used TOKEN:"} ${Math.ceil(Math.random()*9674856798789)}`

console.log(fullName)


console.log("Js finished running.")