const dataFinal = new Date(2023,7,10,18)
var agora = new Date()
console.log(dataFinal)
console.log(agora)
var diff = Math.abs(new Date() - dataFinal)
console.log(Math.abs(new Date() - dataFinal))
document.getElementById("data").innerHTML = diff