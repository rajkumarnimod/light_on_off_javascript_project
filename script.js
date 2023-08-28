var light = document.querySelector('.light')
var btn = document.querySelector('button')
var star = 0
btn.addEventListener('click',function(){
   if(star == 0){
    light.style.backgroundColor= "yellow"
    btn.innerHTML= "OFF"
    star = 1
   }
   else{
    light.style.backgroundColor= "white"
    btn.innerHTML= "ON"
    star = 0
   }

})