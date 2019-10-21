"use strict";

window.onload = function() {
    // Get body element and store in a variable
    var body = document.getElementsByTagName("body");
    console.log(body);
  //Layout the Board
    var board1 = document.getElementById("board").querySelectorAll("div");
    board1.forEach(i=>{i.className="square";});
    
    
//Add an X or O to a square when clicked 
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
var i;
var board4 = document.getElementById("board").querySelectorAll("div");
for (i = 0;i<board4.length;i++){
  var board5 = board4[i];

board5.addEventListener("mouseover", func);
board5.addEventListener("mouseout", func1);
}
function func()
{  // not needed since item is already global, 
   // I am assuming this is here just because it's sample code?
   // var item = document.getElementById("button"); 
   this.classList.add('hover');
}

function func1()
{  
   this.classList.remove('hover');
}


      
}
//}


