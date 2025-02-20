var toggle = document.querySelectorAll('.toggle-btn');
var aside = document.querySelectorAll('.left');
var cross = document.querySelectorAll('.cross-p');
function openbox(){
    over.style.opacity = "1";
    over.style.visibility = "visible";
    over.style.transform = "translateX(0)";
}

function closebox(){
    // aside.style.opacity = "0";
    aside.style.visibility = "hidden";
    aside.style.transform = "translateX(-100%)";
}
// cross.addEventListener(
//     'click',
//     function(e){
//         aside.style.left = "-110%";
//     }
// )