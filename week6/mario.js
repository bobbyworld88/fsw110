var goombaPlus = document.querySelector("#goombasPlus");
var goombaMinus = document.querySelector("#goombasMinus");
var bobPlus = document.querySelector("#bobPlus");
var bobMinus = document.querySelector("#bobMinus");
var cheepPlus = document.querySelector("#cheepPlus");
var cheepMinus = document.querySelector("#cheepMinus");
var grandTotalElem = document.querySelector("#pestGrandTotal");


//add event to goombaPlus
goombaPlus.addEventListener("click", function() {
  //Grab Num of goombas
  var goombaNumElem = document.querySelector("#goombasNum");
  var goombaNumValue = parseInt(goombaNumElem.textContent);
  //Grab total coin results for goombas
  var goombaResultElem = document.querySelector("#goombasResults");
  var goombaResultValue = parseInt(goombaResultElem.textContent);
  //Add to num of goombas
  document.querySelector("#goombasNum").innerHTML = goombaNumValue + 1;
  //Add to num of coins
  document.querySelector("#goombasResults").innerHTML = goombaResultValue + 5;
  //Grab grand total
  var grandTotal = parseInt(grandTotalElem.textContent);
  //Add to grand total
  document.querySelector("#pestGrandTotal").innerHTML = grandTotal + 5;
  // Add zoomOutUp animation
  document.querySelector("#goombaAnime").classList.add("animated");
  document.querySelector("#goombaAnime").classList.add("zoomOutUp");
  setTimeout(function() {
    document.querySelector("#goombaAnime").classList.remove("zoomOutUp");
  }, 1300);

});



//add event to goombaMinus
goombaMinus.addEventListener("click", function() {
  //Grab Num of goombas
  var goombaNumElem = document.querySelector("#goombas-num");
  var goombaNumValue = parseInt(goombaNumElem.textContent);
  //Grab total coin results for goombas
  var goombaResultElem = document.querySelector("#goombas-results");
  var goombaResultValue = parseInt(goombaResultElem.textContent);
  //Add to num of goombas
  document.querySelector("#goombas-num").innerHTML = goombaNumValue - 1;
  //Add to num of coins
  document.querySelector("#goombas-results").innerHTML = goombaResultValue - 5;
  //Grab grand total
  var grandTotal = parseInt(grandTotalElem.textContent);
  //Remove from grand total
  document.querySelector("#pest-grand-total").innerHTML = grandTotal - 5;
  // Add speedLightOut animation
  document.querySelector("#goomba-animate").classList.add("animated");
  document.querySelector("#goomba-animate").classList.add("lightSpeedOut");
  setTimeout(function() {
    document.querySelector("#goomba-animate").classList.remove("lightSpeedOut");
  }, 1300);

});