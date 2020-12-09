var h1 = document.createElement('h1');
var content = document.createTextNode('Intro to Javascript');
h1.appendChild(content);
document.body.appendChild(h1);

var para = document.createElement("p");
var node = document.createTextNode("This is my first website using javascript.JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.");
para.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para);

//List
function createListItem(list) {
  let li = document.createElement('li');
  li.textContent = list;
  return li;
}
// get the ul#list
const menu = document.querySelector('#list');
// add menu item
menu.appendChild(createListItem('Home'));
menu.appendChild(createListItem('Services'));
menu.appendChild(createListItem('About Us'));

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var h1 = document.createElement('footer');
var content = document.createTextNode('© 2020 Lambware');
h1.appendChild(content);
document.body.appendChild(h1);

