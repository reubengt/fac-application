//variable to store scrollbtn
let scrollbtn=document.querySelector(".scrollbtn");
//variable to store each p tag in the code window
let codelines=[...document.querySelectorAll(".code-window p")];
//creates a copy of the previous array, but with the elements replaced with the values of their text contents
//this will be used later to re-fill the empty elements
let codelinesCopy=codelines.map(a => a.textContent);
//setting an interval time for each line to be the length of the longest line multiplied by 80ms(the interval for each letter)
let intervalTime=0;
//resets the innerText to be blank
codelines.map(a=>a.innerText="");
//current line number
let lineIndex=0;
//function to type out a line with a delay of 80ms between characters
function typeline() {
  let line=codelines[lineIndex];
  let text=codelinesCopy[lineIndex];
  let i=0;
  let typing=setInterval(() => {
  if(text[i]!=undefined){
    line.textContent+=text[i];
    i++;
   }
 }, 40);
  lineIndex++;
  intervalTime=text.length*40+300;
  //recursively calls the function for the next line with a timeout interval slightly greater than the time taken to display the previous line
  if(lineIndex<codelines.length){
    setTimeout(typeline, intervalTime);
  }
  else{
    scrollbtn.style.opacity = "1.0";
    scrollbtn.style.transition = "opacity 2.0s";
  }
}
typeline();

window.addEventListener('keydown',function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  if(key.classList.contains('playing')==false)
  {
  audio.currentTime=0;
  audio.play();
  key.classList.add('playing');
  }
});
window.addEventListener('keyup',function(e){
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.remove('playing');
});
let piano=document.querySelector('.piano-nav');
//touch events
piano.addEventListener('touchstart', function(e){
  console.log('touchstart');
  const audio = document.querySelector(`audio[data-key="${e.target.getAttribute('data-key')}"]`);
  const key = document.querySelector(`.key[data-key="${e.target.getAttribute('data-key')}"]`);
  if(!audio) return;
  audio.currentTime=0;
  audio.play();
  if(key.classList.contains('playing')==false)
  {
  key.classList.add('playing');
  }
});
piano.addEventListener('touchend', function(e){
  const key = document.querySelector(`.key[data-key="${e.target.getAttribute('data-key')}"]`);
  key.classList.remove('playing');
});
