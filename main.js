const card1 = document.getElementById("card")
const cb = document.getElementById("cb")
const btn2 = document.getElementById("btn2")

let i = 0;


function addTodo() {
        const input = document.getElementById("input")
        const todoContainer = document.getElementById("todoContainer")
        const card2 = document.getElementById("card2")
        if(input.value == "") {
                alert("tolong isi todolist kakak")
                return
        }
                console.log("sudah di isi")
                let newCard = card2.cloneNode(true)
                newCard.style.display = "flex"
                newCard.removeAttribute("id")

                const p = newCard.querySelector("p")
                p.textContent = input.value

                const delBtn = newCard.querySelector("btn2")
                input.value = ""
                
                btn2.addEventListener("btn2")
                
                cb.addEventListener("change", function () {
        if(cb.checked) {
                p.style.textDecoration = "underline"
                p.style.fontStyle = "italic"
        } else {
                cb.style.textDecoration = "none";
        }
        
})
todoContainer.appendChild(newCard)
}
