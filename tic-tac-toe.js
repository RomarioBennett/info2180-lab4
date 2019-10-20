"use strict";

window.onload = function() {
    // Get body element and store in a variable
    var body = document.getElementsByTagName("body");
    console.log(body);

    var board1 = document.getElementById("board").querySelectorAll("div");
    board1.forEach(i=>{i.className="square";});
    
    

   //document.getElementById("board").addEventListener('click',function ()
    //{
   // console.log("a click");
    //var i;
    //var board2 = document.getElementById("board").querySelectorAll("div");

    //for (i = 0;i<board2.length;i++){
    
    //board2[i].innerHTML="X";
    //}
    
     //validation code to see State field is mandatory.  
   // });
   var i;
   var board2 = document.getElementsByClassName("square");

   for (i = 0;i<board2.length;i++){
   board2[i].addEventListener("click", myFunction);
   //board2[1].addEventListener("click", myFunction);
   } 
   function myFunction() {
    console.log("a click");
    board2[0].innerHTML = "X";
    //var board2 = document.getElementsByClassName("square");
    //document.getElementbyId("div");
    //board2[i].innerHTML = "X";
  }
      
}
//}


