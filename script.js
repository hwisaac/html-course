const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');
const title = document.querySelector("h2");
const body = document.querySelector("body");

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
  title.innerText = window.innerWidth;

  if ( window.innerWidth < 500){
    body.className = "purple";
  } else if (window.innerWidth < 800 ) {
    body.className = "blue";
  } else {
    body.className ="yellow";
  }
  
}

window.addEventListener("resize", reportWindowSize)  ;