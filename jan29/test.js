console.log("Js is running.")

// ex-1
function printTomer(){
    const tomerInfo = ["Tomer", "Dan", "(almost) 21", "GVT, Gush-Dan, IL", "In Active Duty Service"]
    console.log(tomerInfo)
}
printTomer()


let fName = "Tomer"
let lName = "Dan"
let fullName = `${new Date().toISOString()} ${">"} ${fName} ${lName} ${"has used TOKEN:"} ${Math.ceil(Math.random()*9674856798789)}`
console.log(fullName)


// ex-2
function printMetaTomer(){
    let email = "tomerdan1404@gmail.com"
    let job = "Active Duty Soldier"
    let title = "Mr."
    let age = 21
    let isEmployed = true
    let hasCar = false

    let tomerMetaData = `${title} ${fName} ${lName}, Email: ${email}, Job: ${job}, Age: ${age}, Employed: ${isEmployed}, Has Car: ${hasCar}`

    console.log(tomerMetaData)
}
printMetaTomer()

console.log("Js finished running.")