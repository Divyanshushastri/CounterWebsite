let count = 0
let saveIt = document.getElementById("onSave")
let countelt = document.getElementById("counter")


function increment(){
    count += 1
    countelt.textContent = count
}

function save (){
    let savinButton = count + " - "
    saveIt.textContent += savinButton
    countelt.textContent = 0
    count = 0



}