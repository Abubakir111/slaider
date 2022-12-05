let content = document.querySelector(".content");
let left_scrol = document.querySelector(".left");
let right_scrol = document.querySelector(".rigth");
let befo = document.querySelector(".block1::after");
let left = 0; 

console.log(befo);
 

left_scrol.addEventListener("click" ,()=>{
  if(left <= -1200){
    left =-1200;

  }else{
    left += -400;
    content.style.left = left+"px";
  }
 
 
});
right_scrol.addEventListener("click",()=>{
  if(left == 0){
    left = 0;

  }else{
    left += +400;
    content.style.left = left+"px";
  }
  
});