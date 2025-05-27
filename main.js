const day = document.getElementById("day")
const time = document.getElementById("time")
const good = document.getElementById("good")
const input = document.getElementById("input")
const ul = document.getElementById("todo-container")


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

function addTodo() {
        if(input.value !== ""){
                let newLi = document.createElement("li")
                newLi.innerHTML = input.value
                ul.appendChild(newLi)
                let span = document.createElement("span")
                span.innerHTML = "❌"
                newLi.appendChild(span)
        } else {
                alert("masukan todonya kakak")
        }
        input.value = ""
        }

ul.addEventListener('click', function(e) {
        if(e.target.tagName === "LI") {
                e.target.classList.toggle("checked")
        } else if(e.target.tagName === "SPAN") {
                e.target.parentElement.remove()
        }
})







