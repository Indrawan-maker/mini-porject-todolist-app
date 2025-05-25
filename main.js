const card1 = document.getElementById("card")
const cb = document.getElementById("cb")
const btn = document.getElementById("btn")
const day = document.getElementById("day")
const time = document.getElementById("time")
const good = document.getElementById("good")
const input = document.getElementById("input")
const todoContainer = document.getElementById("todoContainer")
const card2 = document.getElementById("card2")
const btn2 = document.getElementById("btn2")



// display time
const name = prompt("Silahkan masukan nama kakak😊") || "kakak"

let currentDateTime = new Date();
let currentHours = currentDateTime.getHours()
let currentMinutes = currentDateTime.getMinutes()
let currentDate = currentDateTime.toDateString()

if (currentHours >= 4 && currentHours <= 9) {
        good.textContent = `Good Morning, ${name}!`
} else if (currentHours >= 10 && currentHours <= 14) {
        good.textContent = `Good Afternoon, ${name}!`
} else if (currentHours >= 15 && currentHours <= 18) {
        good.textContent = `Good Evening, ${name}!`
} else {
        good.textContent = `Good Night, ${name}!`
}
function Time(num) {
        return ("0" + num).slice(-2)
}
let currentTime = Time(currentHours) + ":" + Time(currentMinutes)

time.textContent = currentTime
day.textContent = currentDate

btn.addEventListener('click', function() {
        document.createElement("")
})

input.value = ""