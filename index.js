document.getElementById("img").src="bulb.jpg";
document.getElementById("text").innerHTML=" Off"

function btnOff(){
   document.getElementById("img").src="bulb.jpg";   
   document.getElementById("text").innerHTML=" Off";
   document.getElementById("of").style.backgroundColor="yellow";
   document.getElementById("of").style.color="white";
   document.getElementById("on").style.backgroundColor="white";
   document.getElementById("on").style.color="black";
}
function btnOn(){
      document.getElementById("img").src="ON_bulb.jpg";
      document.getElementById("text").innerHTML=" On";
      document.getElementById("on").style.backgroundColor="yellow";
      document.getElementById("on").style.color="white";
      document.getElementById("of").style.backgroundColor="white";
      document.getElementById("of").style.color="black";

}