function dropdownMenu() {
    var x = document.getElementById("dropdownClick");
    if (x.className === "topnav") {
    x.className += " responsive";     
    }         else {
    x.className = "topnav";
             }
         }        



function tforce() {
var today = new Date().getHours();
if (today >= 7 && today <= 19) {
   document.body.style.background = "Red";
} else {
    document.body.style.background = "Blue";
}
}