"use strict";

window.onload = function() {
    // Get body element and store in a variable
    var body = document.getElementsByTagName("body");
    console.log(body);

    var board1 = document.getElementById("board").querySelectorAll("div");
    board1.forEach(i=>{i.className="square";});
    
    
//var i;
//var board2 = document.getElementsByClassName("square");


//for (i = 0;i<board2.length;i++){

  //board2[i].addEventListener("click",myFunction);

//}

//function myFunction(){

  
  //console.log("a click");
  //board2[0].innerHTML = "X";
//}
   
var board2 = document.getElementById("board").querySelectorAll("div");
var i;




let letterChange = false;
for (i = 0;i<board2.length;i++){
  var board3 = board2[i];
  
board3.onclick = function() {
  
  if (!letterChange && board3){
  var i;
  this.classList.add("X");
  this.innerHTML = "X";
  console.log("a click");

  letterChange = true;
  } 
  else
  {
  var i;
  this.classList.add("O");
  this.innerHTML = "O";
  console.log("a click");
    
  letterChange = false;
  }
  
}




}







      
}
//}


