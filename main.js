const card2 = document.getElementById("card2")
const card1 = document.getElementById("card")
const input = document.getElementById("input")
const cb = document.getElementById("cb")
const btn2 = document.getElementById("btn2")



// ketika klik button
function addTodo() {
        // ambil input value dari user
        card2.innerHTML = input.value
        const newDiv = card2.cloneNode();
        const newCb = cb.cloneNode()
        newCb.id = "cb" + ++i
        newDiv.id = "card2" + ++i
        card2.parentNode.appendChild(newDiv)
        input.parentNode.appendChild(newCb)
        const newBtn = btn2.cloneNode()
        newBtn.id = "btn2" + ++i
        newDiv.parentNode.appendChild(newBtn)
}
