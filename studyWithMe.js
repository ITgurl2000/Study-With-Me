 
  
   let [milliSeconds,seconds,minutes,hours]=[0,0,0,0]; 
let int =null; 
let startTimer= document.querySelector('.playButton'); 
let pauseTimer= document.querySelector('.pauseButton'); 
let resetTimer=document.querySelector('.resetButton');  
let timeComponents = document.querySelector('.TimerDisplay'); 
startTimer.addEventListener('click', function(){  
    if(int!==null){ 
        clearInterval(int)
    } 
    int = setInterval(displayComponents, 10);
     
}); 
resetTimer.addEventListener('click', function(){ 
    clearInterval(int); 
   [milliSeconds,seconds,minutes,hours]=[0,0,0,0];  
   timeComponents.innerHTML ="00:00:00:000"
})  
pauseTimer.addEventListener('click', function(){ 
    clearInterval(int);
}) 
function displayComponents (){ 
    milliSeconds+=10; 
    if(milliSeconds==1000){ 
        milliSeconds=0; 
        seconds++
     
    if(seconds==60){ 
        seconds=0; 
        minutes++
     if(minutes==60){ 
        minutes=0; 
        hours++
    }} 
} 
let h = hours<10 ? "0"+hours : hours ;  
let m = minutes<10 ? "0"+minutes : minutes ; 
let s = seconds<10 ? "0"+seconds : seconds ; 
let ms = milliSeconds<10 ? "00"+ milliSeconds : milliSeconds<100 ? "0"+milliSeconds: milliSeconds ;  
timeComponents.innerHTML =`${h}:${m}:${s}:${ms}`
} 

 
 

 const inputElement = document.querySelector('.input'); 
const addElement = document.querySelector('.addBtn'); 
const listElement = document.querySelector('.list'); 
addElement.addEventListener('click', function(event){ 
    event.preventDefault();     
    if(inputElement.value!=="")  {
    displayElements (inputElement.value);  
    inputElement.value = ''}; 
}) 
function displayElements (userInput){ 
    const addList = document.createElement('li'); 
    addList.innerHTML = `<input type="checkbox" class="checki"><span>${userInput} </span> 
    <input type="submit" class="deleteBtn" value="Delete">`; 
    listElement.appendChild(addList); 
addList.querySelector('.deleteBtn').addEventListener('click', function (event){ 
event.preventDefault();   
listElement.removeChild(addList)});  
} 
; 
const videoElement = document.querySelector('#bgVideo'); 
const dayElement = document.querySelector('.dayVideo'); 
const nightElement = document.querySelector('.nightVideo');   
const dayBtn = document.querySelector('.Day'); 
const nightBtn = document.querySelector('.Night');  

dayBtn.addEventListener('click', function(event){ 
    event.preventDefault(); 
    switchToDay();
}) 
nightBtn.addEventListener('click', function(event){ 
    event.preventDefault(); 
    switchToNight();
})  
function switchToDay(){ 
    videoElement.src=dayElement.src;  
    videoElement.load(); 
    videoElement.play(); 
    document.body.style.color= 'black';


}
function switchToNight(){ 
    videoElement.src=nightElement.src;  
    videoElement.load(); 
    videoElement.play();  
    document.body.style.color= 'white';  
    document.startTimer.style.color ='white;'
    


} 
 
 






 
 
 
 
 
 

