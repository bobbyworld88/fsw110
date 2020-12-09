(function makeHeader() {
    for (var i = 0; i < 5; i++) {
      var h2 = document.createElement("h2");
      var content = document.createTextNode("Changing styles using JS");
      h2.appendChild(content);
      document.body.appendChild(h2);
      // Appling styles on element
      h2.style.color = "cornflowerblue";
      h2.style.fontSize = "20px";
      h2.style.fontWeight = "lighter";
      h2.style.fontFamily = "sans-serif";
  
      var a = document.body;
      if (a.classList) {
        a.classList.add("border");
      } else {
        a.className += " border";
      }
    }
  })();