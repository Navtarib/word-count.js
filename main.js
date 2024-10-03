 var userInput =String(prompt("Enter sentences."));
alert(userInput);
var brk = userInput.split(" ");
// alert(brk)
var wordCount= 0;
for(var i =0 ; i < brk.length; i++){
    if(brk[i] !==""){
    wordCount++}
    }
    alert(wordCount)
   



