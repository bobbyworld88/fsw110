(function tenTimes() {
    for (var i = 0; i < 10; i++) {
        var h1 = document.createElement("h1");
        var content = document.createTextNode("Hello World");
        h1.appendChild(content);
        document.body.appendChild(h1);
        document.getElementsByTagName("h1")[i].setAttribute("class", "democlass");
      }
   })();
   
   var nameList = [
     "steve",
     "larry",
     "joe",
     "shirley",
     "steph",
     "nate",
     "rick",
     "emily",
   ];
   
   var newList = document.getElementById("myList");
   
   for (var i = 0; i < nameList.length; i++) {
     var newName = document.createElement("li");
     newName.textContent = nameList[i];
     newList.append(newName);
   }