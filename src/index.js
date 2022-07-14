const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
const length = colors.length ;

const bgColor= document.querySelector('body');
const btn = document.querySelector('button');

function ranColors() {
  const ranNum1 = Math.floor(Math.random()*length);
  const ranNum2 = Math.floor(Math.random()*length);

  bgColor.style.background = `linear-gradient(45deg, ${colors[ranNum1]}, ${colors[ranNum2]})`


}



btn.addEventListener("click", ranColors)
  