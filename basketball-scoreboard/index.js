let homeBtn = document.getElementById("score-btn")
let guestBtn = document.getElementById("guest-btn")

let countHome = 0
let countGuest = 0 
function addOneHome() {
    countHome += 1
    homeBtn.textContent = countHome
}

function addTwoHome() {
    countHome += 2
    homeBtn.textContent = countHome
}

function addThreeHome() {
    countHome += 3
    homeBtn.textContent = countHome
}

function addOneGuest() {
    countGuest += 1
    guestBtn.textContent = countGuest
}

function addTwoGuest() {
    countGuest += 2
    guestBtn.textContent = countGuest
}

 function addThreeGuest() {
     countGuest += 3
    guestBtn.textContent = countGuest
 }