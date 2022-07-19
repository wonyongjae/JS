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
const hoverColor = "#5DC19B";
const targetSpan = document.querySelector(".getColor");


function giveMeColors(event) {
  let elem = this.value;
  console.log(elem);
  // const giveYouColors = document.targetSpan;
  const firstColor = Math.floor(Math.random() * colors.length);
  const seconColor = Math.floor(Math.random() * colors.length);
  
  
  if(firstColor == seconColor){
    return giveMeColors();
  }

    elem.value.style.color = `linear-gradient(to right, ${colors[firstColor]}, ${colors[seconColor]}`;
  
  // while(!elem.classList.contains(".getColor")){
  //   elem = elem.parentNode;

  //   if(elem.tagName == "BODY"){
  //     elem = null;
  //   }
  // }
}



document.getElementsByTagNameNS("SPAN").addEventListener("click", giveMeColors);





// let selectedSpan;
// targetSpan.addEventListener = ("mouseover", function(event) {
//   const firstColor = Math.floor(Math.random() * colors.length);
//   const seconColor = Math.floor(Math.random() * colors.length);

//   if(firstColor == seconColor){
//       return giveMeColors();
//   }

//   let target = event.target;
//   if (target.tagName != 'span') return;
//   highlight(target);
// });
// function highlight(span) {
//   if (selectedSpan) { 
//     selectedSpan.style.color = "#fff";
//   }
//   selectedSpan = span;
//   selectedSpan.style.color = "blue";
// }
//  function getHighlight(){
//     target.style.color = "#5DC19B";
//   };
  


//   someElement.addEventListener("mouseenter", getHighlight);

//   targetSpan.onMouseenter = giveMeColors;
//   // targetSpan.addEventListener("click", giveMeColors);