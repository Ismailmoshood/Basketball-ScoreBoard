// const result1=document.getElementById("hscore").innerHTML;
let resultEL1= document.getElementById("hscore");
let resultEL2= document.getElementById("gscore");
let result1 = 0;

let calculate1=(number)=>{
   result1 =result1 + number;
   resultEL1.innerHTML = result1;
   lead1()
}
let result2 = 0
let calculate2=(number)=>{
   result2 =result2+ number;
   resultEL2.innerHTML = result2;
   lead2()
}


function reset(){
   resultEL1.innerHTML = 0; 
   resultEL2.innerHTML = 0;
   result1 = 0;
   result2 = 0;
   lead1()
   lead2()
}
function lead1(){
   if(result1 >= result2){
      document.getElementById("hscore").style.color = "green" ;
   }else if(result1 < result2){
      document.getElementById("hscore").style.color = "red" ;
   }
   }
   function lead2(){
       if(result2 >= result1){
      document.getElementById("gscore").style.color = "green" ;
   }else if(result2 < result1){
      document.getElementById("gscore").style.color = "red" ;
   }
}
 