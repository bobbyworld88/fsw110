// var button = document.getElementById("button");

// function handleButtonClick() {
//     console.log("The button was clicked!");
// }

// button.addEventListener("click", handleButtonClick);

// var button = document.getElementById("button")
// button.addEventListener("click", function() {
//     console.log("The button was clicked")
// })

var x = document.getElementById('box');
x.addEventListener('mouseover', mouseOverFunction);
x.addEventListener('mousedown', mouseDownFunction);
x.addEventListener('mouseleave', mouseLeaveOverFunction);
x.addEventListener('dblclick', mouseDoubleClickFunction);
x.addEventListener('wheel', mouseScrollFunction)

function mouseScrollFunction(e){
  document.getElementById('box').style.backgroundColor = 'orange';
  

}

function mouseDoubleClickFunction(e){
  document.getElementById('box').style.backgroundColor = 'green';
  console.log(e)

}


function mouseLeaveOverFunction(){
  
  document.getElementById('box').style.backgroundColor = 'yellow';
}

function mouseDownFunction(){
  document.getElementById('box').style.backgroundColor = 'red'; 
  
}

function mouseOverFunction(){
  document.getElementById('box').style.backgroundColor = 'blue';
  
}

const log = document.getElementById('box');

document.addEventListener('keypress', logKey);


function logKey(e) {
  switch (e.keyCode) {
    case 114:
      console.log(`the letter pressed was ${e.code}`)
      log.textContent += ` ${e.code}`;
      log.style.backgroundColor = 'red'
      break;

      case 98:
      console.log(`the letter pressed was ${e.code}`)
      log.textContent += ` ${e.code}`;
      log.style.backgroundColor = 'blue'
      break;

      case 121:
      console.log(`the letter pressed was ${e.code}`)
      log.textContent += ` ${e.code}`;
      log.style.backgroundColor = 'yellow'
      break;

      case 103:
      console.log(`the letter pressed was ${e.code}`)
      log.textContent += ` ${e.code}`;
      log.style.backgroundColor = 'green'
      break;

      case 111:
      console.log(`the letter pressed was ${e.code}`)
      log.textContent += ` ${e.code}`;
      log.style.backgroundColor = 'orange'
      break;

  }
  log.textContent += ` ${e.code}`;
  console.log(e.code, e.keyCode);
}