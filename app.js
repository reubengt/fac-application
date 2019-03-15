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
  console.log(text)
  let i=0;
  let typing=setInterval(() => {
  if(text[i]!=undefined){
    line.textContent+=text[i];
    i++;
   }
  }, 80);
  lineIndex++;
  intervalTime=text.length*80+600;
  //recursively calls the function for the next line with a timeout interval slightly greater than the time taken to display the previous line
  if(lineIndex<codelines.length){
    setTimeout(typeline, intervalTime);
  }
}
typeline();
