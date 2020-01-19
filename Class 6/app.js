// var paragraph = document.getElementById("paragraph");
// var readMoreButton = document.getElementById("readMoreBtn");
// var readLessButton = document.getElementById("readLessBtn");

// var fullText =
//   "The Quick Brown Fox Jumps over the lazy dog The Quick Brown Fox Jumps over the lazy dog The Quick Brown Fox Jumps over the lazy dog The Quick Brown Fox Jumps over the lazy dog....";

//   paragraph.innerHTML = fullText.slice(0,25)+"....";

//   function collapseParagraph(btnId){
//     if(btnId == "readMore"){
//       paragraph.innerHTML = fullText
//       readLessButton.style.display = "block";
//       readMoreButton.style.display = "none";
//     }else{
//       paragraph.innerHTML = fullText.slice(0,25)+"....";
//       readLessButton.style.display = "none";
//       readMoreButton.style.display = "block";
//     }
//   }

// var lists = document.getElementById("lists");

// function addItem() {
//   var txtItem = document.getElementById("txtItem").value;
//    lists.innerHTML += txtItem + " "
// }

function changeImage(){
  var image = document.getElementById("image");
  image.src = "4.png";

  image.className = "radius borderRadius"
}

function getAddress(){
  var link = document.getElementById("link");
  link.href = "https://www.google.com/"
  console.log("TCL: getAddress -> ink.href", link.href)
}

// var allP = document.getElementsByTagName('p');
// console.log("TCL: allP", allP)
// for(var i=0; i<allP.length; i++){
//   // allP[i].style.color = "red"

//   if(i%2 == 0){
//     allP[i].style.color = "red"
//     allP[i].innerHTML = "Bye"
//   }else{
//     allP[i].style.color ="blue"
//   }
// }

// var parent = document.getElementById("parent");
// var nestedPs = parent.getElementsByTagName("p");
// console.log("TCL: nestedPs", nestedPs)
