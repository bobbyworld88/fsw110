var pageHead = document.createElement("h1")
pageHead.textContent = "Welcome to my JS site"
document.body.append(pageHead)

var myP = document.createElement("p")
myP.textContent = "All of this was created with Javascript"
document.body.append(myP)


var newLi = document.createElement("li")
newLi.textContent = "First"
var myL = document.getElementById("myList")
myL.append(newLi)

var newLi2 = document.createElement("li")
newLi2.textContent = "Second"
var myList2 = document.getElementById("myList")
myList2.append(newLi2)

var newLi3 = document.createElement("li")
newLi3.textContent = "Third"
var myList3 = document.getElementById("myList")
myList3.append(newLi3)
