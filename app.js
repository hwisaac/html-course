const maxNum = document.querySelector(".maxNum");
const guessingNum = document.querySelector(".guessingNum");
const playBtn = document.querySelector(".playBtn");
const result = document.querySelector(".result");
const outcome = document.querySelector(".outcome");

function play(event) {
    const ranNum = Math.floor(maxNum.value * Math.random());
    event.preventDefault(); 
    
    result.innerHTML= `your chose: ${guessingNum.value} ,the machine chose:${ranNum}`;

    if (ranNum == guessingNum.value ){
        outcome.innerHTML = "<em style='color:red'>YOU WON!</em>"
    } else {
        outcome.innerHTML = "You lost!"
    }

}

playBtn.addEventListener("click", play);