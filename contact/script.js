var aText = new Array(
"Interested in setting up an interview or collaborating on a project?", 
"Take a look at my full Resume, Linkedin, Github as well as additional contact information below.",
"E-mail: jacqueline.colleen88gmail.com",
"Phone: 302-367-5192"
);
var iSpeed = 50;
var iIndex = 0;
var iArrLength = aText[0].length;
var iScrollAt = 50;
 
var iTextPos = 0;
var sContents = ''; 
var iRow;
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();
