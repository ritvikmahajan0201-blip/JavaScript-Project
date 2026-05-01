let score_home = 0
let score_guest = 0
let scorehome = document.getElementById("score-home")
let scoreguest = document.getElementById("score-guest")

function add1home(){
    score_home+=1
    scorehome.textContent = score_home 
}

function add2home(){
    score_home+=2
    scorehome.textContent = score_home 
}

function add3home(){
    score_home+=3
    scorehome.textContent = score_home 
}

function add1guest(){
    score_guest+=1
    scoreguest.textContent = score_guest 
}

function add2guest(){
    score_guest+=2
    scoreguest.textContent = score_guest
}

function add3guest(){
    score_guest+=3
    scoreguest.textContent = score_guest 
}

function resetbtn(){
    score_home = 0
    score_guest = 0
    scorehome.textContent = 0
    scoreguest.textContent = 0
}
