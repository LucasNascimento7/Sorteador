const button = document.querySelector("button")


function draw() {
const inputInBetween = Math.ceil(document.querySelector(".between").value)
const inputAnd = Math.floor(document.querySelector(".and").value)
const result = Math.floor(Math.random() * (inputAnd - inputInBetween + 1) + inputInBetween)
if (inputInBetween >= inputAnd) {

alert ("opa")

}

alert(result)

}


button.addEventListener("click", draw)
