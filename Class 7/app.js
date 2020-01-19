var tag = document.childNodes[1].childNodes[2].childNodes[1].childNodes[0];
// console.log("TCL: tag", tag)

var body = document.childNodes[1].childNodes[4].childNodes[1].childNodes[1].childNodes[1].childNodes[0];
// console.log("TCL: body", body)

var heading = document.getElementById("heading");
var headingNodeType = heading.nodeType;
// console.log("TCL: heading", headingNodeType)

var body = document.childNodes[1].childNodes[4].childNodes[1].childNodes[1].childNodes[1].childNodes[0];
// console.log(body.nodeType);

var body = document.childNodes[1].childNodes[4].childNodes[1].firstChild;
var body = document.childNodes[1].childNodes[4].childNodes[1].lastChild;

// console.log("TCL: body", body)


var body = document.childNodes[1].childNodes[4].childNodes[1].childNodes[1].nextSibling.nextSibling;
var body = document.childNodes[1].childNodes[4].childNodes[1].childNodes[2].previousSibling;
// console.log("TCL: body", body)

var lists = document.getElementsByTagName('li');
// console.log("TCL: lists", lists.length)
for(var i=0; i<lists.length; i++){
    lists[i].style.color = "red"
    if(lists[i].innerHTML === ""){
        lists[i].innerHTML = "Not Available!";
    }
}


//Setting & Getting Attributes
var paragraph = document.getElementById("paragraph");
// paragraph.setAttribute('class','styleText');
paragraph.setAttribute('class','styleText fontFamily');

var id = paragraph.getAttribute('id');
// console.log("TCL: id", id)
// console.log("TCL: paragraph", paragraph)

var hasAttribute = paragraph.hasAttribute("class"); //return true / false
// console.log("TCL: hasAttribute", hasAttribute)

var img = document.getElementById("img");
// console.log("TCL: img", img.attributes)
// console.log(img.attributes.length)

var root = document.getElementById("root");

var pTag = document.createElement('p');
pTag.innerHTML = "First Element"
// console.log("TCL: pTag", pTag)

// root.appendChild(pTag)
root.insertBefore(pTag , root.firstChild)


var createImg = document.createElement('img');
createImg.setAttribute('src','1.png')
createImg.setAttribute('width' , '50px')
createImg.setAttribute('height','50px')
createImg.setAttribute('style','border-radius:10px')
// console.log("TCL: createImg", createImg)
root.appendChild(createImg);


//Removing Elements
var remover = document.getElementById('remover');
remover.removeChild(remover.childNodes[1]);
